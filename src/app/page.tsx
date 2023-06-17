import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import PerformanceHighlights from '@/sections/PerformanceHighlights';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PerformanceHighlights />
            </main>
        </>
    );
}
