'use client';

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, Pill } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

// Sample car data (replace with your own)
const carItems = [
  {
    id: 1,
    name: 'based Signing',
    year: '2024',
    desc: 'The ultimate sports car with 640 hp and mind-blowing acceleration.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c4965f49072?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Lamborghini Aventador SVJ',
    year: '2023',
    desc: 'Aggressive design meets 759 hp V12 naturally aspirated engine.',
    image: 'https://images.unsplash.com/photo-1583121274602-89d3aa2e5b8e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Ferrari SF90 Stradale',
    year: '2024',
    desc: 'Hybrid hypercar with 986 hp and futuristic styling.',
    image: 'https://images.unsplash.com/photo-1617814065893-00757125efab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'McLaren 720S',
    year: '2023',
    desc: 'Lightweight supercar with razor-sharp handling and 710 hp.',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Bugatti Chiron Super Sport',
    year: '2024',
    desc: '1,600+ hp hypercar capable of speeds beyond 300 mph.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Home() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.9;
      setIsScrolledPastHero(window.scrollY > heroThreshold);

      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let foundIndex = 0;
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const top = card.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            foundIndex = index;
          }
        }
      });

      setActiveCarIndex(foundIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f15] text-white">
      {/* Navbar */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolledPastHero ? 'bg-[#305eff] shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-medium">Supelock</div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Developers</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Products</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Documents</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Pricing</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Blog</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Company</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200 hover:bg-white/10' : 'text-white hover:text-white hover:bg-white/10')}>Log in</Button>
            <Button className={cn('transition-all', isScrolledPastHero ? 'bg-white text-[#305eff] hover:bg-gray-100' : 'bg-[#305eff] hover:bg-blue-700 text-white')}>Get Started</Button>
          </div>

          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#305eff] border-t border-blue-400/30 py-6 px-6">
            <div className="flex flex-col gap-6 text-lg">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Products</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Developers</a>
               <a href="#" className="text-white hover:text-gray-200 transition-colors">Docs</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Blog</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Pricing</a>
               <a href="#" className="text-white hover:text-gray-200 transition-colors">API</a>
              <Button className="mt-4 bg-white text-[#305eff] hover:bg-gray-100 w-full py-6 text-lg font-medium">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with transparent overlay image */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #60a5fa 0%, #1e40af 50%, #0b0f15 100%)',
          }}
        />

        {/* Transparent overlay image – full cover, behind content */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url('/images/blursupe.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            filter: 'blur(6px)',
            backdropFilter: 'blur(58px)',
            WebkitBackdropFilter: 'blur(58px)',
          }}
        />

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 ">
            The Internet Passport layer for AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-md">
            Agent moderation for websites. Detect and prevent harmful actions before they happen, so you can focus on building your amazing products.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="rzpy"
              className="text-lg px-10"
            >
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-white/70 text-white hover:bg-white/10 hover:text-white px-10"
            >
              Connect with us
            </Button>
          </div>

          {/* Pill cards with features */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Pill variant="transparent" size="sm">
              Pay as much as you use
            </Pill>
            <span className="text-gray-400">•</span>
            <Pill variant="transparent" size="sm">
              Generous free limits
            </Pill>
            <span className="text-gray-400">•</span>
            <Pill variant="transparent" size="sm">
              Open-Source SDK
            </Pill>
          </div>
        </div>
      </section>

      {/* SVG, CLI Card, and Text Section */}
      <section className="py-32 px-6 bg-[#0b0f15]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[7fr_3fr] gap-16 items-center">
          {/* Left side: SVG with CLI card on top right */}
          <div className="relative">
            {/* SVG */}
            <img src="/earth.svg" alt="Earth" className="w-full h-auto" />

            {/* CLI-like card on top right of SVG */}
            <div className="absolute top-0 right-0 w-64 bg-gray-950 border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                
                <span className="ml-2 text-xs text-gray-500">JSON</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-2">
                <div className="text-green">   trust_level': 'high', 'payload': 'actor_id': 'didle-agent', 'exp': 1770759503, 'iat': 1770759443, 'intent': 'action': 'create_order', 'method': 'POST', 'nonce': 'd21d29ee-e971-429d-9ec8-230349cdf840', 'path': '/orders', 'v': 1</div>
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-3xl font-medium">Detect Intent of Agents before allowing them to perform a task in your website</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Focus on what matters. Our platform handles the complexity so you can deliver 
              amazing experiences without the headaches.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
               
                <div>
                  <h3 className="text-xl font-medium mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">Deploy in minutes with our optimized infrastructure</p>
                </div>
              </div>
              <div className="flex gap-4">
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Secure by Default</h3>
                  <p className="text-gray-400">Enterprise-grade security built into every layer</p>
                </div>
              </div>
              <div className="flex gap-4">
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Developer First</h3>
                  <p className="text-gray-400">Built by developers, for developers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Section */}
      <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-[#0b0f15] to-[#0a0d14]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 md:mb-16">Explore the Legends</h2>

          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-[1fr_4fr] lg:grid-cols-[1fr_5fr] gap-8 lg:gap-12">
            {/* Left – simple list */}
            <div className="md:sticky md:top-24 h-fit space-y-8 lg:space-y-10">
              {carItems.map((car, index) => (
                <div
                  key={car.id}
                  className={cn(
                    'transition-all duration-300 cursor-default flex items-center gap-3',
                    activeCarIndex === index ? 'text-white font-medium text-xl' : 'text-gray-500 text-lg'
                  )}
                >
                  <div
                    className={cn(
                      'w-1.5 h-8 rounded-full transition-all',
                      activeCarIndex === index ? 'bg-[#60a5fa]' : 'bg-transparent'
                    )}
                  />
                  <span>{car.name}</span>
                </div>
              ))}
            </div>

            {/* Right – cards with elevated variant */}
            <div className="space-y-12 lg:space-y-16">
              {carItems.map((car, index) => (
                <Card
                  key={car.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  variant="elevated"
                  size="default"
                  className="overflow-hidden transition-all duration-500 hover:shadow-blue-900/50"
                >
                  <div className="h-64 lg:h-[28rem] overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-medium mb-3 text-white">{car.name}</h3>
                    <p className="text-gray-400 mb-4 text-lg">{car.year}</p>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">{car.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile layout: heading above each card */}
          <div className="md:hidden space-y-10">
            {carItems.map((car) => (
              <div key={car.id} className="space-y-4">
                <h3 className="text-2xl font-medium text-white px-2">{car.name}</h3>
                <Card variant="elevated" size="default" className="overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 mb-3 text-lg">{car.year}</p>
                    <p className="text-gray-300 leading-relaxed">{car.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}