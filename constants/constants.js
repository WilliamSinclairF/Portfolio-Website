import rocketElevators from '../public/images/rocket elevators 1.png';
import superPosFrontEnd from '../public/images/react-pos-frontend.png';

export const projects = [
  {
    id: 1,
    name: 'Rocket Elevators',
    shortDescription: 'A Ruby On Rails app with user auth, user permissions, forms, data validation and more',
    description: `This project was realized at the coding bootcamp I attended. Rocket Elevators is a fictive elevator company and we were tasked with adding new features to their website every week. The site is built with Ruby On Rails, MySQL and PostgreSQL. It has many features such as user accounts, various forms, a backoffice to manage the databases and various graphs to visualize the fictive company's data.`,
    tags: ['Ruby On Rails', 'Javascript', 'HTML', 'CSS', 'MySQL', 'PostgreSQL'],
    image: rocketElevators,
    github: 'https://github.com/WilliamSinclairF/Rocket-Elevator-Foundation',
  },
  {
    id: 2,
    name: 'Super POS - Frontend',
    shortDescription: 'A point of sale made in React (WIP)',
    description:
      'Super POS is a cloud based point of sale built with React, NodeJS, TypeScript and Firebase. Businesses can use it to track their sales, inventory and manage different stores under the same account. It is currently still a work in progress but accounts and sales are functional.',
    tags: ['React', 'TypeScript'],
    image: superPosFrontEnd,
    github: 'https://github.com/WilliamSinclairF/super-pos',
  },

  {
    id: 3,
    name: 'Super POS - Backend',
    shortDescription: 'The NodeJS backend of the point of sale project (WIP)',

    description:
      'This is the backend for the Super point of sale project. It uses a Postgres database as well as firebase for user authentication. TypeORM was used to speed up development.',
    tags: ['NodeJS', 'TypeScript', 'PostgreSQL'],
    image: '/images/nodejs-original-wordmark.svg',
    github: 'https://github.com/WilliamSinclairF/super-pos-backend',
  },

  {
    id: 4,
    name: 'This website!',
    shortDescription: 'NextJS for speed and SEO, featuring styled-components and dynamic routes',
    description: '',
    paragraphs: [
      `NextJS was used to help with SEO and minimize the amount of extra stuff that the client needs to run to make things as snappy as possible. With that said, I also just felt like giving it a try since I had heard a lot about it and I'm glad I did as I had a fun time understanding it's tooling and the things it does differently compared to vanila React.`,
      ,
      `I opted to use Styled Components instead of a css library like Bootstrap and others or plain CSS because I love the developer experience that it provides. It just feels more natural to me to use components instead of classes. The project initially started with regular CSS but after a bit, I decided to scrap everything and made the switch and I haven't looked back since!`,
      ,
      `Vercel was used for hosting mainly due to it's current $0 price tag but the painless deployment experience is certainly a great plus.`,
    ],
    tags: ['React', 'NextJS', 'styled-components'],
    image: '/images/nextjs-original-wordmark.svg',
    github: 'https://github.com/WilliamSinclairF/portfolio-website',
  },
];

export const frontEndSkills = [
  'Typescript',
  'Javascript',
  'React',
  'Angular',
  'AngularJS',
  'HTML',
  'CSS',
  'Rails',
  'JQuery',
];
export const backEndSkills = ['NodeJS (JS/TS)', 'Express', 'GraphQL', 'Ruby', 'Python', 'Rails', 'C#', 'REST'];
export const databaseSkills = ['MySQL', 'PostgreSQL'];
export const miscSkills = ['Git', 'Jira', 'Cloud', '...And always ready to learn more!'];
