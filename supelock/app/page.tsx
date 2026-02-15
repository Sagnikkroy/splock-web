'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        setIsAtTop(currentScrollY < 10);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const integrations = [
    { name: 'ChatGPT', src: '/images/logos/chatgpt.svg' },
    { name: 'Claude', src: '/images/logos/claude.svg' },
    { name: 'n8n', src: '/images/logos/n8n.svg' },
    { name: 'OpenClaw', src: '/images/logos/openclaw.svg' },
    { name: 'CloudBot', src: '/images/logos/cloudbot.svg' },
  ];

  return (
    <div className="bg-[#121212] text-white selection:bg-blue-500/30 font-sans relative">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className={`absolute inset-0 transition-all duration-500 -z-10 ${isAtTop ? 'backdrop-blur-none bg-transparent' : 'backdrop-blur-md bg-[#1212120F]/50'} [mask-image:linear-gradient(to_bottom,black_70%,transparent)]`} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img src="/images/supelocklogo.png" alt="Supelock Logo" className="h-9 w-auto" />
              <span className="text-xl font-light tracking-tighter">supelock</span>
            </div>
            <div className="hidden lg:flex gap-8 text-[13px] font-normal text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Products</a>
              <a href="#" className="hover:text-white transition-colors">Developers</a>
              <a href="#" className="hover:text-white transition-colors">Resources</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full bg-transparent border-gray-800 hover:bg-white hover:text-black px-5 h-9 text-[12px] font-medium transition-all">Book a Demo →</Button>
            <a href="#" className="hidden sm:block text-[12px] font-medium text-gray-400 hover:text-white">Log In</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/images/blursupe.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className={`absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none overflow-visible transition-all duration-[3500ms] ease-out ${mounted ? 'right-[-15%] opacity-100 scale-100' : 'right-[-40%] opacity-0 scale-90'}`} style={{ width: '60%', height: '80%' }}>
          <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ background: 'radial-gradient(ellipse at 100% 50%, #0795FA 0%, transparent 80%)', filter: 'blur(160px)' }} />
          <div className="absolute inset-0 opacity-50 mix-blend-screen" style={{ background: 'radial-gradient(ellipse at 100% 50%, #3344FB 0%, transparent 0%)', filter: 'blur(100px)' }} />
          <div className="absolute inset-0 opacity-90 mix-blend-screen" style={{ background: 'radial-gradient(ellipse at 100% 50%, #606DFA 0%, #0C10F0 20%, transparent 45%)', filter: 'blur(70px)' }} />
        </div>
        <div className={`max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-30 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <div className="order-2 lg:order-1 flex flex-col justify-end max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6">Introducing the Internet <span className="bg-gradient-to-r from-blue-400 via-blue-100 to-white bg-clip-text text-transparent">Passport layer</span> for AI Agents</h1>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-xl">Agent moderation for websites. Detect and prevent harmful actions before they happen, so you can focus on building.</p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-6 py-5 text-[13px] font-semibold transition-all shadow-2xl">Book a Demo →</Button>
                <a href="#" className="text-[13px] font-semibold hover:underline underline-offset-4 flex items-center gap-2 group">Setup in 5 minutes <span className="group-hover:translate-x-1 transition-transform">→</span></a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px] md:max-w-md aspect-square lg:mb-[-20px]">
                <div className="w-full h-full rounded-full bg-[#606DFA]/20 blur-[120px] absolute inset-0 animate-pulse" style={{ animationDuration: '4s' }} />
                <img src="/images/botpassport.png" alt="Architecture Diagram" className="relative z-10 w-full h-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate Section - Ultra-Thick Padding & Spacing */}
      <section className="py-24 md:py-20 lg:py-24 bg-[#121212] relative z-20">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-[44px] font-light leading-tight tracking-tight mb-20 md:mb-28 lg:mb-32 max-w-4xl">
            Integrate Supelock with <span className="text-gray-500">any framework</span>
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-x-16 md:gap-x-20 lg:gap-x-24 gap-y-12 md:gap-y-16 lg:gap-y-20">
            {integrations.map((logo, index) => (
              <div key={index} className="group cursor-pointer">
                <img src={logo.src} alt={logo.name} className="w-16 h-16 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="relative min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-500 font-light text-2xl tracking-widest uppercase">Explanation Section</h2>
          <p className="text-gray-600 mt-4 italic">Scroll up to see the navbar return</p>
        </div>
      </section>
      {/* Openclaw Setup Section */}
<section className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
  <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col items-center">
    
    {/* Logo and Header Group */}
    <div className="relative flex flex-col items-center mb-16 w-full">
      {/* Background Glow for Logo */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center overflow-hidden mb-[-100px] md:mb-[-140px]">
        {/* Logo with Zoom and Heavy Bottom Fade */}
        <div className="relative w-full h-full scale-100 transform">
          <img 
            src="/images/claw3d.png" 
            alt="Openclaw Logo" 
            className="w-full h-full object-contain relative z-10"
          />
          {/* Heavy Gradient to ensure the bottom of the icon image is fully hidden/blended */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent z-20" />
        </div>
      </div>

      <div className="relative z-30 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6 bg-gradient-to-r from-red-600 via-red-400 to-red-50 bg-clip-text text-transparent">Openclaw</h2>
        <p className="text-gray-400 text-[13px] font-medium tracking-[0.4em] uppercase opacity-80">Setup</p>
      </div>
    </div>

    {/* Terminal Card using 'realcard' variant */}
    <div className="w-full max-w-2xl mx-auto relative z-30 group/terminal">
      <Card variant="realcard" className="p-0 overflow-hidden border-white/5 shadow-2xl bg-[#0d0d0d]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            <span className="text-[10px] text-gray-500 font-mono ml-2 uppercase tracking-widest">setup.py</span>
          </div>
          
          {/* Copy Button */}
          <button 
            onClick={() => {
              const code = `from supelock import SupelockLayer\nfrom openclaw import Agent\n\nagent = Agent(id="open-claw-v1")\n\n# Attach the passport layer\npassport = SupelockLayer(api_key="sk_live_...")\nagent.use(passport)`;
              navigator.clipboard.writeText(code);
            }}
            className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors group"
          >
            <span className="text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono">Copy</span>
            <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        
        {/* Terminal Content / Code Block */}
        <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-relaxed text-gray-300">
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">1</span>
            <span><span className="text-blue-400">from</span> supelock <span className="text-blue-400">import</span> SupelockLayer</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">2</span>
            <span><span className="text-blue-400">from</span> openclaw <span className="text-blue-400">import</span> Agent</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">3</span>
            <span />
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">4</span>
            <span>agent = Agent(id=<span className="text-green-400">"open-claw-v1"</span>)</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">5</span>
            <span />
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">6</span>
            <span><span className="text-gray-500"># Attach the passport layer</span></span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">7</span>
            <span>passport = SupelockLayer(api_key=<span className="text-green-400">"sk_live_..."</span>)</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-600 select-none w-4">8</span>
            <span>agent.use(passport)</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
</section>

    </div>
  );
}