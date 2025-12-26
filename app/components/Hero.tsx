import React from "react";
import { ArrowRight } from "lucide-react"; // optional icon library

const Hero = () => {
  return (
    <section className="relative mx-auto mt-10 max-w-6xl rounded-2xl p-[1px] animated-border">
      <div
        className="relative z-30 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/fotos.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-12 sm:p-16 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white animate-fadeIn">
            Artfolio: Showcase Your Genius. <br />
            <span className="text-cyan-400">Track Your Legacy</span>
          </h2>

          <p className="mt-4 max-w-xl text-gray-300 animate-slideUp">
            The ultimate portfolio & analytics platform for artists, designers,
            and photographers
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="rounded-md bg-cyan-400 px-6 py-3 text-black font-semibold hover:bg-cyan-300 transition flex items-center gap-2">
              Sign Up Free <ArrowRight size={18} />
            </button>

            <button className="rounded-md border border-cyan-400 px-6 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Learn More
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-200">
            <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition">
              <h3 className="text-lg font-semibold text-cyan-400">📊 Analytics</h3>
              <p className="text-sm mt-2">Track views, likes, and engagement across your portfolio.</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition">
              <h3 className="text-lg font-semibold text-cyan-400">🎨 Showcase</h3>
              <p className="text-sm mt-2">Display your best work in a stunning, customizable gallery.</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition">
              <h3 className="text-lg font-semibold text-cyan-400">🌍 Community</h3>
              <p className="text-sm mt-2">Connect with fellow creators and grow your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;