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
      // Navbar scroll trigger
      const heroThreshold = window.innerHeight * 0.9;
      setIsScrolledPastHero(window.scrollY > heroThreshold);

      // Scroll spy logic for car highlight
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

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
      {/* Navbar (unchanged) */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolledPastHero ? 'bg-[#305eff] shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">YourBrand</div>

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #60a5fa 0%, #1e40af 50%, #0b0f15 100%)',
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Build something amazing</h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-md">
            The modern platform for creators, startups, and teams who want to ship fast and look good doing it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-[#305eff] hover:bg-gray-100 text-lg px-10 shadow-lg">Start for free</Button>
            <Button size="lg" variant="outline" className="text-lg border-white/70 text-white hover:bg-white/10 hover:text-white px-10 shadow-md">Watch demo</Button>
          </div>
          <p className="mt-8 text-gray-200 drop-shadow-sm">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Why people love us */}
      <section className="py-32 px-6 bg-[#0b0f15]">
        <h2 className="text-4xl font-bold text-center mb-16">Why people love us</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* ... your existing cards ... */}
          <div className="text-center p-8 bg-gray-900/40 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Fast</h3>
            <p className="text-gray-300">Ship your product in days, not months.</p>
          </div>
          <div className="text-center p-8 bg-gray-900/40 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Beautiful</h3>
            <p className="text-gray-300">Looks professional without any design effort.</p>
          </div>
          <div className="text-center p-8 bg-gray-900/40 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Affordable</h3>
            <p className="text-gray-300">Start free, scale when you grow.</p>
          </div>
        </div>
      </section>

      {/* New: Scrolling Cards + Highlighted List Section */}
      <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-[#0b0f15] to-[#0a0d14]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Explore the Legends</h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT - Highlighted List */}
            <div className="md:sticky md:top-24 h-fit">
              <div className="space-y-6">
                {carItems.map((car, index) => (
                  <div
                    key={car.id}
                    className={cn(
                      'p-5 rounded-xl cursor-pointer transition-all duration-300 border border-transparent',
                      activeCarIndex === index
                        ? 'bg-[#305eff]/20 border-[#305eff]/50 shadow-lg shadow-blue-900/30 scale-[1.03]'
                        : 'bg-gray-900/30 hover:bg-gray-800/40'
                    )}
                  >
                    <h3
                      className={cn(
                        'text-2xl font-semibold transition-colors',
                        activeCarIndex === index ? 'text-[#60a5fa]' : 'text-gray-300'
                      )}
                    >
                      {car.name}
                    </h3>
                    <p className="text-gray-500 mt-1">{car.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Scrolling Cards */}
            <div className="space-y-10 md:space-y-16">
              {carItems.map((car, index) => (
                <div
                  key={car.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-blue-900/30"
                >
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-3 text-white">{car.name}</h3>
                    <p className="text-gray-400 mb-4">{car.year}</p>
                    <p className="text-gray-300 leading-relaxed">{car.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}