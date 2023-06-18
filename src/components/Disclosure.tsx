'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type DisclosureProps = {
    index: number;
    question: string;
    answer: string;
};

export default function Disclosure({ index, question, answer }: DisclosureProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='border-b border-white/20 py-7'>
            <div className='text-white flex items-center gap-2 justify-between'>
                <p className='text-sm lg:text-base font-semibold grid grid-cols-[auto,1fr]'>
                    <span className='mr-4 md:mr-8'>{index + 1}</span>
                    {question}
                </p>
                <button onClick={() => setIsOpen(p => !p)}>
                    <ChevronDown size={25} strokeWidth={3} className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
                </button>
            </div>
            {isOpen && <div className='text-xs sm:text-sm text-accent mt-5 px-6 md:px-10'>{answer}</div>}
        </div>
    );
}
