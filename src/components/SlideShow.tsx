import { slides } from '@/assets/data';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 4500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect;

    return (
        <AnimatePresence mode='wait'>
            <div className='overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4.5 }}
                    className='min-h-[250px]'
                    style={{ fontSize: 100 }}
                    key={currentSlide}
                >
                    <p className='text-white text-lg font-semibold'>{slides[currentSlide][0]}</p>
                    <p className='text-white/80 text-sm font-medium my-3'>{slides[currentSlide][1]}</p>
                    <p className='text-white/80 text-sm font-medium'>{slides[currentSlide][2]}</p>
                </motion.div>
                <Indicators currentSlide={currentSlide} quantity={slides.length} setCurrentSlide={setCurrentSlide} />
            </div>
        </AnimatePresence>
    );
}

type IndicatorsProps = {
    currentSlide: number;
    quantity: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
};

function Indicators({ currentSlide, quantity, setCurrentSlide }: IndicatorsProps) {
    return (
        <div className='flex items-center justify-center gap-2 mt-7'>
            {Array.from({ length: quantity }).map((_, i) => (
                <button onClick={() => setCurrentSlide(i)} className={`aspect-square rounded-full ${currentSlide === i ? 'w-3 bg-primary' : 'w-2 bg-white'}`} key={i}></button>
            ))}
        </div>
    );
}
