import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import { createClient } from '@/app/utils/supabase/server';
// 字体
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

// 元数据 标题 描述
export const metadata: Metadata = {
    title: 'CSX Space',
    description: '日常分享',
};

// 全局布局layout
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();

    let { data: categories, error } = await supabase
        .from('categories')
        .select('*')
        .order('id', { ascending: true });

    const list = [{ id: -1, name: '首页', category_type: 'home' }, ...(categories || [])];
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header list={list} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
