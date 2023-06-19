import SectionContainer from '@/components/ui/SectionContainer';

export default function Contact() {
    return (
        <SectionContainer id='contact'>
            <div className='max-w-6xl mx-auto bg-secondary rounded-lg p-8 sm:p-10 md:py-20 flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2'>
                    <p className='text-primary text-sm md:text-base font-semibold'>Get in touch</p>
                    <h3 className='text-white font-bold text-2xl lg:text-3xl my-3'>Have a project in mind?</h3>
                    <p className='text-white/60 text-xs md:text-sm'>Reach out to us and let&apos;s start transforming your ideas into reality.</p>
                </div>

                <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-4 md:gap-6 md:w-1/2'>
                    <input
                        type='email'
                        className='bg-white/10 px-5 py-3 w-full text-xs sm:text-sm rounded-md outline-none text-accent border border-transparent focus-within:border-white transition-colors'
                        placeholder='Type tour email address'
                    />
                    <textarea
                        className='bg-white/10 px-5 py-3 w-full text-xs sm:text-sm rounded-md resize-none h-28 outline-none text-accent border border-transparent focus-within:border-white transition-colors'
                        placeholder='Type tour email address'
                    ></textarea>
                    <button className='bg-primary py-2 px-5 rounded-md font-semibold text-xs md:text-sm w-fit hover:opacity-80 focus-within:opacity-80' type='submit'>
                        Send
                    </button>
                </form>
            </div>
        </SectionContainer>
    );
}
