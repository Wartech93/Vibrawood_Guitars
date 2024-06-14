import { FaInstagram, FaFacebook, FaCcStripe, FaCcMastercard, FaCcVisa, FaCcAmex, FaCcDiscover, FaCcJcb } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-indigo-950 text-amber-50 py-8">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Contact Us</h2>
          <p className="mt-2 text-base md:text-lg lg:text-xl">222.222.2222</p>
          <p className="mt-2 text-base md:text-lg lg:text-xl">Vibrawood@gmail.com</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-2">
            <FaCcStripe size={24} />
            <FaCcMastercard size={24} />
            <FaCcVisa size={24} />
            <FaCcAmex size={24} />
            <FaCcDiscover size={24} />
            <FaCcJcb size={24} />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">VibraWood Guitars LLC.</h2>
          <div className="rounded-full h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 flex items-center justify-center mt-2">
            <img src="/images/logo.png" alt="logo" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-base md:text-lg lg:text-xl">
            <li>
              <a href="#" className="hover:text-gray-400">Shop Guitars</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Repairs</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Product Support</a>
            </li>
          </ul>
          <div className="flex justify-center md:justify-end mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
