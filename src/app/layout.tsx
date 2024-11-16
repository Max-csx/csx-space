import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

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
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
