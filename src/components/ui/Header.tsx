'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
    return (
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -35 }} transition={{ delay: 0.2, duration: 0.75, ease: 'easeInOut' }} className='my-6 md:my-9 flex justify-center'>
            <ul className='flex items-center gap-5 sm:gap-12 text-sm text-white/60'>
                <li>
                    <Link
                        href='/#services'
                        className='px-1 py-3 sm:p-2 relative before:absolute before:h-px before:w-0 before:bg-accent focus-within:before:w-full outline-none before:left-1/2 before:-translate-x-1/2 before:bottom-0 hover:before:w-full before:transition-all'
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href='/#works'
                        className='px-1 py-3 sm:p-2 relative before:absolute before:h-px before:w-0 before:bg-accent focus-within:before:w-full outline-none before:left-1/2 before:-translate-x-1/2 before:bottom-0 hover:before:w-full before:transition-all'
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        href='/#contact'
                        className='px-1 py-3 sm:p-2 relative before:absolute before:h-px before:w-0 before:bg-accent focus-within:before:w-full outline-none before:left-1/2 before:-translate-x-1/2 before:bottom-0 hover:before:w-full before:transition-all'
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        href='/#FAQs'
                        className='px-1 py-3 sm:p-2 relative before:absolute before:h-px before:w-0 before:bg-accent focus-within:before:w-full outline-none before:left-1/2 before:-translate-x-1/2 before:bottom-0 hover:before:w-full before:transition-all'
                    >
                        FAQs
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}
