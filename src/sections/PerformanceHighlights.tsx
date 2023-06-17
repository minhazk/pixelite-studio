export default function PerformanceHighlights() {
    return (
        <div className='grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 [&>div]:rounded-lg max-w-4xl mx-auto'>
            <div className='flex flex-col bg-accent p-3 sm:p-5 col-span-2'>
                <p className='text-2xl sm:text-4xl font-semibold'>90%</p>
                <p className='text-xs sm:text-sm font-semibold'>Retention rate</p>
            </div>
            <div className='flex flex-col bg-accent p-3 sm:p-5 text-center'>
                <p className='text-2xl sm:text-4xl font-semibold'>24h</p>
                <p className='text-xs sm:text-sm font-semibold'>Response time</p>
            </div>
            <div className='col-span-3 bg-secondary p-5 sm:p-8 lg:order-4'>
                <p className='text-white text-sm font-medium'>
                    We&apos;ll revise the designs until<br></br> you&apos;re 100% satisfied
                </p>
            </div>
            <div className='col-span-3 row-span-2 bg-secondary p-5 sm:p-8'>
                <p className='text-white text-lg font-semibold mb-4'>Competition time</p>
                <p className='text-white text-sm font-medium'>Crafting Powerful Solutions with Lean Code and Fast Completion Times</p>
            </div>
        </div>
    );
}
