import Header from '@/components/ui/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Pixelite Studio',
    description: 'Pixelite Studio services and works demonstration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} container mx-auto px-5 sm:px-8 min-h-screen flex flex-col w-full`}>
                <Header />
                <main className='flex-grow'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
