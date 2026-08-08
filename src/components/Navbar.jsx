import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.jpg';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/services' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
  ];

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setHidden(false);
      return;
    }
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  return (
    <>
    <motion.nav 
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-2xl"
    >
      {/* Premium Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCC00]/30 to-transparent" />
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-4">
          <img src={logoImg} alt="Power Factory Logo" className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-sm block" />
          <div className="font-headline-md text-headline-md text-tertiary tracking-widest uppercase flex items-center gap-2">
            <span className="hidden sm:block">POWER FACTORY</span>
            <span className="sm:hidden text-lg">POWER FACTORY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-gutter items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-label-caps text-label-caps uppercase pb-1 transition-colors duration-300 ${
                  isActive ? 'text-primary-fixed' : 'text-on-surface hover:text-primary-fixed'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-fixed"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side: Join Now Button & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/membership" className="hidden md:block font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed px-6 py-3 uppercase font-bold heavy-bottom transition-all scale-95 active:scale-90">
            JOIN NOW
          </Link>
          <button 
            className="md:hidden text-primary-fixed p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              },
              exit: {
                opacity: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#1A1D1E]/96 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div 
                  key={link.name} 
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
                    exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-headline-md text-[2.5rem] uppercase tracking-widest ${
                      isActive ? 'text-primary-fixed' : 'text-on-surface'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div 
              className="mt-8"
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
                exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
              }}
            >
              <Link
                to="/membership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block px-12 py-4 font-label-caps text-label-caps uppercase tracking-widest bg-primary-fixed text-on-primary-fixed font-bold heavy-bottom text-lg"
              >
                JOIN NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

    {/* Independent Scroll Progress Bar */}
    <motion.div
      animate={{ top: hidden ? 0 : 80 }} // 80px = h-20 (Navbar height)
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 right-0 h-[2px] bg-primary-fixed origin-left z-50"
      style={{ scaleX }}
    />
    </>
  );
};

export default Navbar;
