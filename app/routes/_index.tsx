import Button from '~/components/Button';
import type { Route } from './+types/_index';

import { Textfit } from 'react-textfit';
import ButtonSocial from '~/components/ButtonSocial';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

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
    </>
  );
}
