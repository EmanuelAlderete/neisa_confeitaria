import React, { useState, useEffect } from 'react';
import { Coffee, Clock, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=80",
      alt: "Coffee shop interior"
    },
    {
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2400&q=80",
      alt: "Barista pouring coffee"
    },
    {
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2400&q=80",
      alt: "Coffee beans and cup"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={scrollToTop}
              className="flex items-center group cursor-pointer"
            >
              <Coffee className="h-8 w-8 text-amber-800 transition-transform duration-300 group-hover:scale-110" />
              <span className="ml-2 text-xl font-serif font-bold text-amber-900">Artisan Brew</span>
            </button>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Menu
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Location
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Crafting Perfect Moments,<br />One Cup at a Time
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Experience artisanal coffee in a cozy atmosphere. Our carefully selected beans and expert baristas ensure every cup tells a story.
            </p>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Coffee className="h-12 w-12 text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Beans</h3>
              <p className="text-gray-600">Sourced from the finest coffee regions around the world.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Every batch roasted fresh daily for optimal flavor.</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cozy Space</h3>
              <p className="text-gray-600">A warm, inviting atmosphere perfect for work or relaxation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Preview */}
      <div id="menu" className="py-24 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-amber-900">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Soda Italiana', 
                price: 'R$ 12,99', 
                description: 'Refrescância e sabor em cada gole! ',
                image: 'https://instagram.fpoa33-2.fna.fbcdn.net/v/t51.2885-15/483540558_18307395667228870_2461965893281632874_n.jpg?stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuaGRyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fpoa33-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AFoDOojgmcm5ZkOv82WAa35gnYXWTg8PoLrMHvnn7vy6fGa7lXg-ZBnWq_jpeyGcj0ji3BChYFxYbADBLQIKXLQ&_nc_ohc=R2Z07pux9YgQ7kNvgEjvsxS&_nc_gid=tGKLIpTElvD8l5i3z-ATCA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzU4NjI0NjcxNzA1ODc3MTA4Ng%3D%3D.3-ccb7-5&oh=00_AYGw5WZC8gCH8yFIhV7b-8N0YA-KQ_2cowl5JOo7GbLxCg&oe=67DE62A4&_nc_sid=7a9f4b'
              },
              { 
                name: 'Cappuccino', 
                price: '$4.50', 
                description: 'Espresso with steamed milk and foam',
                image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80'
              },
              { 
                name: 'Pour Over', 
                price: '$4.00', 
                description: 'Hand-crafted, single-origin coffee',
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
              },
              { 
                name: 'Cold Brew', 
                price: '$4.50', 
                description: '24-hour steeped, smooth and refreshing',
                image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80'
              },
              { 
                name: 'Latte', 
                price: '$4.50', 
                description: 'Espresso with steamed milk',
                image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80'
              },
              { 
                name: 'Mocha', 
                price: '$5.00', 
                description: 'Espresso with chocolate and steamed milk',
                image: 'https://images.unsplash.com/photo-1579888071069-b6f54e9a7759?auto=format&fit=crop&w=800&q=80'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-amber-800 font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Location */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-amber-900">Visit Us</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-amber-800" />
                  123 Coffee Street, Brewville, BV 12345
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-amber-800" />
                  (555) 123-4567
                </p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-amber-800 hover:text-amber-700 transition-colors duration-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-amber-800 hover:text-amber-700 transition-colors duration-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-amber-800 hover:text-amber-700 transition-colors duration-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div id="location">
              <h2 className="text-4xl font-serif font-bold mb-8 text-amber-900">Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button 
              onClick={scrollToTop}
              className="flex items-center mb-4 md:mb-0 group cursor-pointer"
            >
              <Coffee className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="ml-2 text-lg font-serif">Artisan Brew</span>
            </button>
            <p className="text-sm">© 2024 Artisan Brew. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;