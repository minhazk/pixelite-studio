import Disclosure from '@/components/Disclosure';

const data = [
    [
        'How long does it take to develop a website or mobile app?',
        'The development timeline depends on the complexity and scope of the project. We provide estimated timelines during the project scoping phase based on your specific requirements.',
    ],
    [
        'How do you ensure the security of websites and mobile apps?',
        'We prioritize security throughout the development process. We implement industry-standard security practices, conduct code reviews, perform rigorous testing, and follow best practices for data protection and encryption.',
    ],
    [
        'Can you assist with website hosting and domain registration?',
        'Yes, we can assist you with website hosting and domain registration. We can recommend reliable hosting providers and guide you through the process of domain registration if needed.',
    ],
    [
        'How do you handle project communication and updates?',
        'We use various communication channels such as email, phone calls, and project management tools to keep you updated throughout the project. We schedule regular progress meetings to discuss milestones, address any concerns, and ensure effective communication.',
    ],
    [
        'Can you integrate third-party services or APIs into the websites or apps?',
        "Yes, we have expertise in integrating third-party services and APIs into websites and apps. Whether it's payment gateways, social media integrations, or other external services, we can seamlessly incorporate them into your project.",
    ],
    [
        'What is the cost structure for web and app development services?',
        'The cost depends on the scope, complexity, and specific requirements of your project. We provide detailed cost estimates after understanding your needs during the initial consultation.',
    ],
];

export default function FAQs() {
    return (
        <div className='my-10 md:my-16 lg:my-20 mx-auto max-w-6xl'>
            <h2 className='text-primary text-center text-lg md:text-xl font-semibold mb-6'>FAQs</h2>
            <div className='flex flex-col'>
                {data.map(([question, answer], i) => (
                    <Disclosure key={question} question={question} answer={answer} index={i} />
                ))}
            </div>
        </div>
    );
}
