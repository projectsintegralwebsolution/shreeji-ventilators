import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  focusKeywords: string[];
  isPublished: boolean;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city?: string;
  product?: string;
  shedDimensions?: string;
  message?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
}

export interface SiteSettings {
  companyName: string;
  brandName: string;
  primaryPhone: string;
  secondaryPhone: string;
  whatsappNumber: string;
  primaryEmail: string;
  salesEmail: string;
  adminAlertEmail: string;
  clientAlertEmail: string;
  factoryAddress: string;
  workingHours: string;
  announcementBanner?: string;
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPass?: string;
  smtpSecure?: boolean;
}

const dataDir = path.join(process.cwd(), 'src/data/store');

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readJsonFile<T>(filename: string, defaultData: T): T {
  ensureDataDir();
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
    return defaultData;
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return defaultData;
  }
}

function writeJsonFile<T>(filename: string, data: T): void {
  ensureDataDir();
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

const initialSettings: SiteSettings = {
  companyName: 'Shreeji Sales Corporation',
  brandName: 'Simpovent™',
  primaryPhone: '+91 93202 93021',
  secondaryPhone: '+91 72628 60283',
  whatsappNumber: '917262860283',
  primaryEmail: 'info@shreejiwind.com',
  salesEmail: 'info@shreejiwindventilator.com',
  adminAlertEmail: 'princekumarjha80@gmail.com',
  clientAlertEmail: 'info@shreejiwind.com',
  factoryAddress: 'Ground Flr, Building No-1, Gala No:- 11, Takdir Industrial Estate, Vasai East, Opposite Fiza Restaurant, Vasai Virar, Palghar, Maharashtra - 401208, India',
  workingHours: 'Monday - Saturday: 8:30 AM - 7:30 PM',
  announcementBanner: 'Direct Factory Supply & Pan-India Dispatch Available for All 21 Ventilator Models.',
  smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
  smtpPort: Number(process.env.SMTP_PORT) || 587,
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpSecure: false
};

export const db = {
  getBlogs: (onlyPublished = true): BlogPost[] => {
    const blogs = readJsonFile<BlogPost[]>('blogs.json', []);
    return onlyPublished ? blogs.filter(b => b.isPublished) : blogs;
  },
  getBlogBySlug: (slug: string): BlogPost | undefined => {
    const blogs = readJsonFile<BlogPost[]>('blogs.json', []);
    return blogs.find(b => b.slug === slug);
  },
  getBlogById: (id: string): BlogPost | undefined => {
    const blogs = readJsonFile<BlogPost[]>('blogs.json', []);
    return blogs.find(b => b.id === id);
  },
  saveBlog: (blogData: Partial<BlogPost> & { title: string }): BlogPost => {
    const blogs = readJsonFile<BlogPost[]>('blogs.json', []);
    const now = new Date().toISOString().split('T')[0];
    
    if (blogData.id) {
      const index = blogs.findIndex(b => b.id === blogData.id);
      if (index !== -1) {
        blogs[index] = {
          ...blogs[index],
          ...blogData,
          updatedAt: now
        } as BlogPost;
        writeJsonFile('blogs.json', blogs);
        return blogs[index];
      }
    }

    const newSlug = (blogData.slug || blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    const newBlog: BlogPost = {
      id: Date.now().toString(),
      title: blogData.title,
      slug: newSlug,
      excerpt: blogData.excerpt || '',
      content: blogData.content || '',
      category: blogData.category || 'General',
      tags: blogData.tags || [],
      author: blogData.author || 'Shreeji Engineering Team',
      authorRole: blogData.authorRole || 'Ventilation Specialist',
      publishedAt: blogData.publishedAt || now,
      updatedAt: now,
      readTime: blogData.readTime || '5 min read',
      featuredImage: blogData.featuredImage || '/images/products/powerless-ventilator.jpg',
      metaTitle: blogData.metaTitle || blogData.title,
      metaDescription: blogData.metaDescription || blogData.excerpt || '',
      focusKeywords: blogData.focusKeywords || [],
      isPublished: blogData.isPublished !== undefined ? blogData.isPublished : true
    };

    blogs.unshift(newBlog);
    writeJsonFile('blogs.json', blogs);
    return newBlog;
  },
  deleteBlog: (id: string): boolean => {
    const blogs = readJsonFile<BlogPost[]>('blogs.json', []);
    const filtered = blogs.filter(b => b.id !== id);
    if (filtered.length !== blogs.length) {
      writeJsonFile('blogs.json', filtered);
      return true;
    }
    return false;
  },

  getLeads: (): Lead[] => {
    return readJsonFile<Lead[]>('leads.json', []);
  },
  addLead: (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead => {
    const leads = readJsonFile<Lead[]>('leads.json', []);
    const newLead: Lead = {
      ...leadData,
      id: 'lead_' + Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    leads.unshift(newLead);
    writeJsonFile('leads.json', leads);
    return newLead;
  },
  updateLeadStatus: (id: string, status: Lead['status']): boolean => {
    const leads = readJsonFile<Lead[]>('leads.json', []);
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      writeJsonFile('leads.json', leads);
      return true;
    }
    return false;
  },

  getSettings: (): SiteSettings => {
    return readJsonFile<SiteSettings>('settings.json', initialSettings);
  },
  updateSettings: (newSettings: Partial<SiteSettings>): SiteSettings => {
    const current = readJsonFile<SiteSettings>('settings.json', initialSettings);
    const updated = { ...current, ...newSettings };
    writeJsonFile('settings.json', updated);
    return updated;
  }
};
