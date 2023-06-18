import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type SectionContainerProps = {
    children: ReactNode;
    id?: string;
};

export default function SectionContainer({ children, id }: SectionContainerProps) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='my-10 md:my-16 lg:my-20 scroll-mt-10 last:min-h-screen first:mt-8'
        >
            {children}
        </motion.div>
    );
}
