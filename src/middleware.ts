import { NextRequest, NextResponse } from 'next/server';
import { setCookie, hasCookie } from 'cookies-next';

export function middleware (request: NextRequest) {
 const value = request.cookies.getAll();
 if ( request.url.includes('/profile') && !value[0]?.value ) {
  return  NextResponse.redirect(new URL('/login', request.url));
 }
 if ( request.url.includes('/login') && !!value[0]?.value ) {
  return NextResponse.redirect(new URL('/', request.url));
 }
 if ( !hasCookie('authenticated') ) {
  setCookie('authenticated', value);
 }
}

export const config = {
 matcher: ['/login', '/register', '/profile']
};
