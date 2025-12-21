'use client';

import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreed: false
  });
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 ">
    <div 
      className="relative z-30 rounded-md overflow-hidden w-full  max-w-2xl "
      style={{
        backgroundImage: "url('/fotos.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
    >
    
      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden w-full">
        
      
       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-white mb-6">Join Artfolio</h1>
          <h2 className="text-xl font-semibold text-white text-left">Login</h2>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition-colors"
          />

          <div className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 checked:bg-cyan-500 accent-cyan-500 cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-300 leading-tight">
              I agree to the <span className="underline cursor-pointer">Terms and Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>
            </label>
             <div>
            
          </div>
          <h1 className="text-white text-sm">Have an account <span className="text-cyan-400/60 underline"><Link href={'/auth/login '}>Login</Link></span></h1>
          </div>

          <button
            type="submit"
            className="mt-6 w-1/2 mx-auto py-3 rounded-2xl border-2 border-cyan-400/60 text-white font-medium hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
        </div>
      </div>
    </div>
    

  );
};


export default Signup;
