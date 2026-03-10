import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="py-20 pt-32 bg-neo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-neo-black text-neo-white px-4 py-1 font-bold uppercase tracking-widest mb-6 transform rotate-2">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-neo-black mb-6 uppercase">
            Start A <span className="text-neo-pink underline decoration-4 decoration-neo-black">Conversation</span>
          </h1>
          <p className="text-xl text-neo-black font-body font-medium max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold text-neo-black mb-8 uppercase">Contact Information</h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 border-2 border-neo-black bg-neo-yellow flex items-center justify-center flex-shrink-0 text-neo-black shadow-neo-sm group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-neo-black mb-2 uppercase">Our Office</h3>
                  <p className="text-neo-black font-body leading-relaxed">
                    123 Innovation Drive, Tech Valley<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 border-2 border-neo-black bg-neo-pink flex items-center justify-center flex-shrink-0 text-neo-black shadow-neo-sm group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-neo-black mb-2 uppercase">Email Us</h3>
                  <p className="text-neo-black font-body leading-relaxed">
                    hello@nexusdev.com<br />
                    support@nexusdev.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 border-2 border-neo-black bg-neo-cyan flex items-center justify-center flex-shrink-0 text-neo-black shadow-neo-sm group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-neo-black mb-2 uppercase">Call Us</h3>
                  <p className="text-neo-black font-body leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-neo-black text-neo-white border-2 border-neo-black shadow-neo relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neo-green rounded-full blur-3xl opacity-20"></div>
              <h3 className="text-2xl font-display font-bold text-neo-yellow mb-6 uppercase">Why Choose Us?</h3>
              <ul className="space-y-4 font-body">
                <li className="flex items-center"><div className="w-3 h-3 bg-neo-pink border border-neo-white mr-4"></div>Expert Team of Developers</li>
                <li className="flex items-center"><div className="w-3 h-3 bg-neo-cyan border border-neo-white mr-4"></div>Agile Development Process</li>
                <li className="flex items-center"><div className="w-3 h-3 bg-neo-green border border-neo-white mr-4"></div>Transparent Communication</li>
                <li className="flex items-center"><div className="w-3 h-3 bg-neo-purple border border-neo-white mr-4"></div>On-Time Delivery</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-10 border-2 border-neo-black shadow-neo"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wider text-neo-black mb-3">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="neo-input"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wider text-neo-black mb-3">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="neo-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-neo-black mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="neo-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider text-neo-black mb-3">Subject</label>
                <select
                  id="subject"
                  className="neo-input"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Career Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-neo-black mb-3">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="neo-input"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full neo-button flex items-center justify-center gap-3 uppercase tracking-widest text-lg"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
