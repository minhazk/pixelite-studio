import { showToast } from '@/utils/toastNotification';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Dispatch, FormEvent, SetStateAction } from 'react';

export default function Hero({ setEmailInput }: { setEmailInput: Dispatch<SetStateAction<string>> }) {
    const { push } = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        if (email == null || email === '') return showToast('Please enter an email');
        setEmailInput(email);
        push('/#contact');
    };

    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }} className='text-center pt-8 pb-16 px-8 max-w-2xl mx-auto'>
            <h1 className='text-primary text-2xl md:text-3xl font-semibold'>Pixelite Studio</h1>
            <h2 className='text-white text-lg my-4 md:text-xl lg:text-3xl font-semibold'>Transforming Ideas into Seamless Digital Experiences</h2>
            <p className='text-xs md:text-sm lg:text-base text-white/60'>Empowering Business Growth with Cutting-Edge Solutions</p>

            <form
                onSubmit={handleSubmit}
                className='mt-10 relative text-xs md:text-sm lg:text-base flex gap-3 rounded-full bg-secondary [&:has(:focus-visible)]:border-accent border-2 border-transparent transition-colors'
            >
                <input type='email' name='email' className='bg-transparent px-5 py-2 w-full rounded-full outline-none text-accent autofill:bg-transparent' placeholder='Type your email address' />
                <button type='submit' className='bg-primary py-2 px-5 rounded-full whitespace-nowrap m-2 font-semibold hover:opacity-80 focus-within:opacity-80'>
                    Get Started
                </button>
            </form>
        </motion.div>
    );
}
