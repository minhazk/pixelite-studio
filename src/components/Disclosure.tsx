'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
            <button onClick={() => setIsOpen(p => !p)} className='text-white flex items-center gap-2 justify-between w-full hover:[&>p]:text-primary'>
                <p className='text-sm lg:text-base font-semibold grid grid-cols-[auto,1fr]'>
                    <span className='mr-4 md:mr-8 text-white'>{index + 1}</span>
                    {question}
                </p>
                <div className='p-1'>
                    <ChevronDown size={22} strokeWidth={3} className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-300`} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='text-xs sm:text-sm text-accent mt-5 px-6 md:px-10'
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
