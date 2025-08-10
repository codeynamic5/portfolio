// components/home/HeroSection.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Your Sketch Display */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/your-sketch.png" // Your sketch here
              alt="Personal illustration"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              priority
            />
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300" />
          </div>
        </div>

        {/* Introduction Content */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Hi, I&apos;m <span className="text-blue-600">Your Name</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Full-stack developer passionate about creating beautiful, functional 
            digital experiences. I blend creativity with code to bring ideas to life.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                View My Work
              </button>
            </Link>
            
            <Link href="/about">
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}