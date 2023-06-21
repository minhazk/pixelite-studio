import SectionContainer from '@/components/ui/SectionContainer';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects } from '@/assets/data';
import Link from 'next/link';

export default function PreviousWork() {
    return (
        <SectionContainer id='works'>
            <div className='flex flex-col mx-auto lg:flex-row gap-10 max-w-5xl lg:max-w-6xl'>
                <div className='lg:order-2 lg:w-1/3'>
                    <h2 className='text-primary text-center md:text-left text-lg md:text-xl font-semibold mb-6'>Browse our latest works</h2>
                    <p className='text-accent text-sm'>
                        Embark on a journey through our portfolio, revealing our expertise in crafting remarkable web and mobile app solutions. Each demonstration highlights our commitment to
                        delivering outstanding outcomes, blending captivating design with flawless functionality. Click the button below to explore more of our success stories and witness the
                        transformative power of our work.
                    </p>
                    <Link href='/projects' className='bg-white py-2 px-5 text-sm rounded-sm font-semibold mt-5 lg:inline-flex hidden'>
                        View More
                    </Link>
                </div>
                <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:w-2/3'>
                    {featuredProjects.map((project, i) => (
                        <ProjectCard {...project} key={i} />
                    ))}
                </div>
            </div>

            <Link href='/' className='bg-white py-2 px-5 text-sm rounded-sm font-semibold mt-10 block mx-auto w-fit lg:hidden hover:opacity-80 focus-within:opacity-80'>
                View More
            </Link>
        </SectionContainer>
    );
}
