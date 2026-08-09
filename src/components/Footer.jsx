import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
        <div className="md:col-span-6 flex flex-col justify-between mb-8 md:mb-0 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-4 mb-4">
              <img src={logoImg} alt="Power Factory Logo" className="h-16 w-16 md:h-24 md:w-24 object-contain rounded-sm block" />
              <div className="font-headline-md text-2xl md:text-4xl text-tertiary tracking-widest uppercase flex items-center gap-2">
                POWER FACTORY
              </div>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-10 md:mb-16">
              Elite performance training facility for athletes who demand more.
            </p>
          </div>
          <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-auto order-last md:order-none pt-10 md:pt-0 border-t border-outline-variant md:border-none w-full md:w-auto">
            © 2024 POWER FACTORY. ALL RIGHTS RESERVED.
          </div>
        </div>
        
        <div className="md:col-span-6 flex flex-col md:flex-row justify-center md:justify-end gap-10 md:gap-24 items-center md:items-start font-label-caps text-label-caps text-on-surface-variant">
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
            <Link to="#" className="hover:text-primary-fixed transition-colors uppercase opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary-fixed transition-colors uppercase opacity-80 hover:opacity-100">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
            <Link to="#" className="hover:text-primary-fixed transition-colors uppercase opacity-80 hover:opacity-100">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
            <Link to="#" className="hover:text-primary-fixed transition-colors uppercase opacity-80 hover:opacity-100">Instagram</Link>
            <Link to="#" className="hover:text-primary-fixed transition-colors uppercase opacity-80 hover:opacity-100">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
