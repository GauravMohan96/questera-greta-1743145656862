import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-warm-gray text-cream py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Brew & Gather</h3>
            <p className="font-poppins text-sm">Creating moments of joy, one cup at a time.</p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Hours</h4>
            <p className="font-poppins text-sm">Mon-Fri: 7am - 8pm</p>
            <p className="font-poppins text-sm">Sat-Sun: 8am - 9pm</p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cafe-brown transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-cafe-brown transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-cafe-brown transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cream/20 text-center">
          <p className="font-poppins text-sm">&copy; {new Date().getFullYear()} Brew & Gather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;