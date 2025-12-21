import React from "react";

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
        
        <div className="bg-black/60 backdrop-blur-sm p-12">
          <h2 className="text-4xl font-bold leading-tight text-white">
            Artfolio: Showcase Your Genius. <br />
            Track Your Legacy
          </h2>

          <p className="mt-4 max-w-xl text-gray-300">
            The ultimate portfolio & analytics platform for artists, designers,
            and photographers
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-md bg-cyan-400 px-6 py-2 text-black font-medium hover:bg-cyan-300 transition">
              Sign Up Free
            </button>

            <button className="rounded-md border border-cyan-400 px-6 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
