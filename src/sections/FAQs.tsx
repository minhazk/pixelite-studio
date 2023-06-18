import { FAQ } from '@/assets/data';
import Disclosure from '@/components/Disclosure';
import SectionContainer from '@/components/ui/SectionContainer';

export default function FAQs() {
    return (
        <SectionContainer id='FAQs'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-primary text-center text-lg md:text-xl font-semibold mb-6'>FAQs</h2>
                <div className='flex flex-col'>
                    {FAQ.map(([question, answer], i) => (
                        <Disclosure key={question} question={question} answer={answer} index={i} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
