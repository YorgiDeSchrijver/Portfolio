import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Textfit } from 'react-textfit';

const projects = [
  {
    title: 'De stuivers website',
    description:
      'Modern website for student association built in 2 weeks with headless CMS integration and AWS hosting, achieving 70% cost reduction',
    technologies: ['AWS', 'React', 'Sanity'],
    image: '/assets/images/project1.jpg',
    website: 'https://destuivers.be',
    github: null,
    featured: true,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className='w-full h-full flex flex-col gap-y-16 mb-16'>
      <section className='gap-y-24 flex-col flex items-center justify-center relative h-screen w-full'>
        <div className='gap-y-16 flex-col flex z-10 w-full'>
          <div className='flex w-full items-start'>
            <Textfit
              mode='single'
              max={4000}
              className='w-2/3 text-light font-mono font-semibold leading-[0.7]'
            >
              Projects
            </Textfit>
          </div>
          <div className='flex w-full items-center gap-16'>
            <p className='w-1/3 text-gray-light text-2xl font-sans font-normal'>
              A collection of <span className='text-light'>projects</span> I've
              worked on, showcasing my skills in{' '}
              <span className='text-light'>full-stack development</span> and{' '}
              <span className='text-light'>cloud technologies</span>.
            </p>
            <Textfit
              mode='single'
              max={4000}
              className='w-2/3 pl-40 text-light font-mono font-semibold leading-[0.7]'
            >
              I Worked On
            </Textfit>
          </div>
        </div>
        <div className='absolute top-1/12 right-1/12 bg-radial rounded-full from-purple-900 from-0% to-dark to-70% size-120 z-0 opacity-75' />
        <div className='absolute bottom-1/12 left-1/12 bg-radial rounded-full from-cyan-900 from-0% to-dark to-70% size-120 z-0 opacity-75' />
      </section>

      <section className='gap-y-32 flex-col flex items-center justify-center relative w-full'>
        <div className='w-full gap-y-16 flex flex-col z-10'>
          <p className='text-light font-sans font-semibold text-xl'>
            ... /Featured Projects ...
          </p>

          <div className='grid grid-cols-2 gap-8'>
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className='bg-dark rounded-[2.5rem] border border-gray-dark overflow-hidden group hover:border-light transition-all duration-300'
              >
                <div className='h-64 overflow-hidden bg-gray-dark'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <div className='p-8'>
                  <h3 className='text-light text-3xl mb-4 font-medium'>
                    {project.title}
                  </h3>
                  <p className='text-gray-light text-lg mb-6 font-sans'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-gray-dark text-light px-3 py-1 rounded-full text-sm font-mono'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex gap-4'>
                    {project.github && (
                      <a
                        href={project.github}
                        className='flex items-center gap-2 text-light hover:text-gray-light transition-colors'
                      >
                        <Github size={20} />
                        <span className='font-mono'>Code</span>
                      </a>
                    )}
                    <a
                      href={project.website}
                      className='flex items-center gap-2 text-light hover:text-gray-light transition-colors'
                    >
                      <ExternalLink size={20} />
                      <span className='font-mono'>Website</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className='gap-y-16 flex-col flex items-center justify-center relative w-full mb-16'>
          <h1 className='text-[10rem] font-medium font-mono text-light text-right mr-48 p-0 m-0'>
            More
          </h1>

          <div className='flex flex-col w-full gap-4'>
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className='bg-dark p-8 rounded-[2.5rem] border border-gray-dark hover:bg-light group transition-colors duration-300'
              >
                <div className='grid grid-cols-6 gap-6 items-center'>
                  <div className='col-span-2'>
                    <h3 className='text-light text-2xl mb-2 font-medium group-hover:text-dark'>
                      {project.title}
                    </h3>
                    <p className='text-gray-light text-sm font-sans group-hover:text-dark'>
                      {project.description}
                    </p>
                  </div>
                  <div className='col-span-3 flex flex-wrap gap-2'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-gray-dark text-light px-3 py-1 rounded-full text-sm font-mono group-hover:bg-dark group-hover:text-light'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='col-span-1 flex gap-4 justify-end'>
                    {project.github && (
                      <a
                        href={project.github}
                        className='text-light group-hover:text-dark transition-colors'
                      >
                        <Github size={24} />
                      </a>
                    )}
                    <a
                      href={project.website}
                      className='text-light group-hover:text-dark transition-colors'
                    >
                      <ArrowUpRight size={24} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
