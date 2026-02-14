'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-blue-500/30 font-sans relative overflow-hidden">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url('/images/blursupe.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 2. The "Rising Sun" Glow - Animated Wrapper */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none overflow-visible transition-all duration-[3000ms] ease-out 
          ${mounted ? 'right-[-15%] opacity-100 scale-100' : 'right-[-40%] opacity-0 scale-90'}`}
        style={{ width: '60%', height: '80%' }}
      >
        
        {/* Deep Atmospheric Wash - Spreads very far */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, #0795FA 0%, transparent 80%)',
            filter: 'blur(160px)',
          }}
        />

        {/* Medium Spread - Bridges the gap */}
        <div 
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, #3344FB 0%, transparent 0%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* The Brighter "Hot Spot" Core - Sharper but still blended */}
        <div 
          className="absolute inset-0 opacity-90 mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, #606DFA 0%, #0C10F0 20%, transparent 45%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* 3. Global Fading Gradients */}
      <div className="absolute top-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />

      {/* Navbar */}
      <nav className={`absolute top-0 w-full z-50 transition-opacity duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-xl font-light tracking-tighter">supelock</span>
            <div className="hidden lg:flex gap-8 text-[13px] font-normal text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Products</a>
              <a href="#" className="hover:text-white transition-colors">Developers</a>
              <a href="#" className="hover:text-white transition-colors">Resources</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="rounded-full bg-transparent border-gray-800 hover:bg-white hover:text-black px-5 h-9 text-[12px] font-medium transition-all"
            >
              Book a Demo →
            </Button>
            <a href="#" className="hidden sm:block text-[12px] font-medium text-gray-400 hover:text-white">Log In</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className={`relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 z-30 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 flex flex-col justify-end max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-6">
                The Internet <span className="bg-gradient-to-r from-blue-400 via-blue-100 to-white bg-clip-text text-transparent">Passport layer</span> for AI Agents
              </h1>
              
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-xl">
                Agent moderation for websites. Detect and prevent harmful actions 
                before they happen, so you can focus on building.
              </p>

              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <Button 
                  className="rounded-full bg-white text-black hover:bg-gray-200 px-6 py-5 text-[13px] font-semibold transition-all shadow-2xl"
                >
                  Book a Demo →
                </Button>
                <a 
                  href="#" 
                  className="text-[13px] font-semibold hover:underline underline-offset-4 flex items-center gap-2 group"
                >
                  Start Building <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Right Side - Diagram Area */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px] md:max-w-md aspect-square lg:mb-[-20px]">
                
                {/* Pulsing Glow behind diagram */}
                <div 
                  className="w-full h-full rounded-full bg-[#1D2FF6]/20 blur-[120px] absolute inset-0 animate-pulse" 
                  style={{ animationDuration: '4s' }}
                />

                <img 
                  src="/images/botpassport.png" 
                  alt="Architecture Diagram" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}