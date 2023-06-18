'use client';

import Header from '@/components/ui/Header';
import Contact from '@/sections/Contact';
import FAQs from '@/sections/FAQs';
import Hero from '@/sections/Hero';
import PerformanceHighlights from '@/sections/PerformanceHighlights';
import PreviousWork from '@/sections/PreviousWork';
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
                    <PreviousWork />
                    <Contact />
                    <FAQs />
                </div>
            </main>
        </>
    );
}
