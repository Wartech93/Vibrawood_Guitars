import { FaInstagram, FaFacebook, FaCcStripe, FaCcMastercard, FaCcVisa, FaCcAmex, FaCcDiscover, FaCcJcb } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-screen secondaryFont'>
      <footer className="bg-indigo-950 text-amber-50 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="mt-2">222.222.2222</p>
            <p className="mt-2">Vibrawood@gmail.com</p>
            <div className="flex justify-center md:justify-start mt-4 space-x-2">
              <FaCcStripe size={24} />
              <FaCcMastercard size={24} />
              <FaCcVisa size={24} />
              <FaCcAmex size={24} />
              <FaCcDiscover size={24} />
              <FaCcJcb size={24} />
            </div>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-lg font-bold">VibraWood Guitars LLC.</h2>
            <div className="rounded-full h-48 w-48 flex items-center justify-center mt-2">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
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
    </div>
  );
};

export default Footer;
