import { NextRequest, NextResponse } from 'next/server';
import { hasCookie } from 'cookies-next';

export function middleware (request: NextRequest) {
 const test = hasCookie('authenticated');
 if ( request.url.includes('/profile') && test ) {
  return  NextResponse.redirect(new URL('/login', request.url));
 }
 if ( request.url.includes('/login') && !test ) {
  return NextResponse.redirect(new URL('/', request.url));
 }
}

export const config = {
 matcher: ['/login', '/register', '/profile']
};
