import { CheckCircle2, Code, Database, Globe, Layers, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'We build robust, scalable, and secure web applications tailored to your business needs using the latest technologies.',
      features: ['React & Next.js', 'Progressive Web Apps (PWA)', 'Single Page Applications (SPA)', 'E-commerce Solutions'],
      color: 'bg-neo-yellow'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create seamless mobile experiences for iOS and Android with our cross-platform development expertise.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      color: 'bg-neo-pink'
    },
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'Our design team crafts intuitive and visually stunning interfaces that enhance user engagement and satisfaction.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      color: 'bg-neo-cyan'
    },
    {
      icon: Database,
      title: 'Backend & API Development',
      description: 'Power your applications with secure, high-performance backend systems and RESTful/GraphQL APIs.',
      features: ['Node.js & Python', 'Database Design (SQL/NoSQL)', 'Microservices Architecture', 'API Integration'],
      color: 'bg-neo-purple'
    },
    {
      icon: Code,
      title: 'DevOps & Cloud',
      description: 'Streamline your development process and ensure high availability with our DevOps and cloud infrastructure services.',
      features: ['CI/CD Pipelines', 'AWS/GCP/Azure', 'Docker & Kubernetes', 'Serverless Architecture'],
      color: 'bg-neo-green'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Ensure your software is bug-free and performs optimally with our comprehensive testing strategies.',
      features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Audits'],
      color: 'bg-neo-white'
    },
  ];

  return (
    <div className="py-20 pt-32 bg-neo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-neo-black text-neo-white px-4 py-1 font-bold uppercase tracking-widest mb-6 transform rotate-1">
            What We Do
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-neo-black mb-6 uppercase">
            Our <span className="text-neo-white bg-neo-black px-2">Services</span>
          </h1>
          <p className="text-xl text-neo-black font-body font-medium max-w-3xl mx-auto border-2 border-neo-black p-6 bg-neo-pink shadow-neo">
            Comprehensive digital solutions designed to propel your business forward. No nonsense, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neo-card group hover:bg-neo-black hover:text-neo-white transition-colors duration-300"
            >
              <div className={`w-14 h-14 ${service.color} border-2 border-neo-black flex items-center justify-center mb-6 text-neo-black shadow-neo-sm group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase group-hover:text-neo-yellow">{service.title}</h3>
              <p className="font-body mb-6 leading-relaxed opacity-90">
                {service.description}
              </p>
              <ul className="space-y-3 border-t-2 border-neo-black pt-4 group-hover:border-neo-white/20">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm font-bold font-mono">
                    <div className={`w-2 h-2 ${service.color} border border-neo-black mr-3 group-hover:border-neo-white`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
