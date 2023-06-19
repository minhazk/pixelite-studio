import Image, { StaticImageData } from 'next/image';

type ProjectCardProps = {
    image: StaticImageData;
    name: string;
};

export default function ProjectCard({ image, name }: ProjectCardProps) {
    return (
        <div className='aspect-square rounded-lg bg-secondary overflow-hidden relative shadow-lg shadow-secondary'>
            <div className='w-full h-full relative'>
                <Image src={image} alt='e-commerce website' className='object-cover' fill />
            </div>
            <div className='absolute bg-black/60 inset-0 flex flex-col justify-end p-10'>
                <p className='bg-primary px-7 font-semibold mb-4 py-2 text-sm rounded-sm w-fit tracking-wide'>Website</p>
                <p className='text-white font-bold  md:text-xl'>{name}</p>
            </div>
        </div>
    );
}
