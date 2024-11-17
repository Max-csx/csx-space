import { NextAuthConfig } from 'next-auth';
export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        authorized: ({ auth, request: { nextUrl } }) => {
            const isLogin = auth?.user;
            const isLoginPage = nextUrl.pathname === '/login';
            const isRegisterPage = nextUrl.pathname === '/register';
            console.log(auth, 'auth');
            if (isLoginPage || isRegisterPage) {
                return true;
            } else {
                return isLogin;
            }
        },
    },
} as NextAuthConfig;
