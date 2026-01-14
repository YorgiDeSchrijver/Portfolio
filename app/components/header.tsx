import { Link } from 'react-router';

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contacts', label: 'Contacts' },
];

export default function Header() {
  return (
    <header className='w-full py-2 transition-all duration-1000 fixed top-0 z-9999 px-4 md:px-8 xl:px-12 2xl:px-28'>
      <div className='flex w-full justify-between items-center max-w-360 mx-auto '>
        <Link to='/' className='flex flex-col text-xl w-1/3'>
          <span>Yorgi</span>
          <span>De Schrijver</span>
        </Link>
        <nav className='flex space-x-16 items-center justify-center text-light font-medium w-1/3'>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='flex flex-col items-end text-lg w-1/3'>
          <button className='hover:underline underline cursor-pointer'>
            EN
          </button>
          <button className='hover:underline text-gray-light active:underline cursor-pointer'>
            NL
          </button>
        </div>
      </div>
    </header>
  );
}
