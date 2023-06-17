export default function PreviousWork() {
    return (
        <div className='my-10 md:my-16 lg:my-20 mx-auto max-w-4xl'>
            <h2 className='text-primary text-center text-lg md:text-xl font-semibold mb-2'>Browse our latest works</h2>
            <p className='text-white/60 text-xs text-center'>Discover our recent web and mobile app creations</p>

            <div className='grid grid-cols-2 gap-4 mt-8'>
                <div className='aspect-square rounded-lg bg-secondary'></div>
                <div className='aspect-square rounded-lg bg-secondary'></div>
            </div>
        </div>
    );
}
