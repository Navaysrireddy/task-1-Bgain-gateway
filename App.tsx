
import React, { useState, useEffect } from 'react';
import { Product, User, ContentCard } from './types';
import { PRODUCTS, TESTIMONIALS, FOOTER_LINKS, ARTICLES, EVENTS } from './constants';
import AuthOverlay from './components/AuthOverlay';
import CheckoutModal from './components/CheckoutModal';
// import GeminiChat from './components/GeminiChat';
import ArticleModal from './components/ArticleModal';
import EventModal from './components/EventModal';
import VideoModal from './components/VideoModal';

// Consistent Sneaker Product Shots for the Collection Section
const COLLECTION_IMAGES = [
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nike Air Max Red/White
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nike Black/White
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Blue Nike
  "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Pastel Nike
];

// Data corresponding to the tabs
const COLLECTION_DATA = [
  { name: 'Bibendum tellus', count: '11,658,467', shoeName: 'Air Max Pulse' },
  { name: 'Cras eget', count: '8,932,120', shoeName: 'Jordan One Take' },
  { name: 'Dolor pharetra', count: '15,204,891', shoeName: 'Zoom Freak' },
  { name: 'Amet, fringilla', count: '5,400,321', shoeName: 'Kyrie Infinity' }
];

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ContentCard | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ContentCard | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0); 

  const handleLogin = (user: User) => {
    setUser(user);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsMobileMenuOpen(false);
  };

  const handleAuthTrigger = () => {
    setIsAuthOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleBuy = (product: Product) => {
    if (!user) {
      setIsAuthOpen(true);
      return; 
    }
    setSelectedProduct(product);
  };

  const handleReadArticle = (article: ContentCard) => {
    setSelectedArticle(article);
  };

  const handleBuyTicket = (event: ContentCard) => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    setSelectedEvent(event);
  };

  const handleWatchVideo = (url: string) => {
    setVideoUrl(url);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isAuthOpen || selectedProduct || selectedArticle || selectedEvent || videoUrl) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isAuthOpen, selectedProduct, selectedArticle, selectedEvent, videoUrl]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream relative">
      
      {/* AUTH OVERLAY - Shows when triggered and not logged in */}
      {isAuthOpen && !user && (
        <AuthOverlay 
          onLogin={handleLogin} 
          onClose={() => setIsAuthOpen(false)} 
        />
      )}

      {/* MAIN CONTENT - Fully visible by default */}
      <div className="transition-all duration-500">
        
        {/* --- HEADER --- */}
        <header className="py-6 px-6 md:px-20 flex justify-between items-center text-brown relative z-40 max-w-7xl mx-auto w-full">
          <h1 
            className="text-3xl font-black tracking-tight cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Collers
          </h1>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-brown">
            <button onClick={() => scrollToSection('products')} className="hover:text-bronze transition">Products</button>
            <button onClick={() => scrollToSection('solutions')} className="hover:text-bronze transition">Solutions</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-bronze transition">Pricing</button>
            <button onClick={() => scrollToSection('resources')} className="hover:text-bronze transition">Resources</button>
            <button onClick={user ? undefined : handleAuthTrigger} className="hover:text-bronze transition">
              {user ? `Hi, ${user.name.split(' ')[0]}` : 'Log In'}
            </button>
            <button 
              className="border-2 border-brown px-6 py-2 rounded-lg font-bold hover:bg-brown hover:text-white transition shadow-sm"
              onClick={user ? handleLogout : handleAuthTrigger}
            >
              {user ? 'Sign Out' : 'Sign up now'}
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden text-2xl text-brown"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 lg:hidden z-50">
              <button onClick={() => scrollToSection('products')} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Products</button>
              <button onClick={() => scrollToSection('solutions')} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Solutions</button>
              <button onClick={() => scrollToSection('products')} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Pricing</button>
              <button onClick={() => scrollToSection('resources')} className="text-left font-medium p-2 hover:bg-gray-50 rounded">Resources</button>
              <button onClick={user ? handleLogout : handleAuthTrigger} className="text-left font-bold text-brown p-2 hover:bg-gray-50 rounded">
                {user ? 'Log Out' : 'Log In / Sign Up'}
              </button>
            </div>
          )}
        </header>

        {/* --- HERO SECTION --- */}
        <section className="relative px-6 md:px-20 py-12 md:py-20 grid md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-cream -z-10"></div>
          
          <div className="max-w-xl z-10">
            <h2 className="text-6xl md:text-7xl font-black text-navy leading-[1.1] mb-8">
              Collectible Sneakers
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Sit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={user ? () => scrollToSection('products') : handleAuthTrigger}
                className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-bold hover:bg-brown hover:text-white transition"
              >
                Sign up now
              </button>
              <button 
                onClick={() => handleWatchVideo("https://www.youtube.com/embed/UWTUr4Vt2W4?si=n8yjwPQ8VR9SROpg")} 
                className="text-brown font-bold flex items-center gap-2 px-4 py-3 hover:opacity-80 transition"
              >
                <div className="w-6 h-6 rounded-full border border-brown flex items-center justify-center">
                   <i className="fas fa-play text-[10px] ml-0.5"></i>
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative flex justify-center z-10">
            <div className="absolute bg-gold rounded-[50px] w-72 h-72 md:w-[26rem] md:h-[26rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Hero Sneaker" 
              className="w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition duration-500 animate-fade-in"
            />
          </div>
        </section>

        {/* --- FEATURES ICONS --- */}
        <section className="bg-cream px-6 md:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {icon: 'fa-trophy', title: 'Nibh viverra', desc: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'},
              {icon: 'fa-cube', title: 'Cursus amet', desc: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'},
              {icon: 'fa-tv', title: 'Ipsum fermentum', desc: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'},
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="relative mb-2">
                   <i className={`fas ${item.icon} text-orange-600 text-4xl relative z-10`}></i>
                   <div className="absolute -top-1 left-4 w-10 h-10 bg-orange-100 rounded-lg opacity-60 transform rotate-12"></div>
                </div>
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- BEST OF THE BEST (PRODUCTS) --- */}
        <section id="products" className="bg-navy py-20 px-6 md:px-20 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-0">The best of the best</h2>
              <button 
                onClick={user ? () => scrollToSection('collection') : handleAuthTrigger}
                className="border-2 border-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-navy transition tracking-wide"
              >
                Sign up now
              </button>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-navy border border-slate-700 rounded-[20px] overflow-hidden shadow-2xl flex flex-col group hover:border-slate-500 transition duration-300">
                  <div className="h-64 overflow-hidden relative p-6 flex justify-center items-center bg-opacity-50 bg-slate-800">
                     {/* Colored backdrop for shoe */}
                     <div className={`absolute w-48 h-48 rounded-full opacity-60 filter blur-xl ${product.id === 1 ? 'bg-orange-500' : product.id === 2 ? 'bg-blue-500' : 'bg-pink-500'}`}></div>
                     <img src={product.image} alt={product.title} className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition duration-500" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-slate-300 mb-6 flex-1 text-base leading-relaxed">{product.description}</p>
                    <button 
                      onClick={() => handleBuy(product)}
                      className="w-full border-2 border-white py-4 rounded-lg font-bold flex justify-center items-center gap-3 hover:bg-white hover:text-navy transition group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      <i className="fas fa-shopping-cart"></i> Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY JOIN US --- */}
       <section id="solutions" className="bg-cream py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-card p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-visible">
    
   
    <div className="flex-1 relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-8">
        Why join us
      </h2>

      <ul className="space-y-4 mb-10">
        {[
          'Est et in pharetra magna adipiscing ornare aliquam.',
          'Tellus arcu sed consequat ac velit ut eu blandit.',
          'Ullamcorper ornare in et egestas dolor orci.'
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <i className="fas fa-check text-green-500 mt-1"></i>
            <span className="text-slate-600 text-lg">{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={user ? undefined : handleAuthTrigger}
        className="border-2 border-brown text-brown px-8 py-3 rounded-lg font-bold hover:bg-brown hover:text-white transition z-10 relative"
      >
        Sign up now
      </button>
    </div>

    
    <div className="flex-1 relative w-full flex justify-center md:justify-end">
  
      <div className="absolute top-10 right-0 w-full h-full bg-gold opacity-50 transform rotate-[15deg] scale-110 z-0"></div>
      <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-brown rounded-full opacity-40 z-0"></div>
      <div className="absolute -top-10 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-40 z-0"></div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative z-10 border border-gray-100 w-full max-w-lg transform hover:-translate-y-2 transition duration-500">

   
        <div className="h-10 bg-white flex items-center px-4 gap-2 border-b">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* AUTOPLAY YOUTUBE VIDEO */}
        <div className="relative group">
          <iframe
            title="Why join us video"
            className="w-full h-64"
            src={
              "https://www.youtube.com/embed/QghqHw_vWzQ" +
              "?autoplay=1&mute=1&controls=0&loop=1&playlist=QghqHw_vWzQ&modestbranding=1&rel=0"
            }
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div
            className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition cursor-pointer"
            onClick={() =>
              handleWatchVideo(
                "https://www.youtube.com/embed/QghqHw_vWzQ?si=dTvKK3jFneEppIGk&autoplay=1"
              )
            }
          >
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
              <i className="fas fa-play text-navy text-2xl ml-1"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


        {/* --- TESTIMONIALS (Because they love us) --- */}
        <section id="resources" className="bg-cream py-16 px-6 md:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-10">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-4xl md:text-6xl font-extrabold text-navy">Because they love us</h2>
              {/* <div className="hidden md:flex gap-4">
                 <button className="w-12 h-12 rounded-full border-2 border-brown text-brown flex items-center justify-center hover:bg-brown hover:text-white transition">
                   <i className="fas fa-chevron-left"></i>
                 </button>
                 <button className="w-12 h-12 rounded-full border-2 border-brown text-brown flex items-center justify-center hover:bg-brown hover:text-white transition">
                   <i className="fas fa-chevron-right"></i>
                 </button>
              </div> */}
            </div>
          </div>
          
          {/* Yellow Background Bar */}
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-[22rem] bg-accent-yellow transform -skew-y-1 w-full z-0"></div>
            
            <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto pb-12 pt-16 no-scrollbar relative z-10 snap-x px-4">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="min-w-[280px] md:min-w-[370px] bg-white p-8 rounded-[20px] shadow-lg snap-center border border-gray-100 flex flex-col h-[400px]">
                  <div className="flex items-center gap-2 mb-6 text-slate-500 font-bold uppercase tracking-wider text-sm py-2">
                    <span className="text-2xl"><i className="fas fa-bolt text-slate-400"></i></span> 
                    <span className="text-xl font-black text-slate-600">{t.company}</span>
                  </div>
                  <p className="text-navy text-xl mb-8 leading-relaxed font-normal flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                    <div>
                      <h4 className="font-bold text-navy text-lg">{t.name}</h4>
                      <p className="text-slate-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- GROW YOUR COLLECTION (Light Section) --- */}
        <section id="collection" className="bg-cream px-6 md:px-20 py-20 overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-16">
             
             {/* Text & Tabs Column */}
             <div className="w-full md:w-1/3 flex flex-col gap-8">
                <div>
                   <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">Grow your collection</h2>
                   <p className="text-slate-600 text-lg leading-relaxed">
                     Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                   </p>
                </div>

                {/* Tab List */}
                <div className="space-y-2">
                   {COLLECTION_DATA.map((item, i) => (
                     <button 
                       key={i} 
                       onClick={() => setActiveTab(i)}
                       className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center gap-4 transition-all duration-200 ${activeTab === i ? 'bg-white shadow-md text-navy' : 'text-slate-500 hover:bg-slate-100'}`}
                     >
                        <i className={`fas ${i===0 ? 'fa-search' : i===1 ? 'fa-shield-alt' : i===2 ? 'fa-rocket' : 'fa-tv'} w-6 text-center text-xl`}></i> 
                        <span className="text-lg">{item.name}</span>
                        {activeTab === i && <i className="fas fa-arrow-right ml-auto text-slate-400"></i>}
                     </button>
                   ))}
                </div>
             </div>

             {/* Images / Windows Column */}
             <div className="flex-1 w-full relative h-[600px] md:h-[550px]">
                <div className="absolute top-10 left-0 w-[70%] h-[70%] bg-white rounded-2xl shadow-2xl overflow-hidden z-10 opacity-90 transform -rotate-2 border border-slate-200 transition-all duration-500">
                   <div className="h-8 bg-white border-b flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                   </div>
                   <img src={COLLECTION_IMAGES[(activeTab + 3) % 4]} className="w-full h-full object-cover grayscale opacity-50 transition-opacity duration-500" alt="Back Sneaker" />
                </div>

                <div className="absolute top-20 left-[15%] w-[75%] h-[75%] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden z-20 border border-slate-200 transition-all duration-300 hover:scale-[1.01]">
                   <div className="h-10 bg-white border-b flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="relative h-full animate-fade-in">
                     <img key={activeTab} src={COLLECTION_IMAGES[activeTab]} className="w-full h-full object-cover pb-10 transition-transform duration-500" alt="Active Collection" />
                   </div>
                </div>
                
                {/* Small Side Window (Right) - NOW A SNEAKER IMAGE */}
                <div className="absolute top-56 right-0 w-[35%] h-[45%] bg-white rounded-2xl shadow-xl overflow-hidden z-30 border-4 border-white transform hover:scale-105 transition duration-500">
                    <img src={COLLECTION_IMAGES[(activeTab + 1) % 4]} className="w-full h-full object-cover" alt="Detail Sneaker" />
                </div>
             </div>
          </div>

          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 w-full leading-none z-20 text-brown">
            <svg className="block w-full h-24 md:h-48" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#78350F" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,256C672,277,768,299,864,288C960,277,1056,235,1152,213.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* --- WORLD MAP SECTION (Dark) --- */}
        <section className="bg-brown h-[700px] md:h-[900px] relative overflow-hidden flex flex-col justify-center items-center -mt-1">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-overlay">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
                 alt="World Map" 
                 className="w-[90%] h-auto object-contain invert opacity-60"
               />
            </div>

            {/* Pulsing Dots on Map */}
            <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
                <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-gold rounded-full animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                <div className="absolute top-[45%] left-[55%] w-3 h-3 bg-gold rounded-full animate-pulse delay-500 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                <div className="absolute top-[30%] left-[65%] w-3 h-3 bg-gold rounded-full animate-pulse delay-700 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                <div className="absolute top-[65%] left-[75%] w-3 h-3 bg-gold rounded-full animate-pulse delay-300 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                <div className="absolute top-[40%] left-[85%] w-3 h-3 bg-gold rounded-full animate-pulse delay-1000 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                <div className="absolute top-[50%] left-[15%] w-3 h-3 bg-gold rounded-full animate-pulse delay-200 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center">
                
                {/* Floating Shoe Card Overlay - DYNAMIC */}
                <div className="absolute top-[20%] lg:top-[25%] left-[5%] lg:left-[15%] bg-white p-4 rounded-3xl shadow-2xl w-64 transform rotate-[-6deg] hover:rotate-0 transition duration-500 z-30 group border-4 border-white/10 bg-opacity-95 backdrop-blur-sm">
                     <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-cream mb-4">
                        <img 
                          key={activeTab} 
                          src={COLLECTION_IMAGES[activeTab]} 
                          className="w-full h-32 object-contain p-4 group-hover:scale-110 transition duration-500 animate-fade-in" 
                          alt="Collected Shoe" 
                        />
                     </div>
                     <div className="absolute -top-3 -left-3 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
                     
                     <div className="px-1 relative">
                        {/* Tooltip triangle */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 transform"></div>
                        
                        <p className="text-xs text-navy font-bold leading-tight">
                          Emma Simpson collected one pair of <span className="text-brown">{COLLECTION_DATA[activeTab].shoeName}</span>.
                        </p>
                        
                        <div className="mt-3 flex items-center justify-center">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute"></div>
                           <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
                        </div>
                     </div>
                </div>

                {/* Big Number - DYNAMIC */}
                <div className="mt-40 text-center relative z-20">
                   <h2 className="text-6xl md:text-9xl font-black text-white drop-shadow-lg mb-4 tracking-tight transition-all duration-300">
                     {COLLECTION_DATA[activeTab].count}
                   </h2>
                   <p className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-wide">Shoes Collected</p>
                </div>
            </div>
        </section>

        {/* --- ARTICLES SECTION --- */}
        <section className="bg-white py-20 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-6xl font-extrabold text-navy">Articles by Collectors</h2>
              <button className="text-brown font-bold text-lg hover:underline flex items-center gap-2">More Articles <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ARTICLES.map(article => (
                <div key={article.id} className="bg-white rounded-2xl shadow-card overflow-hidden border border-slate-100 group hover:shadow-xl transition">
                  <div className="h-48 overflow-hidden">
                     <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-navy mb-3">{article.title}</h3>
                    <p className="text-slate-500 mb-6 text-sm leading-relaxed">{article.description}</p>
                    <button 
                      onClick={() => handleReadArticle(article)}
                      className="text-brown font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                       {article.linkText} <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EVENTS SECTION --- */}
        <section className="bg-cream py-20 px-6 md:px-20 relative">
          <div className="max-w-7xl mx-auto">
             <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-6xl font-extrabold text-navy">Amazing events</h2>
              <button className="text-brown font-bold text-lg hover:underline flex items-center gap-2">Explore Events <i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {EVENTS.map(event => (
                <div key={event.id} className="bg-white rounded-2xl shadow-card overflow-hidden border border-slate-100 group hover:shadow-xl transition">
                  <div className="h-48 overflow-hidden relative">
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition z-10"></div>
                     <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-navy mb-3">{event.title}</h3>
                    <p className="text-slate-500 mb-6 text-sm leading-relaxed">{event.description}</p>
                    <button 
                      onClick={() => handleBuyTicket(event)}
                      className="text-brown font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                       {event.linkText} <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-navy text-white pt-20 pb-10 px-6 md:px-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
              {FOOTER_LINKS.map((section) => (
                <div key={section.title}>
                    <h4 className="font-bold mb-6 text-lg">{section.title}</h4>
                    <ul className="space-y-4 text-slate-300">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a 
                            href={link.href}
                            onClick={(e) => {
                              if (link.href.startsWith('#') && link.href.length > 1) {
                                e.preventDefault();
                                scrollToSection(link.href.substring(1));
                              }
                            }}
                            className="hover:text-gold transition duration-300 block cursor-pointer"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                </div>
              ))}
              <div className="col-span-2 md:col-span-2 lg:col-span-2">
                  <h4 className="font-bold mb-6 text-lg">Get the App</h4>
                  <div className="flex flex-col gap-4">
                      <button className="bg-black border border-slate-600 rounded-xl p-3 flex items-center gap-3 w-full max-w-[200px] hover:bg-slate-900 transition hover:border-white group">
                        <i className="fab fa-apple text-3xl text-white group-hover:scale-110 transition"></i>
                        <div className="text-left">
                            <div className="text-[10px] uppercase tracking-wide text-slate-400">Download on the</div>
                            <div className="text-base font-bold leading-none">App Store</div>
                        </div>
                      </button>
                      <button className="bg-black border border-slate-600 rounded-xl p-3 flex items-center gap-3 w-full max-w-[200px] hover:bg-slate-900 transition hover:border-white group">
                        <i className="fab fa-google-play text-2xl ml-1 text-white group-hover:scale-110 transition"></i>
                        <div className="text-left ml-1">
                            <div className="text-[10px] uppercase tracking-wide text-slate-400">Get it on</div>
                            <div className="text-base font-bold leading-none">Google Play</div>
                        </div>
                      </button>
                  </div>
                  <div className="mt-8">
                     <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
                     <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-navy transition"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-navy transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-navy transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-navy transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-navy transition"><i className="fab fa-linkedin-in"></i></a>
                     </div>
                  </div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
              <p>Collers © 2023. All rights reserved.</p>
              <div className="flex gap-8 mt-6 md:mt-0">
                  <a href="#" className="hover:text-white transition">Terms</a>
                  <a href="#" className="hover:text-white transition">Privacy</a>
                  <a href="#" className="hover:text-white transition">Contact</a>
                  <div className="flex items-center gap-2 text-white cursor-pointer hover:text-gold transition">
                    <i className="fas fa-globe"></i> EN
                  </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* --- MODALS --- */}
      {selectedProduct && user && (
        <CheckoutModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
      
      {selectedArticle && (
        <ArticleModal 
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {selectedEvent && user && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
      
      {videoUrl && (
        <VideoModal
          videoUrl={videoUrl}
          onClose={() => setVideoUrl(null)}
        />
      )}
      
      {/* AI Chat only available if logged in */}
      {user && <GeminiChat />}
    </div>
  );
};

export default App;
