import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neo-white border-2 border-neo-black shadow-neo flex items-center justify-between h-20 px-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border-2 border-neo-black bg-neo-yellow flex items-center justify-center shadow-neo-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <span className="font-display text-xl font-bold text-neo-black">N</span>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-neo-black uppercase">
              Nexus<span className="text-neo-purple">Dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs lg:text-sm font-bold uppercase tracking-wide px-3 lg:px-4 py-2 border-2 border-transparent transition-all hover:bg-neo-green hover:border-neo-black hover:shadow-neo-sm ${
                  location.pathname === link.path 
                    ? 'bg-neo-black text-neo-white border-neo-black shadow-neo-sm rotate-1' 
                    : 'text-neo-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="hidden md:block px-4 lg:px-6 py-2 bg-neo-pink border-2 border-neo-black shadow-neo font-bold text-neo-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-neo-black bg-neo-cyan shadow-neo-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-0 right-0 px-4"
          >
            <div className="bg-neo-white border-2 border-neo-black shadow-neo p-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-center text-lg font-bold uppercase border-2 border-neo-black transition-all ${
                    location.pathname === link.path
                      ? 'bg-neo-black text-neo-white shadow-neo-sm'
                      : 'bg-neo-white text-neo-black hover:bg-neo-yellow hover:shadow-neo-sm'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 text-center text-lg font-bold uppercase border-2 border-neo-black bg-neo-pink text-neo-black shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
