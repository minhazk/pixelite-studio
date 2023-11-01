import { projects } from '@/assets/data';
import ProjectCard from '@/components/ProjectCard';

export default function Page() {
    return (
        <>
            <h1 className='text-primary text-md md:text-xl font-semibold'>Our Portfolio: Showcasing Our Craftsmanship</h1>
            <p className='text-white/70 text-xs md:text-sm mt-2'>Explore a Gallery of Our Previous Projects, Demonstrating our Expertise in Web and Mobile App Development</p>
            <div className='gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8'>
                {projects.map((project, i) => (
                    <ProjectCard {...project} key={i} />
                ))}
            </div>
        </>
    );
}
