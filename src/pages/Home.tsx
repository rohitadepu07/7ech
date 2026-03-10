import { ArrowRight, Code, Layout, Server, Zap, Star, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import StackFeatureSection from '@/components/ui/stack-feature-section';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Hero } from '@/components/ui/animated-hero';

export default function Home() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="relative bg-neo-white min-h-[calc(100vh-96px)] flex flex-col justify-between">
        <div className="flex-grow flex items-center">
          <Hero />
        </div>
        
        {/* Marquee */}
        <div className="bg-neo-yellow border-y-4 border-neo-black py-3 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-lg md:text-2xl font-display font-bold text-neo-black mx-4 md:mx-8 uppercase">
                Design • Development • Strategy • Brutalism • Impact •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-neo-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-neo-black mb-4">
                OUR <span className="bg-neo-pink px-2">TOOLKIT</span>
              </h2>
              <p className="text-xl font-body text-neo-black/80 max-w-xl">
                We don't just build websites. We build digital weapons for your business arsenal.
              </p>
            </div>
            <Link to="/services" className="font-display font-bold text-xl underline decoration-4 decoration-neo-green hover:bg-neo-green hover:no-underline px-2 transition-colors flex items-center gap-2">
              View All Services <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Layout, 
                title: 'UI/UX Design', 
                desc: 'Bold interfaces that scream identity. We break grid rules to make new ones.',
                color: 'bg-neo-cyan'
              },
              { 
                icon: Code, 
                title: 'Development', 
                desc: 'Clean code, dirty aesthetics. Performance-obsessed engineering.',
                color: 'bg-neo-yellow'
              },
              { 
                icon: Zap, 
                title: 'Strategy', 
                desc: 'No-nonsense digital strategy. We tell you what you need, not what you want.',
                color: 'bg-neo-purple'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`neo-card group hover:bg-neo-black hover:text-neo-white transition-colors duration-300`}
              >
                <div className={`w-16 h-16 border-2 border-neo-black ${service.color} flex items-center justify-center mb-6 shadow-neo-sm group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all`}>
                  <service.icon className="w-8 h-8 text-neo-black" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-neo-yellow">{service.title}</h3>
                <p className="font-body text-lg leading-relaxed opacity-90">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Feature Section */}
      <section className="bg-neo-white border-b-4 border-neo-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StackFeatureSection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-neo-black text-neo-white border-y-4 border-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects', value: '150+', icon: Star, color: 'text-neo-yellow' },
              { label: 'Satisfaction', value: '100%', icon: MousePointer, color: 'text-neo-green' },
              { label: 'Years', value: '10+', icon: Server, color: 'text-neo-cyan' },
              { label: 'Experts', value: '25', icon: Zap, color: 'text-neo-pink' },
            ].map((stat, index) => (
              <div key={index} className="border-2 border-neo-white p-6 relative hover:bg-white/10 transition-colors">
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                <div className="text-5xl md:text-6xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-mono uppercase tracking-widest text-gray-400">{stat.label}</div>
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-neo-white border-b-4 border-neo-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neo-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-neo-black mb-4">
              CLIENT <span className="bg-neo-cyan px-2">VOICES</span>
            </h2>
            <p className="text-xl font-body text-neo-black/80 max-w-xl border-l-4 border-neo-pink pl-4">
              We don't just win awards. We win markets. Here's what our partners have to say.
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-neo-green border-b-4 border-neo-black text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-neo-black mb-8 uppercase">
            Ready to break the internet?
          </h2>
          <p className="text-lg md:text-xl font-body text-neo-black mb-12 max-w-2xl mx-auto">
            Stop blending in. Start standing out. Let's build something loud together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 md:px-12 md:py-5 bg-neo-black text-neo-white font-display font-bold text-xl md:text-2xl border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] md:shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-1 md:hover:translate-x-2 hover:translate-y-1 md:hover:translate-y-2 transition-all uppercase"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
