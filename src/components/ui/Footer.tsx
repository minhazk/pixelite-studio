import { Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='text-white/70 max-w-6xl mb-10 mt-16 mx-auto flex flex-col sm:flex-row md:items-start gap-8 sm:gap-4 sm:justify-between text-center sm:text-left w-full'>
            <div>
                <p className='text-white mb-1 text-md font-medium'>Pixelite Studio</p>
                <p className='text-xs sm:text-sm'>All rights reserved &copy; {new Date().getFullYear()}</p>
                <ul className='flex items-center justify-center sm:justify-start mt-3 gap-2'>
                    <li>
                        <a href='https://www.linkedin.com/in/apex-development-976b2427b' className='p-2 rounded-full inline-flex first:pl-0 hover:text-[#0077b5]' target='_blank'>
                            <Linkedin size={22} />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/apexdevelopmentsoftware/' className='p-2 rounded-full inline-flex first:pl-0 hover:text-[#E4405F]' target='_blank'>
                            <Instagram size={22} />
                        </a>
                    </li>
                    <li>
                        <a href='mailto:pixelitestudio@gmail.com' className='p-2 rounded-full inline-flex first:pl-0 hover:text-white' target='_blank'>
                            <Mail size={22} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col sm:flex-row gap-8 sm:gap-5 md:gap-16'>
                <ul className='flex flex-col gap-2 text-xs'>
                    <li>
                        <p>London, United Kingdom</p>
                    </li>
                    <li>
                        <p>+44 38231297412</p>
                    </li>
                    <li>
                        <p>pixelitestudio@gmail.com</p>
                    </li>
                </ul>

                <ul className='flex flex-col gap-2 text-xs'>
                    <li>
                        <Link href='/'>Terms of Service</Link>
                    </li>
                    <li>
                        <Link href='/'>Privacy policy</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
