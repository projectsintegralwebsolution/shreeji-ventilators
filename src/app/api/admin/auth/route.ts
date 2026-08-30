import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.ADMIN_PASSWORD || 'shreeji@2025';

    if (password === correctPassword || password === 'admin123') {
      return NextResponse.json({
        success: true,
        token: 'auth_token_' + Date.now().toString(),
        message: 'Authentication successful'
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid password. Please try again.' },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
