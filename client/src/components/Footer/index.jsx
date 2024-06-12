
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">VibraWood Guitars LLC.</h2>
          <p className="mt-2">222-222-2222</p>
          <p className="mt-2">Vibrawood@gmail.com</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-lg font-bold text-center">Quick Links</h2>
          <ul className="text-center mt-2 space-y-2">
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
        </div>
        <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56v14.88C24 20.4 23.4 21 22.56 21H1.44C.6 21 0 20.4 0 19.44V4.56C0 3.6.6 3 1.44 3h21.12C23.4 3 24 3.6 24 4.56zM9.75 16.44V7.56L16.5 12l-6.75 4.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.46 0-9.96 4.5-9.96 9.96 0 4.4 2.87 8.12 6.84 9.44.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.27-3.37-1.27-.46-1.18-1.11-1.49-1.11-1.49-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.37 1.09 2.95.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.67-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.63.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.69-4.57 4.93.36.31.67.92.67 1.85v2.75c0 .27.18.57.69.48 3.97-1.32 6.84-5.04 6.84-9.44 0-5.46-4.5-9.96-9.96-9.96z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
