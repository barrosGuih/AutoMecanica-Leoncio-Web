import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get('token');

  if (!token && url.pathname.startsWith('/restrictArea/dashboard')) {
    // Como a pasta é "page", o redirect precisa incluir /page
    url.pathname = '/restrictArea/login/page';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/restrictArea/dashboard/:path*'],
};
