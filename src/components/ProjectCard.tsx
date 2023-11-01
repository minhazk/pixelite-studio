'use client';

import { Link, MonitorSmartphone, User } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type ProjectCardProps = {
    image: StaticImageData;
    name: string;
    link?: string;
    review?: string;
};

export default function ProjectCard({ image, name, link, review }: ProjectCardProps) {
    const [isHovering, setHovering] = useState(false);
    return (
        <div
            onMouseEnter={() => {
                setTimeout(() => setHovering(true), 350);
            }}
            onMouseLeave={() => setHovering(false)}
            className='project-card | flex flex-col gap-4 hover:-translate-y-3 transition-all cursor-pointer hover:shadow-2xl hover:shadow-black duration-700 hover:p-4 rounded-lg hover:scale-x-[1.1] hover:z-50 border border-transparent hover:border-black/30'
        >
            <div>
                <div className='aspect-square rounded-lg overflow-hidden relative'>
                    <div className='w-full h-full relative'>
                        <Image src={image} alt={name} className='object-cover' fill />
                    </div>
                    <div className='absolute bg-black/70 inset-0 flex flex-col justify-end p-10'>
                        <p className='bg-primary px-7 font-semibold mb-4 py-2 text-sm rounded-sm w-fit tracking-wide'>Website</p>
                        <p className='text-white font-bold  md:text-xl'>{name}</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-3 text-white'>
                <MonitorSmartphone size={18} />
                {link && (
                    <>
                        |
                        <a href={link} target='_blank' className='transition-all hover:text-primary'>
                            <Link size={16} />
                        </a>
                    </>
                )}
            </div>

            {review && (
                <div className={`grid overflow-hidden transition-[grid-template-rows] ${isHovering ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} duration-700`}>
                    <div className='flex gap-3 min-h-0'>
                        <div>
                            <User size={35} className='text-white rounded-full bg-gray-200/10 p-2' />
                        </div>
                        <p className={`text-gray-400 text-xs`}>{review}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
