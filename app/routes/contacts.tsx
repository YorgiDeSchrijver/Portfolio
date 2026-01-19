import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Textfit } from 'react-textfit';

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'privateyorgi@gmail.com',
    href: 'mailto:privateyorgi@gmail.com',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Antwerp, Belgium',
    href: 'https://maps.google.com/?q=Antwerp,Belgium',
  },
];

export default function Contacts() {
  return (
    <div className='w-full h-full flex flex-col gap-y-16'>
      <section className='mt-16 flex-col flex items-center justify-center relative h-screen w-full'>
        <div className='gap-y-16 flex-col flex z-10'>
          <div className='flex'>
            <Textfit
              mode='single'
              max={2000}
              className='w-full text-light font-mono font-semibold leading-[0.7] text-center'
            >
              Let's Connect
            </Textfit>
          </div>
          <div className='flex justify-center'>
            <p className='w-1/2 text-gray-light text-2xl font-sans font-normal text-center'>
              I'm always interested in new opportunities and collaborations.
              <span className='text-light'>
                {' '}
                Let's build something amazing together!
              </span>
            </p>
          </div>
        </div>

        <div className='absolute top-1/12 right-0/12 bg-radial rounded-full from-purple-900 from-0% to-dark to-70% size-120 z-0 opacity-75' />
        <div className='absolute bottom-1/12 left-0/12 bg-radial rounded-full from-blue-900 from-0% to-dark to-70% size-120 z-0 opacity-75' />
      </section>
      <section className='flex-col flex items-center justify-center relative w-full'>
        <div className='w-full mb-16'>
          <p className='text-light font-sans font-semibold text-xl'>
            ... /Get In Touch ...
          </p>
        </div>

        <div className='flex flex-col w-full gap-8'>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className='bg-dark p-8 rounded-[2.5rem] border border-gray-dark hover:bg-light group transition-colors duration-300 flex items-center justify-between'
            >
              <div className='flex items-center gap-6'>
                <div className='text-light group-hover:text-dark'>
                  {method.icon}
                </div>
                <div>
                  <h3 className='text-light text-2xl mb-2 font-medium group-hover:text-dark'>
                    {method.label}
                  </h3>
                  <p className='text-gray-light text-lg font-mono group-hover:text-dark'>
                    {method.value}
                  </p>
                </div>
              </div>
              <div className='text-light group-hover:text-dark'>
                <ArrowUpRight size={24} strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>
      </section>
      <section>
        <h1 className='text-[10rem] font-medium font-mono text-light text-center p-0 m-0 mb-16'>
          Message
        </h1>
        <hr className='border border-gray-dark/60 -mx-48 mb-16' />

        <div className='bg-dark p-12 rounded-[2.5rem] border border-gray-dark'>
          <form className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <div>
                <label className='block text-light text-lg font-medium mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  className='w-full p-4 rounded-2xl border border-gray-dark bg-dark text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-dark'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='block text-light text-lg font-medium mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full p-4 rounded-2xl border border-gray-dark bg-dark text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-dark'
                  placeholder='your.email@example.com'
                />
              </div>
            </div>

            <div>
              <label className='block text-light text-lg font-medium mb-2'>
                Subject
              </label>
              <input
                type='text'
                className='w-full p-4 rounded-2xl border border-gray-dark bg-dark text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-dark'
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className='block text-light text-lg font-medium mb-2'>
                Message
              </label>
              <textarea
                rows={6}
                className='w-full p-4 rounded-2xl border border-gray-dark bg-dark text-light font-sans focus:outline-none focus:ring-2 focus:ring-gray-dark resize-none'
                placeholder='Tell me about your project...'
              />
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-light text-dark px-12 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center gap-3 cursor-pointer'
              >
                Send Message
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
