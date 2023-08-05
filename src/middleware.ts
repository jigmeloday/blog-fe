import { NextRequest, NextResponse } from 'next/server';

export function middleware (request: NextRequest) {
 const value = request.cookies.getAll();
 if ( request.url.includes('/profile') && !value[0]?.value ) {
  return  NextResponse.redirect(new URL('/login', request.url));
 }
 if ( request.url.includes('/login') && !!value[0]?.value ) {
  return NextResponse.redirect(new URL('/', request.url));
 }
}

export const config = {
 matcher: ['/login', '/register', '/profile']
};
