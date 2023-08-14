import { NextRequest, NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

export function middleware (request: NextRequest) {
 const auth = ['/login', '/register', '/forgot-password'];
 const test = getCookie('authenticated');
 if ( request.url.includes('/profile') && !test ) {
  return  NextResponse.redirect(new URL('/login', request.url));
 }
 if ( auth.some(keyword => request.url.includes(keyword)) && test ) {
  return NextResponse.redirect(new URL('/', request.url));
 }
}

export const config = {
 matcher: ['/login', '/register', '/profile']
};
