import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";

/* ── Radial shine gradient — follows cursor ── */
function makeShine(x: number, y: number): string {
  return `radial-gradient(ellipse 100% 100% at ${x.toFixed(1)}% ${y.toFixed(1)}%, rgba(255,255,255,.88) 0%, rgba(255,255,255,.62) 24%, rgba(255,255,255,.34) 50%, rgba(255,255,255,.16) 100%)`;
}

/* ── Vertical mask — dims bottom for the half-cut ── */
const VMASK = "linear-gradient(to bottom, black 0%, black 38%, rgba(0,0,0,.55) 76%, rgba(0,0,0,.30) 100%)";

export default function Footer() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  /* ── Cursor-tracking state ── */
  const hovering = useRef(false);
  const curX = useRef(50);
  const curY = useRef(30);
  const tgtX = useRef(50);
  const tgtY = useRef(30);
  const raf = useRef(0);

  const paint = useCallback(() => {
    curX.current += (tgtX.current - curX.current) * 0.1;
    curY.current += (tgtY.current - curY.current) * 0.1;
    const grad = makeShine(curX.current, curY.current);
    if (textRef.current) {
      textRef.current.style.backgroundImage = grad;
    }
    const dx = Math.abs(tgtX.current - curX.current);
    const dy = Math.abs(tgtY.current - curY.current);
    if (hovering.current || dx > 0.05 || dy > 0.05) {
      raf.current = requestAnimationFrame(paint);
    }
  }, []);

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    tgtX.current = ((e.clientX - r.left) / r.width) * 100;
    tgtY.current = ((e.clientY - r.top) / r.height) * 100;
    if (!hovering.current) {
      hovering.current = true;
      raf.current = requestAnimationFrame(paint);
    }
  }, [paint]);

  const onLeave = useCallback(() => {
    hovering.current = false;
    tgtX.current = 50;
    tgtY.current = 30;
    raf.current = requestAnimationFrame(paint);
  }, [paint]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer 
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="bg-neo-black border-t-4 border-neo-black pt-20 pb-10 text-neo-white relative overflow-hidden"
    >
      {/* ── Background Wordmark ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 0.4, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none z-0"
        style={{ height: '300px' }}
      >
        <span
          ref={textRef}
          className="font-display font-bold text-neo-white select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(64px, 20vw, 320px)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            backgroundImage: makeShine(50, 30),
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            maskImage: VMASK,
            WebkitMaskImage: VMASK,
          }}
        >
          NEXUS DEV
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 border-2 border-neo-white bg-neo-yellow flex items-center justify-center shadow-[4px_4px_0px_0px_#ffffff] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <span className="font-display text-xl font-bold text-neo-black">N</span>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-neo-white">
                Nexus<span className="text-neo-pink">Dev</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed font-body max-w-xs">
              We don't do subtle. We build digital experiences that punch through the noise.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-neo-yellow mb-6 text-xl uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm font-body">
              <li><Link to="/services" className="hover:text-neo-green hover:underline decoration-2 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-neo-green hover:underline decoration-2 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-neo-green hover:underline decoration-2 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-neo-green hover:underline decoration-2 transition-colors">Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-neo-pink mb-6 text-xl uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm font-body">
              <li><Link to="/about" className="hover:text-neo-cyan hover:underline decoration-2 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-neo-cyan hover:underline decoration-2 transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-neo-cyan hover:underline decoration-2 transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-neo-cyan mb-6 text-xl uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border-2 border-neo-white flex items-center justify-center hover:bg-neo-white hover:text-neo-black transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#ffffff]">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs tracking-wider uppercase font-mono">
            © {new Date().getFullYear()} NexusDev Consultancy. NO RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0 text-xs text-gray-400 uppercase tracking-wider font-mono">
            <a href="#" className="hover:text-neo-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neo-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
