import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const leads = db.getLeads();
  return NextResponse.json({ success: true, leads });
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and Status required' }, { status: 400 });
    }
    const ok = db.updateLeadStatus(id, status);
    return NextResponse.json({ success: ok });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
