import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import PerformanceHighlights from '@/sections/PerformanceHighlights';
import Services from '@/sections/Services';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <div className='px-2'>
                    <PerformanceHighlights />
                    <Services />
                </div>
            </main>
        </>
    );
}
