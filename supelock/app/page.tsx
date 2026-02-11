'use client';

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

// Sample car data (replace with your own)
const carItems = [
  {
    id: 1,
    name: 'Porsche 911 Turbo S',
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
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Features</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Pricing</a>
            <a href="#" className={cn('transition-colors', isScrolledPastHero ? 'text-white hover:text-gray-200' : 'text-white/90 hover:text-white')}>Docs</a>
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
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Features</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Pricing</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Docs</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Log in</a>
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
            backgroundImage: `url('/images/blursupe.png')`, // ← replace with your actual path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            filter: 'blur(6px)',              // ← add this line (adjust px value)
            backdropFilter: 'blur(58px)',           // ← add this line (adjust px value)
            WebkitBackdropFilter: 'blur(58px)',
            // adjust this value (0.1 to 0.5 recommended)
          }}
        />

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 ">
            The Internet Passport layer for AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-md">
            The modern platform for creators, startups, and teams who want to ship fast
            and look good doing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#305eff] hover:bg-gray-100 text-lg px-10 shadow-lg"
            >
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-white/70 text-white hover:bg-white/10 hover:text-white px-10 shadow-md"
            >
              Watch demo
            </Button>
          </div>

          <p className="mt-8 text-gray-200 drop-shadow-sm">
            Pay as much as you use • Generous free limits • Open-Source SDK
          </p>
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
            <div className="absolute top-0 right-0 w-64 bg-gray-950 border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-500">terminal</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-2">
                <div className="text-green-400">$ npx supelock init</div>
                <div className="text-gray-400">✓ Installing dependencies...</div>
                <div className="text-gray-400">✓ Setting up config...</div>
                <div className="text-blue-400">✓ Ready to ship! 🚀</div>
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
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">Deploy in minutes with our optimized infrastructure</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Secure by Default</h3>
                  <p className="text-gray-400">Enterprise-grade security built into every layer</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
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

            {/* Right – cards */}
            <div className="space-y-12 lg:space-y-16">
              {carItems.map((car, index) => (
                <div
                  key={car.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl transition-all duration-500 hover:shadow-blue-900/30 hover:border-gray-700"
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
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout: heading above each card */}
          <div className="md:hidden space-y-10">
            {carItems.map((car) => (
              <div key={car.id} className="space-y-4">
                <h3 className="text-2xl font-medium text-white px-2">{car.name}</h3>
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/80 shadow-xl">
                  <div className="h-64 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 mb-3 text-lg">{car.year}</p>
                    <p className="text-gray-300 leading-relaxed">{car.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}