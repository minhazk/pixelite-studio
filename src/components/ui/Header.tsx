import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
    return (
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -35 }} transition={{ delay: 0.2, duration: 0.75, ease: 'easeInOut' }} className='mt-8 mb-4 flex justify-center'>
            <ul className='flex items-center gap-7 sm:gap-16 text-sm text-white/60'>
                <li>
                    <Link href='#services'>Services</Link>
                </li>
                <li>
                    <Link href='#works'>Works</Link>
                </li>
                <li>
                    <Link href='#contact'>Contact</Link>
                </li>
                <li>
                    <Link href='#FAQs'>FAQs</Link>
                </li>
            </ul>
        </motion.div>
    );
}