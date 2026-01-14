import { Outlet } from 'react-router';
import Header from '~/components/header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='w-full mx-auto px-4 md:px-8  xl:px-12 2xl:px-28'>
        <div className='max-w-360 w-full mx-auto'>
          <Outlet />
        </div>
      </main>
    </>
  );
}
