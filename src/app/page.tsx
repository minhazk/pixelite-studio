'use client';

import Contact from '@/sections/Contact';
import FAQs from '@/sections/FAQs';
import Hero from '@/sections/Hero';
import PerformanceHighlights from '@/sections/PerformanceHighlights';
import PreviousWork from '@/sections/PreviousWork';
import Services from '@/sections/Services';
import { useState } from 'react';

export default function Home() {
    const [emailInput, setEmailInput] = useState<string>('');

    return (
        <>
            <main>
                <Hero setEmailInput={setEmailInput} />
                <div className='px-2'>
                    <PerformanceHighlights />
                    <Services />
                    <PreviousWork />
                    <Contact email={emailInput} />
                    <FAQs />
                </div>
            </main>
        </>
    );
}
