import Header from '@/components/Header';
import Contact from '@/sections/Contact';
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
                </div>
            </main>
        </>
    );
}
