import SectionContainer from '@/components/ui/SectionContainer';
import { showToast } from '@/utils/toastNotification';
import { FormEvent } from 'react';

export default function Contact({ email }: { email: string }) {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const body = formData.get('body') as string;
        console.log(email, body);
        if (email == null || email === '' || body == null || body === '') return showToast('Please fill in all fields');

        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, body }),
        });
        if (res.ok) {
            form.reset();
            showToast('Email sent!');
        } else {
            showToast('There was an error sending your email');
        }
    };

    return (
        <SectionContainer id='contact'>
            <div className='max-w-6xl mx-auto bg-secondary rounded-lg p-8 sm:p-10 md:py-20 flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2'>
                    <p className='text-primary text-sm md:text-base font-semibold'>Get in touch</p>
                    <h3 className='text-white font-bold text-2xl lg:text-3xl my-3'>Have a project in mind?</h3>
                    <p className='text-white/60 text-xs md:text-sm'>Reach out to us and let&apos;s start transforming your ideas into reality.</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:gap-6 md:w-1/2'>
                    <input
                        type='email'
                        name='email'
                        defaultValue={email}
                        className='bg-white/10 px-5 py-3 w-full text-xs sm:text-sm rounded-md outline-none text-accent border border-transparent focus-within:border-white transition-colors'
                        placeholder='Type tour email address'
                    />
                    <textarea
                        name='body'
                        className='bg-white/10 px-5 py-3 w-full text-xs sm:text-sm rounded-md resize-none h-28 outline-none text-accent border border-transparent focus-within:border-white transition-colors'
                        placeholder='Tell us about your project'
                    ></textarea>
                    <button className='bg-primary py-2 px-5 rounded-md font-semibold text-xs md:text-sm w-fit hover:opacity-80 focus-within:opacity-80' type='submit'>
                        Send
                    </button>
                </form>
            </div>
        </SectionContainer>
    );
}
