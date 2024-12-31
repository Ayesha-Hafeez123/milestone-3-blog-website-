
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-pink-700 to-teal-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/" className='hover:text-yellow-300'>
        Ice-cream Blog
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Home
          </Link>
         
          <Link href="/Categories" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            categories
          </Link>
          <Link href="/Contact" className="hover:text-yellow-300 transition duration-300 ease-in-out">
            Contact
          </Link> 
      
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
