import { Outlet } from 'react-router';
import Footer from '~/components/footer';
import Header from '~/components/header';

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contacts', label: 'Contacts' },
];

export default function Layout() {
  return (
    <>
      <Header links={links} />
      <main className='w-full mx-auto px-4 md:px-8 xl:px-12 2xl:px-28 overflow-hidden'>
        <div className='max-w-360 w-full mx-auto'>
          <Outlet />
        </div>
      </main>
      <Footer links={links} />
    </>
  );
}
