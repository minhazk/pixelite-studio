import { projects } from '@/assets/data';
import ProjectCard from '@/components/ProjectCard';

export default function Page() {
    return (
        <main>
            <h1 className='text-primary text-md md:text-xl font-semibold'>Our Portfolio: Showcasing Our Craftsmanship</h1>
            <p className='text-white/70 text-xs md:text-sm mt-2'>Explore a Gallery of Our Previous Projects, Demonstrating our Expertise in Web and Mobile App Development</p>
            <div className='gap-5 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] grid-flow-dense justify-center my-8'>
                {projects.map((project, i) => (
                    <ProjectCard {...project} key={i} />
                ))}
            </div>
        </main>
    );
}
