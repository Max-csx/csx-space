import { authConfig } from '../auth.config';
import nextAuth from 'next-auth';

export default nextAuth(authConfig).auth;

// 设置匹配路径
export const config = {
  matcher: [
    /*
     * 匹配所有的路径除了以这些作为开头的：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}