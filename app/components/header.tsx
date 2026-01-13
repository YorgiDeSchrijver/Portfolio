import { Link } from "react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contacts" },
];

export default function Header() {
  return (
    <header className='grid grid-cols-3 items-center py-4 px-4 md:px-8  xl:px-12 2xl:px-28 text-white font-mono w-full transition-all duration-1000 bg-dark fixed top-0 z-50'>
      <Link to='/' className='flex flex-col text-xl'>
        <span>Yorgi</span>
        <span>De Schrijver</span>
      </Link>
      <nav className='flex space-x-16 items-center justify-center text-light font-medium'>
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className='flex flex-col items-end text-lg'>
        <button className='hover:underline underline cursor-pointer'>EN</button>
        <button className='hover:underline text-gray-light active:underline cursor-pointer'>
          NL
        </button>
      </div>
    </header>
  );
}
