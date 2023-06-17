'use client';

export default function Hero() {
    return (
        <div className='text-center py-16 px-8 max-w-2xl mx-auto'>
            <h1 className='text-primary text-2xl md:text-3xl font-semibold'>ApeX Development</h1>
            <h2 className='text-white text-lg my-4 md:text-xl lg:text-3xl font-semibold'>Transforming Ideas into Seamless Digital Experiences</h2>
            <p className='text-xs md:text-sm lg:text-base text-white/60'>Empowering Business Growth with Cutting-Edge Solutions</p>

            <form
                onSubmit={e => e.preventDefault()}
                className='mt-10 relative text-xs md:text-sm lg:text-base flex gap-3 rounded-full bg-secondary [&:has(:focus-visible)]:border-accent border-2 border-transparent transition-colors'
            >
                <input type='email' className='bg-transparent px-5 py-2 w-full rounded-full outline-none text-accent' placeholder='Type your email address' />
                <button type='submit' className='bg-primary py-2 px-5 rounded-full whitespace-nowrap m-2 font-semibold'>
                    Get Started
                </button>
            </form>
        </div>
    );
}
