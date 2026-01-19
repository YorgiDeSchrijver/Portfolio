import Button from '~/components/Button';
import type { Route } from './+types/_index';

import { Textfit } from 'react-textfit';
import ButtonSocial from '~/components/ButtonSocial';
import { ArrowUpRight, Github, Linkedin, Section } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Yorgi De Schrijver - Full-Stack Developer | Portfolio' },
    {
      name: 'description',
      content:
        'Full-stack developer specializing in React, TypeScript, AWS, and cloud technologies. View my projects and experience in web development.',
    },
    {
      name: 'keywords',
      content:
        'Full-stack developer, React, TypeScript, AWS, Node.js, Web Development, Cloud Technologies, Portfolio',
    },
    {
      property: 'og:title',
      content: 'Yorgi De Schrijver - Full-Stack Developer',
    },
    {
      property: 'og:description',
      content:
        'Full-stack developer specializing in React, TypeScript, AWS, and cloud technologies.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yorgideschrijver.be' },
  ];
}

const workExperiences = [
  {
    period: '2025',
    duration: '4 months',
    company: 'Cloudar',
    role: 'Internship development',
  },
  {
    period: '2024 - Present',
    duration: '3 months',
    company: 'Wolf Food Market',
    role: 'Bartender',
  },
  {
    period: '2023 - 2024',
    duration: '11 months',
    company: 'AZ Klina',
    role: 'Secretary Radiology',
  },
  {
    period: '2022 - 2023',
    duration: '1 year',
    company: 'Plein Publiek',
    role: 'Bartender',
  },
];

export default function Index() {
  return (
    <div className='w-full h-full flex flex-col gap-y-16'>
      <section className='mt-16 gap-y-24 flex-col flex items-center justify-center relative h-screen w-full'>
        <div className='w-full gap-y-16 flex flex-col z-10'>
          <div className='flex w-full gap-16 max-w-full'>
            <Textfit
              mode='single'
              max={4000}
              className='text-light font-mono font-semibold leading-[0.65] w-full h-full'
            >
              Full-stack
            </Textfit>
            <div className='flex flex-end'>
              <Button href='/projects'>Projects</Button>
            </div>
          </div>
          <div className='flex w-full gap-16 max-w-full items-center'>
            <p className='max-w-1/3 w-full text-gray-light text-2xl font-sans font-normal'>
              My goal is to{' '}
              <span className='text-light'>write maintainable, clean </span>and{' '}
              <span className='text-light'>understandable code </span>to process
              development was enjoyable.
            </p>
            <Textfit
              mode='single'
              max={3500}
              className='text-light font-mono font-semibold leading-[0.65] h-full w-full'
            >
              Developer
            </Textfit>
          </div>
        </div>
        <div className='flex flex-row gap-8 items-center justify-center z-10'>
          <ButtonSocial
            href='https://github.com/YorgiDeSchrijver'
            icon={<Github />}
            text='Github'
          />
          <ButtonSocial
            href='https://www.linkedin.com/in/yorgi-de-schrijver/'
            icon={<Linkedin />}
            text='Linkedin'
          />
        </div>
        <div className='absolute top-1/12 right-1/12 bg-radial rounded-full from-red-900 from-0% to-dark to-70% size-120 z-0 opacity-75' />
        <div className='absolute bottom-1/12 left-1/12 bg-radial rounded-full from-yellow-900 from-0% to-dark to-70% size-120 z-0 opacity-75' />
      </section>
      <section className='gap-y-32 flex-col flex items-center justify-center relative w-full'>
        <div className='w-full gap-y-16 flex flex-col z-10'>
          <div className='grid grid-cols-2 mb-32'>
            <p className='text-light font-sans font-semibold text-xl '>
              ... /About me ...
            </p>
            <p className='w-2/3 text-gray-light text-2xl font-sans font-normal z-10 -ml-20'>
              Hello! I&apos;m <span className='text-light'>Yorgi</span>, a{' '}
              <span className='text-light'>student</span> from Antwerp. I&apos;m
              currently pursuing a degree in{' '}
              <span className='text-light'>Informatics</span> at{' '}
              <span className='text-light'>AP Hogeschool Antwerp</span>.
            </p>
          </div>
          <div className='grid grid-cols-2 grid-rows-4 gap-16 relative'>
            <div className='grid grid-cols-2 grid-rows-4 gap-6 col-span-1 row-span-4'>
              <div className='col-span-2 row-span-1 bg-light p-8 rounded-[2.5rem] border border-light'>
                <h1 className='text-gray-dark text-3xl mb-5 font-medium'>
                  Front-end
                </h1>
                <p className='text-dark text-xl font-mono leading-10 mb-0'>
                  TypeScript / React / Next.js / Remix / React Native / Jest /
                  GraphQL
                </p>
              </div>
              <div className='row-start-2 row-span-1 bg-dark p-8 rounded-[2.5rem] border border-gray-dark'>
                <h1 className='text-gray-light text-3xl mb-5 font-medium'>
                  Styles
                </h1>
                <p className='text-light text-xl font-mono leading-10 mb-0 line-clamp-2'>
                  Tailwind CSS / SCSS / Material UI / PostCSS
                </p>
              </div>
              <div className='row-start-2 row-span-1 flex justify-center items-center'>
                <a
                  href='https://github.com/YorgiDeSchrijver'
                  className='flex flex-row justify-center items-center'
                >
                  <div className='p-6 border border-gray-light rounded-full'>
                    <Github className='fill-light stroke-light' size={24} />
                  </div>
                  <div className='bg-light rounded-full p-5 border border-light -translate-x-1/3'>
                    <ArrowUpRight
                      className=' stroke-dark'
                      strokeWidth={1.5}
                      size={32}
                    />
                  </div>
                </a>
              </div>
              <div className='col-span-2 row-start-3 row-span-1 bg-dark p-8 rounded-[2.5rem] border border-gray-dark z-10'>
                <h1 className='text-gray-light text-3xl mb-5 font-medium'>
                  Back-end
                </h1>
                <p className='text-light text-xl font-mono leading-10 mb-0'>
                  Node.js / Express / Spring Boot / ASP.NET / Prisma / MongoDB /
                  PostgreSQL / MySQL
                </p>
              </div>
              <div className='row-start-4 row-span-1'></div>
              <div className='row-start-4 row-span-1 bg-dark p-8 rounded-[2.5rem] border border-gray-dark z-10'>
                <h1 className='text-gray-light text-3xl mb-5 font-medium'>
                  Cloud & DevOps
                </h1>
                <p className='text-light text-xl font-mono leading-10 mb-0'>
                  AWS / Docker / Git / GitHub Actions
                </p>
              </div>
            </div>
            <div className='col-span-1 row-span-3 flex justify-end items-center p-0 z-30 h-full w-full'>
              <div className='w-3/4 h-full overflow-hidden rounded-[2.5rem]'>
                <img
                  className='object-cover object-center w-full h-full'
                  src='/assets/images/portrait.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='absolute -top-5 right-0 translate-x-1/3 -translate-y-1/3 size-200 flex items-center justify-center rounded-full border-2 opacity-75 border-gray-dark pointer-events-none z-0' />
            <div className='absolute bottom-0 left-0 -translate-x-1/3 translate-y-3/4 bg-radial rounded-full from-red-900 from-0% to-dark to-70% size-200 z-0 opacity-75' />
          </div>
        </div>
      </section>
      <section className='gap-y-16 flex-col flex items-center justify-center relative w-full mb-16'>
        <div className='w-full gap-y-16 flex flex-col z-10'>
          <h1 className='text-[10rem] font-medium font-mono text-light text-right mr-48 p-0 m-0'>
            Work
          </h1>
          <div className='flex flex-col justify-center items-center border-b border-gray-dark mb-32'>
            {workExperiences.map((work, index) => (
              <div
                key={index}
                className='grid grid-cols-6 gap-4 border-t border-gray-dark w-full px-4 py-4 z-10'
              >
                <div className='pr-4 border-gray-dark col-span-1'>
                  <p className='text-xl text-light'>{work.period}</p>
                  <p className='text-sm text-gray-light'>{work.duration}</p>
                </div>
                <p className='text-2xl text-light leading-[200%] col-span-2'>
                  {work.company}
                </p>
                <p className='text-2xl text-light leading-[200%] col-span-3'>
                  {work.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
