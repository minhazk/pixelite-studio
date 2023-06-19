import SlideShow from '@/components/SlideShow';
import SectionContainer from '@/components/ui/SectionContainer';
import { RefreshCcw } from 'lucide-react';

export default function PerformanceHighlights() {
    return (
        <SectionContainer>
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 [&>div]:rounded-lg max-w-6xl mx-auto'>
                <div className='flex flex-col bg-accent p-3 sm:p-5 col-span-2'>
                    <p className='text-2xl sm:text-4xl font-semibold'>90%</p>
                    <p className='text-sm font-semibold'>Retention rate</p>
                </div>
                <div className='flex flex-col bg-accent p-3 sm:p-5 text-center'>
                    <p className='text-2xl sm:text-4xl font-semibold'>24h</p>
                    <p className='text-sm font-semibold'>Response time</p>
                </div>
                <div className='col-span-3 bg-secondary p-5 sm:p-8 lg:order-4'>
                    <p className='text-white text-sm font-medium'>We&apos;ll revise the designs until you&apos;re 100% satisfied</p>
                    <p className='text-white/80 text-sm font-normal mt-3 mb-5'>
                        We&apos;ll refine the designs until they exceed your expectations, ensuring your vision is flawlessly translated into captivating visuals.
                    </p>
                    <div className='w-fit ml-auto pr-3'>
                        <RefreshCcw size={25} className='animate-[spin_5s_ease_infinite] text-white' />
                    </div>
                </div>
                <div className='col-span-3 row-span-2 bg-secondary p-5 sm:p-8'>
                    <SlideShow />
                </div>
            </div>
        </SectionContainer>
    );
}
