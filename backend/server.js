const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const app = express();
const PORT = process.env.BACKEND_PORT || process.env.PORT || 5000;

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Storage Paths
const dataDir = path.join(__dirname, '../src/data/store');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function readJsonFile(filename, defaultData) {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
    return defaultData;
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error('Error reading ' + filename, err);
    return defaultData;
  }
}

function writeJsonFile(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    server: 'Shreeji Sales Express Backend',
    timestamp: new Date().toISOString(),
    recipients: {
      client: 'info@shreejiwind.com',
      admin: 'princekumarjha80@gmail.com'
    }
  });
});

// Main 3-Way Email Notification Route
app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, phone, email, city, product, shedDimensions, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Name and Phone are required.' });
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const settings = readJsonFile('settings.json', {
      clientAlertEmail: 'info@shreejiwind.com',
      adminAlertEmail: 'princekumarjha80@gmail.com',
      smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
      smtpPort: Number(process.env.SMTP_PORT) || 587,
      smtpUser: process.env.SMTP_USER || '',
      smtpPass: process.env.SMTP_PASS || ''
    });

    // 1. Save Lead to Persistent JSON Store
    const leads = readJsonFile('leads.json', []);
    const newLead = {
      id: 'lead_' + Date.now().toString(),
      name,
      phone,
      email: email || '',
      city: city || '',
      product: product || 'Simpovent 24" Turbo Ventilator',
      shedDimensions: shedDimensions || '',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    leads.unshift(newLead);
    writeJsonFile('leads.json', leads);

    // 2. Email HTML Templates
    // A) To Client (info@shreejiwind.com)
    const clientHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background-color: #0e382c; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">New Customer Inquiry (Website Lead)</h2>
          <p style="margin: 5px 0 0 0; color: #2ec4b6; font-size: 13px;">Shreeji Sales Corporation • Simpovent™</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <p><strong>A new quotation request has been submitted through the website:</strong></p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f8fafc;"><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 35%;">Customer Name:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone Number:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}" style="color: #0e382c; font-weight: bold;">${phone}</a></td></tr>
            <tr style="background-color: #f8fafc;"><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email Address:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${email || 'Not provided'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">City / Location:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${city || 'Not specified'}</td></tr>
            <tr style="background-color: #f8fafc;"><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Product Interested:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0e382c; font-weight: bold;">${product || 'Industrial Turbo Ventilator'}</td></tr>
            ${shedDimensions ? `<tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Shed Dimensions:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${shedDimensions}</td></tr>` : ''}
            <tr style="background-color: #f8fafc;"><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Message / Remarks:</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${message || 'No additional message'}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Received At:</td><td style="padding: 10px;">${timestamp} IST</td></tr>
          </table>
        </div>
        <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
          Shreeji Sales Corporation • Vasai (East), Palghar, Maharashtra • +91 93202 93021
        </div>
      </div>
    `;

    // B) To Customer (Confirmation)
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background-color: #0e382c; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">Thank You for Contacting Shreeji Sales Corporation</h2>
          <p style="margin: 5px 0 0 0; color: #2ec4b6; font-size: 13px;">Brand: Simpovent™ • ISO 9001:2015 Certified</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>We have received your quotation request for <strong>${product || 'Industrial Roof Ventilators'}</strong>.</p>
          <p>Our sales engineering team from our Vasai manufacturing facility is reviewing your requirements and will contact you promptly at <strong>${phone}</strong> with factory-direct pricing and technical sizing details.</p>
          
          <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #065f46;">Need Urgent Assistance?</p>
            <p style="margin: 0; font-size: 13px; color: #047857;">You can chat directly with our senior engineer on WhatsApp: <a href="https://wa.me/917262860283" style="color: #065f46; font-weight: bold;">+91 72628 60283</a> or call <a href="tel:+919320293021" style="color: #065f46; font-weight: bold;">+91 93202 93021</a>.</p>
          </div>

          <p style="font-size: 13px; color: #64748b;">
            Best Regards,<br />
            <strong>Sales & Engineering Team</strong><br />
            Shreeji Sales Corporation (Simpovent™)<br />
            Takdir Ind. Estate, Vasai East, Palghar, Maharashtra - 401208
          </p>
        </div>
      </div>
    `;

    // C) To Admin / Developer: princekumarjha80@gmail.com
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <div style="background-color: #09261e; color: #ffffff; padding: 16px; text-align: center;">
          <h3 style="margin: 0; font-size: 18px;">[New Lead Alert] Shreeji Wind Ventilator Website</h3>
          <p style="margin: 4px 0 0 0; color: #2ec4b6; font-size: 12px;">Admin Notification Copy (princekumarjha80@gmail.com)</p>
        </div>
        <div style="padding: 20px; color: #1e293b; line-height: 1.5; font-size: 14px;">
          <p><strong>Customer Inquiry Details:</strong></p>
          <ul style="line-height: 1.8;">
            <li><strong>Customer Name:</strong> ${name}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email || 'N/A'}</li>
            <li><strong>City:</strong> ${city || 'N/A'}</li>
            <li><strong>Product:</strong> ${product || 'Turbo Ventilator'}</li>
            ${shedDimensions ? `<li><strong>Shed Dimensions:</strong> ${shedDimensions}</li>` : ''}
            <li><strong>Message:</strong> ${message || 'N/A'}</li>
            <li><strong>Received At:</strong> ${timestamp} IST</li>
          </ul>
        </div>
      </div>
    `;

    // 3. SMTP Dispatch via Nodemailer
    const smtpHost = settings.smtpHost || process.env.SMTP_HOST;
    const smtpPort = Number(settings.smtpPort || process.env.SMTP_PORT) || 587;
    const smtpUser = settings.smtpUser || process.env.SMTP_USER;
    const smtpPass = settings.smtpPass || process.env.SMTP_PASS;

    let emailSent = false;
    let emailStatusMessage = '';

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass }
        });

        // 1. Email to Client (info@shreejiwind.com)
        await transporter.sendMail({
          from: `"Shreeji Website Lead" <${smtpUser}>`,
          to: 'info@shreejiwind.com, info@shreejiwindventilator.com',
          subject: `[New Lead] ${product || 'Turbo Ventilator'} Inquiry from ${name} (${city || 'India'})`,
          html: clientHtml
        });

        // 2. Email to Customer (if email given)
        if (email && email.includes('@')) {
          await transporter.sendMail({
            from: `"Shreeji Sales Corp" <${smtpUser}>`,
            to: email,
            subject: 'Quotation Request Received - Shreeji Sales Corporation (Simpovent™)',
            html: customerHtml
          });
        }

        // 3. Email to Admin (princekumarjha80@gmail.com)
        await transporter.sendMail({
          from: `"Shreeji Website Alert" <${smtpUser}>`,
          to: 'princekumarjha80@gmail.com',
          subject: `[Lead Alert] ${name} (${city || 'India'}) - ${product || 'Ventilator'}`,
          html: adminHtml
        });

        emailSent = true;
        emailStatusMessage = '3-way notification emails dispatched successfully.';
      } catch (mailErr) {
        console.error('Nodemailer dispatch error:', mailErr);
        emailStatusMessage = 'SMTP Error: ' + mailErr.message;
      }
    } else {
      emailStatusMessage = 'Lead logged. SMTP credentials can be set in .env.local or /admin/settings.';
    }

    console.log(`--- [EXPRESS BACKEND] 3-WAY NOTIFICATION PROCESSED ---`);
    console.log(`1. Client: info@shreejiwind.com`);
    console.log(`2. Customer: ${email || 'N/A'}`);
    console.log(`3. Admin: princekumarjha80@gmail.com`);

    return res.json({
      success: true,
      emailSent,
      message: emailStatusMessage,
      lead: newLead,
      recipients: {
        client: 'info@shreejiwind.com',
        customer: email || 'N/A',
        admin: 'princekumarjha80@gmail.com'
      }
    });
  } catch (err) {
    console.error('Express inquiry error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Contact Route Alias
app.post('/api/contact', (req, res) => {
  req.url = '/api/inquiry';
  app._router.handle(req, res);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Shreeji Express Backend running on http://localhost:${PORT}`);
  console.log(`📧 3-Way Nodemailer Notifications Configured:`);
  console.log(`   1. Client: info@shreejiwind.com`);
  console.log(`   2. Customer: (Form submitter email)`);
  console.log(`   3. Admin: princekumarjha80@gmail.com`);
});
