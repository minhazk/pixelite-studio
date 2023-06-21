import Header from '@/components/ui/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'ApeX Development',
    description: 'ApeX Development services and works demonstration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} container mx-auto px-4 sm:px-6`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
