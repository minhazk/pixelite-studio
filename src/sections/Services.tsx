import SectionContainer from '@/components/ui/SectionContainer';
import { CheckCircle2, MonitorSmartphone, Smartphone } from 'lucide-react';

export default function Services() {
    return (
        <SectionContainer id='services'>
            <div className='flex flex-col mx-auto md:flex-row gap-10 max-w-5xl lg:max-w-6xl'>
                <div>
                    <h2 className='text-primary text-center md:text-left text-lg md:text-xl font-semibold mb-6'>Services</h2>
                    <p className='text-accent text-sm'>
                        Unlock your digital potential with Pixelite Studio. We specialize in web and mobile app development services that drive growth and deliver seamless experiences. From
                        captivating designs to robust development, trust us to bring your ideas to life and empower your success.
                    </p>
                </div>

                <div className='flex flex-col gap-4 md:flex-row text-white'>
                    <div className='bg-secondary rounded-lg p-7 sm:min-w-[200px] lg:min-w-[300px] flex flex-col gap-3'>
                        <div className='flex md:flex-col items-center md:items-start mb-3 gap-3'>
                            <MonitorSmartphone size={30} />
                            <h3 className='sm:text-lg font-medium'>Website Development</h3>
                        </div>
                        <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                            <li className='flex gap-3 items-center'>
                                <CheckCircle2 size={18} />
                                Frontend Dev
                            </li>
                            <li className='flex gap-3 items-center'>
                                <CheckCircle2 size={18} />
                                Backend Dev
                            </li>
                        </ul>
                    </div>
                    <div className='bg-secondary rounded-lg p-7 sm:min-w-[200px] lg:min-w-[300px] flex flex-col gap-3'>
                        <div className='flex md:flex-col items-center md:items-start mb-3 gap-3'>
                            <Smartphone size={30} />
                            <h3 className='sm:text-lg font-medium'>Mobile App Development</h3>
                        </div>
                        <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                            <li className='flex gap-3 items-center'>
                                <CheckCircle2 size={18} />
                                Android App
                            </li>
                            <li className='flex gap-3 items-center'>
                                <CheckCircle2 size={18} />
                                IOS App
                            </li>
                            <li className='flex gap-3 items-center'>
                                <CheckCircle2 size={18} />
                                Web Apps
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
