import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Navigation, 
  Map, 
  Satellite,
  ChevronDown,
  Send
} from "lucide-react";

// Navigation component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GTC</span>
            </div>
            <span className="text-xl font-bold text-primary">Geospatial Task Consultancy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg rounded-lg mt-4 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-light hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Content */}
      <div className="container-custom text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Geospatial Solutions for a{" "}
            <span className="text-accent">Connected World</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100">
            Mapping purpose into every space, delivering precision geospatial services across Nigeria and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              Our Services
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-accent transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About GTC
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Geospatial Task Consultancy is Nigeria's premier geospatial solutions provider, 
              delivering cutting-edge GIS, surveying, mapping, and consulting services across various industries.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience and state-of-the-art technology, we help businesses and 
              organizations make informed decisions through precise spatial data analysis and 
              innovative geospatial solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-light p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Expert Team</h4>
                <p className="text-sm text-gray-600">Certified professionals with extensive experience</p>
              </div>
              <div className="bg-light p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Cutting-edge Tech</h4>
                <p className="text-sm text-gray-600">Latest tools for precise results</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="About GTC" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={48} className="text-primary" />,
      title: "GIS Analysis",
      description: "Advanced geographic information system analysis for spatial data interpretation and informed decision making.",
      features: ["Spatial Analysis", "Data Visualization", "Geodatabase Management"]
    },
    {
      icon: <Navigation size={48} className="text-primary" />,
      title: "Surveying",
      description: "Precision surveying services using the latest technology for accurate land measurement and mapping.",
      features: ["Land Surveying", "Topographic Mapping", "Construction Staking"]
    },
    {
      icon: <Map size={48} className="text-primary" />,
      title: "Mapping",
      description: "Detailed mapping solutions including topographic, cadastral, and thematic mapping for various applications.",
      features: ["Thematic Mapping", "Cadastral Mapping", "3D Terrain Modeling"]
    },
    {
      icon: <Satellite size={48} className="text-primary" />,
      title: "Remote Sensing",
      description: "Satellite and aerial imagery analysis for environmental monitoring and resource management.",
      features: ["Image Processing", "Change Detection", "Resource Monitoring"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive geospatial solutions tailored to meet your specific needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our successful geospatial projects and solutions delivered to clients across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/600x400/?map,geospatial,${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600">
                    Geospatial mapping and analysis solution for urban planning and development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-light text-primary text-sm px-3 py-1 rounded-full">
                      GIS
                    </span>
                    <span className="bg-light text-primary text-sm px-3 py-1 rounded-full">
                      Mapping
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100">
              Ready to discuss your geospatial needs? Contact us for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">08102661193</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">geotaskconsultancy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-100">Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/50 rounded-lg">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <p className="text-blue-100">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-blue-100">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GTC</span>
              </div>
              <span className="font-bold text-lg">Geospatial Task Consultancy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Nigeria's leading geospatial solutions provider, delivering precision and innovation in mapping and spatial analysis.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>GIS Analysis</li>
              <li>Surveying Services</li>
              <li>Mapping Solutions</li>
              <li>Remote Sensing</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>08102661193</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>geotaskconsultancy@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Geospatial Task Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;