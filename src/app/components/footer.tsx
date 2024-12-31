
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-6 sm:py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm sm:text-base">
          &copy; 2024 Ice Cream Blog. Sweetly crafted for ice cream lovers.
        </p>

        <div className="flex space-x-6 sm:space-x-8">
          <Link href="/" className="text-white hover:text-yellow-500">
            <FaTwitter size={24} />
          </Link>
          <Link href="/" className="text-white hover:text-yellow-500">
            <FaInstagram size={24} />
          </Link>
          <Link href="/" className="text-white hover:text-yellow-500">
            <FaFacebookF size={24} />
          </Link>
          <Link href="/" className="text-white hover:text-yellow-500">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




