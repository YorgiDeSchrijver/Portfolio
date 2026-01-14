import Button from '~/components/Button';
import type { Route } from './+types/_index';

import { Textfit } from 'react-textfit';
import ButtonSocial from '~/components/ButtonSocial';
import { Github, Linkedin } from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

const workExperiences = [
  {
    period: '2025',
    duration: '1 month',
    company: 'Cloudar',
    role: 'Internship development',
  },
  {
    period: '2024 - Present',
    duration: '3 months',
    company: 'Wolf Food Market',
    role: 'Studentjob',
  },
  {
    period: '2023 - 2024',
    duration: '11 months',
    company: 'AZ Klina',
    role: 'Studentjob',
  },
  {
    period: '2022 - 2023',
    duration: '1 year',
    company: 'Plein Publiek',
    role: 'Studentjob',
  },
];

export default function Index() {
  return (
    <>
      <section className='gap-y-32 flex-col flex items-center justify-center relative h-screen w-full'>
        <div className='w-full gap-y-16 flex flex-col z-10'>
          <div className='flex w-full gap-16 max-w-full overflow-hidden'>
            <Textfit
              mode='single'
              max={4000}
              className='text-light font-mono font-semibold leading-[0.8] w-full'
            >
              Full-stack
            </Textfit>
            <div className='flex flex-end mb-2'>
              <Button href='/projects'>Projects</Button>
            </div>
          </div>
          <div className='flex'>
            <p className='w-1/3 text-gray-light text-2xl font-sans font-normal'>
              My goal is to{' '}
              <span className='text-light'>write maintainable, clean </span>and{' '}
              <span className='text-light'>understandable code </span>to process
              development was enjoyable.
            </p>
            <Textfit
              mode='single'
              max={4000}
              className='w-2/3 pl-40 text-light font-mono font-semibold leading-[0.7]'
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
        <div className='absolute top-1/12 right-2/12 bg-radial rounded-full from-red-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75' />
        <div className='absolute bottom-1/12 left-2/12 bg-radial rounded-full from-yellow-900 from-0% to-dark to-70% size-[30rem] z-0 opacity-75' />
      </section>
    </>
  );
}
