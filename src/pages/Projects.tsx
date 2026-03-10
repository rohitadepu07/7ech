import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      image: 'https://picsum.photos/seed/fintech/800/600',
      description: 'A comprehensive financial analytics dashboard for a leading investment firm, featuring real-time data visualization and portfolio management tools.',
      tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
      link: '#',
      github: '#',
      color: 'bg-neo-yellow'
    },
    {
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      image: 'https://picsum.photos/seed/ecommerce/800/600',
      description: 'A scalable e-commerce solution with advanced inventory management, AI-powered recommendations, and seamless payment integration.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      link: '#',
      github: '#',
      color: 'bg-neo-pink'
    },
    {
      title: 'HealthCare App',
      category: 'Mobile App',
      image: 'https://picsum.photos/seed/health/800/600',
      description: 'A patient-centric mobile application for appointment scheduling, telemedicine consultations, and medical record access.',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      link: '#',
      github: '#',
      color: 'bg-neo-cyan'
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Platform',
      image: 'https://picsum.photos/seed/realestate/800/600',
      description: 'A modern real estate listing platform with interactive maps, virtual tours, and automated lead generation for agents.',
      tags: ['Vue.js', 'Mapbox', 'Django', 'AWS'],
      link: '#',
      github: '#',
      color: 'bg-neo-purple'
    },
    {
      title: 'SaaS CRM',
      category: 'SaaS Product',
      image: 'https://picsum.photos/seed/crm/800/600',
      description: 'A custom CRM solution designed for small businesses to manage customer relationships, sales pipelines, and marketing campaigns.',
      tags: ['Angular', 'NestJS', 'MongoDB', 'Docker'],
      link: '#',
      github: '#',
      color: 'bg-neo-green'
    },
    {
      title: 'Travel Booking System',
      category: 'Web Application',
      image: 'https://picsum.photos/seed/travel/800/600',
      description: 'An all-in-one travel booking engine supporting flights, hotels, and car rentals with dynamic pricing and itinerary management.',
      tags: ['React', 'GraphQL', 'Elixir', 'Phoenix'],
      link: '#',
      github: '#',
      color: 'bg-neo-white'
    },
  ];

  return (
    <div className="py-20 pt-32 bg-neo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-neo-black text-neo-white px-4 py-1 font-bold uppercase tracking-widest mb-6 transform -rotate-1">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-neo-black mb-6 uppercase">
            Selected <span className="bg-neo-cyan px-2 border-2 border-neo-black shadow-neo-sm">Works</span>
          </h1>
          <p className="text-xl text-neo-black font-body font-medium max-w-3xl mx-auto">
            A showcase of our technical prowess and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border-2 border-neo-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 hover:translate-x-1 transition-all"
            >
              <div className="relative h-64 overflow-hidden border-b-2 border-neo-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 ${project.color} border-2 border-neo-black text-neo-black text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-neo-sm`}>
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-neo-black mb-3 uppercase group-hover:text-neo-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-neo-black font-body text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-neo-black text-neo-white text-xs font-mono uppercase tracking-wide border border-transparent hover:bg-neo-white hover:text-neo-black hover:border-neo-black transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t-2 border-neo-black">
                  <a href={project.link} className="flex items-center text-sm font-bold text-neo-black hover:bg-neo-yellow px-2 py-1 transition-colors uppercase tracking-wider border-2 border-transparent hover:border-neo-black">
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a href={project.github} className="text-neo-black hover:text-neo-pink transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
