import React, { useState, useEffect } from 'react';
import { Coffee, Clock, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

// Hero Images
import Hero1 from './assets/img/us-1.jpg';
import Hero2 from './assets/img/us-2.jpg';
import Hero3 from './assets/img/us-3.jpg';

// Menu Images
import SodaItaliana from './assets/img/soda.jpg';
import Cake from './assets/img/cake-1.jpg';
import Pie from './assets/img/pie-1.jpg';
import Sand from './assets/img/sand-1.jpg';


function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: Hero1,
      alt: "Neisa Cafeteria"
    },
    {
      url: Hero2,
      alt: "Nossos doces"
    },
    {
      url: Hero3,
      alt: "Interior"
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
              <span className="ml-2 text-xl font-serif font-bold text-amber-900">Neisa Confeitaria</span>
            </button>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Sobre nós
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Cardápio
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Contato
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-amber-900 hover:text-amber-700 transition-colors duration-300 relative group"
                >
                  Localização
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
              Confeitando momentos perfeitos,<br />uma fatia por vez
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
            Experimente café artesanal em um ambiente aconchegante. Nossos grãos cuidadosamente selecionados e baristas especializados garantem que cada xícara conte uma história.
            </p>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
            >
              Ver Cardápio
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
              <h3 className="text-xl font-semibold mb-2">Café Quentinho</h3>
              <p className="text-gray-600">Proveniente das melhores regiões cafeeiras do mundo.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feito na Hora</h3>
              <p className="text-gray-600">Cada porção é feita diariamente para um sabor ideal.</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-amber-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Espaço Aconchegante</h3>
              <p className="text-gray-600">Um ambiente caloroso e convidativo, perfeito para trabalhar ou relaxar..</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Preview */}
      <div id="menu" className="py-24 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-amber-900">Nosso Cardápio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Soda Italiana', 
                price: 'R$ 12,99', 
                description: 'Refrescância e sabor em cada gole! ',
              image: SodaItaliana,
             },
              { 
                name: 'Bolo', 
                price: 'R$ 9,90 (a cada 100g)', 
                description: 'A cada mordida uma experiência inesquecível!',
                image: Cake
              },
              { 
                name: 'Torta', 
                price: 'R$ 10,90 (a cada 100g)', 
                description: 'As tortas mais gostosas, feitas com muito amor.',
                image: Pie,
              },
              { 
                name: 'Sanduíche Natural', 
                price: 'R$ 14,50', 
                description: 'Sanduba natural e nutritivo.',
                image: Sand,
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
              <h2 className="text-4xl font-serif font-bold mb-8 text-amber-900">Venha nos Visitar</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-amber-800" />
                  Av. Sete de Setembro, 1219, Bagé, Rio Grande do Sul, Brazil 96400-006
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-amber-800" />
                  (53) 3242-4423
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
                <p>Segunda - Sexta: 9:00 - 20:00</p>
                <p>Sábado: 10:00 - 20:00</p>
                <p>Domingo: 14:00 - 20:00</p>
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
              <span className="ml-2 text-lg font-serif">Neisa Confeitaria</span>
            </button>
            <p className="text-sm">© 2024 - Desenvolvido por Neuro Flow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;