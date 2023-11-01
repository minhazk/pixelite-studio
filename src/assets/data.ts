import Project1 from '@/assets/ajgarmz.jpg';
import Project2 from '@/assets/cryptopal.jpg';
import Project3 from '@/assets/londonsafegas.jpg';

export const featuredProjects = [
    {
        image: Project1,
        name: 'Ecommerce Clothing Store',
        link: 'https://www.ajgarmz.co.uk/',
        description: 'Online clothing store including Stripe payment integration',
    },
    {
        image: Project2,
        name: 'Online Social Forum',
        link: 'https://cryptopal-two.vercel.app/home',
        description: 'Forum posting platform with upvote and downvote system for crypto community',
    },
];

export const projects = [
    ...featuredProjects,
    {
        image: Project3,
        name: 'Service Industry Portfolio ',
        link: 'https://londonsafegas.co.uk/',
        description: 'Plumbing and Gas Company portfolio featuring services and mail list option',
        review: 'I had a fantastic experience working with Pixelite Studio. Communication was excellent, with quick responses at all hours. They were very accommodating and made multiple amendments to the website, providing valuable advice on design. Throughout the process, they demonstrated professionalism and attentiveness to my needs. The final website design surpassed my expectations. I highly recommend Pixelite Studio for their outstanding service.',
    },
];

export const slides = [
    [
        'Completion time',
        'Crafting Powerful Solutions with Lean Code, Fast Completion Times, and Unparalleled Quality',
        'Trust our skilled team to deliver exceptional results. We write clean, efficient code for optimal performance. With agile development and streamlined processes, we ensure fast completion times without compromising quality',
    ],
    [
        'Transform Your Ideas into Reality',
        'Unlock the Potential of Your Business with Customized Web and Mobile App Solutions',
        'Collaborate with us to create tailor-made web and mobile app solutions. We combine cutting-edge technologies, intuitive design, and seamless functionality to bring your vision to life',
    ],
    [
        'Elevate Your Digital Presence',
        'Delivering Engaging User Experiences and Cutting-Edge Functionality for Businesses Worldwide',
        'Make a lasting impact with visually stunning websites and apps. We focus on user experiences that captivate and ensure seamless functionality, leveraging the latest industry trends and technologies',
    ],
];

export const FAQ = [
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
