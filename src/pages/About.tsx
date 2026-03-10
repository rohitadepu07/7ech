import { Award, Users, Target, Zap, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedProfileCard, ProfileCardContent, SocialLink } from '@/components/ui/animated-profile-card';

export default function About() {
  const squad = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Founder',
      location: 'New York, USA',
      bio: 'Visionary leader with a passion for disruptive design and high-performance engineering.',
      avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
      avatarFallback: 'AM',
      accentColor: '#fbbf24', // neo-yellow
      socials: [
        { id: 'github', url: '#', label: 'GitHub', icon: <Github className="h-5 w-5" /> },
        { id: 'twitter', url: '#', label: 'Twitter', icon: <Twitter className="h-5 w-5" /> },
      ] as SocialLink[]
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      location: 'San Francisco, USA',
      bio: 'Crafting bold visual identities that challenge the status quo and push creative boundaries.',
      avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
      avatarFallback: 'SC',
      accentColor: '#f472b6', // neo-pink
      socials: [
        { id: 'linkedin', url: '#', label: 'LinkedIn', icon: <Linkedin className="h-5 w-5" /> },
        { id: 'twitter', url: '#', label: 'Twitter', icon: <Twitter className="h-5 w-5" /> },
      ] as SocialLink[]
    },
    {
      name: 'David Kim',
      role: 'CTO',
      location: 'Seoul, South Korea',
      bio: 'Architecting robust, scalable solutions with a focus on cutting-edge technology and clean code.',
      avatarSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop',
      avatarFallback: 'DK',
      accentColor: '#22d3ee', // neo-cyan
      socials: [
        { id: 'github', url: '#', label: 'GitHub', icon: <Github className="h-5 w-5" /> },
        { id: 'linkedin', url: '#', label: 'LinkedIn', icon: <Linkedin className="h-5 w-5" /> },
      ] as SocialLink[]
    },
  ];

  return (
    <div className="py-20 pt-32 bg-neo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-neo-black text-neo-white px-4 py-1 font-bold uppercase tracking-widest mb-6 transform -rotate-2">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-neo-black mb-6 uppercase">
            About <span className="text-neo-purple underline decoration-4 decoration-neo-yellow">NexusDev</span>
          </h1>
          <p className="text-xl text-neo-black font-body font-medium max-w-3xl mx-auto border-2 border-neo-black p-6 bg-neo-cyan shadow-neo">
            We are a team of digital anarchists, code poets, and design rebels. We don't just build websites; we build digital statements.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neo-black translate-x-4 translate-y-4"></div>
            <img
              src="https://picsum.photos/seed/office/800/600"
              alt="Our Office"
              className="relative z-10 border-4 border-neo-black grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-neo-black mb-6 uppercase bg-neo-yellow inline-block px-2">
              Digital Heritage? No. <br/> Digital Future.
            </h2>
            <p className="text-neo-black font-body text-lg mb-6 leading-relaxed border-l-4 border-neo-pink pl-4">
              Founded in 2020, NexusDev started with a middle finger to boring, template-based web design. We saw a sea of sameness and decided to be the storm.
            </p>
            <p className="text-neo-black font-body text-lg mb-6 leading-relaxed">
              We've grown from a garage trio to a global collective of creators who refuse to compromise on bold vision. We help startups disrupt and enterprises wake up.
            </p>
            <p className="text-neo-black font-body text-lg leading-relaxed font-bold">
              Our philosophy: If it doesn't make you feel something, delete it.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-display font-bold text-neo-black text-center mb-12 uppercase">
            Our <span className="bg-neo-green px-2">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Precision', desc: 'Pixel-perfect is the bare minimum. We aim for pixel-aggressive.', color: 'bg-neo-yellow' },
              { icon: Users, title: 'Collaboration', desc: 'No silos. No ego. Just raw, unfiltered collaboration.', color: 'bg-neo-pink' },
              { icon: Zap, title: 'Innovation', desc: 'We break things to see how they work. Then we build them better.', color: 'bg-neo-cyan' },
              { icon: Award, title: 'Excellence', desc: 'Good enough is for the other guys. We want greatness.', color: 'bg-neo-purple' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="neo-card hover:bg-neo-black hover:text-neo-white group transition-colors duration-300"
              >
                <div className={`w-12 h-12 ${value.color} border-2 border-neo-black flex items-center justify-center mx-auto mb-6 text-neo-black shadow-neo-sm group-hover:shadow-none transition-all`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 uppercase">{value.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-90">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-display font-bold text-neo-black text-center mb-12 uppercase">
            The <span className="text-neo-white bg-neo-black px-2">Squad</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {squad.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedProfileCard
                  accentColor={member.accentColor}
                  onAccentForegroundColor="#000000"
                  onAccentMutedForegroundColor="#4b5563"
                  className="border-neo-black border-2 shadow-neo"
                  baseCard={
                    <ProfileCardContent 
                      name={member.name}
                      location={member.location}
                      bio={member.bio}
                      avatarSrc={member.avatarSrc}
                      avatarFallback={member.avatarFallback}
                      socials={member.socials}
                      variant="default" 
                      showAvatar={false} 
                      className="bg-neo-white"
                    />
                  }
                  overlayCard={
                    <ProfileCardContent
                      name={member.name}
                      location={member.location}
                      bio={member.bio}
                      avatarSrc={member.avatarSrc}
                      avatarFallback={member.avatarFallback}
                      socials={member.socials}
                      variant="on-accent"
                      showAvatar={true}
                      cardStyle={{ backgroundColor: member.accentColor }}
                      className="text-neo-black"
                    />
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
