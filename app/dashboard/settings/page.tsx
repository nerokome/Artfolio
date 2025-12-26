'use client';
import React, { useState } from 'react'
import { Copy, Check, Globe, Share2 } from 'lucide-react';

const page = () => {
  const [copied, setCopied] = useState(false);
  const portfolioUrl = "portfolio.creator.com/jane-doe";

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='bg-neutral-700  min-h-screen'>
    <div className="min-h-screen  flex items-center justify-center p-6 antialiased font-sans">
      {/* Glassmorphism Container */}
      <div className="w-full  bg-[#1a1a1a]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
        
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Public Profile</h1>
          <p className="text-zinc-500 mt-2 text-sm">Manage your presence and share your work.</p>
        </header>

        <div className="space-y-8">
          {/* PORTFOLIO URL SECTION */}
          <div className="bg-[#22d3ee]/5 border border-[#22d3ee]/20 rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4 text-[#22d3ee]">
              <Globe size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Your Live Portfolio</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-zinc-300 text-sm font-mono truncate">
          {portfolioUrl}
              </div>
              <button 
          onClick={handleCopy}
          className="bg-[#22d3ee] hover:bg-[#1ebbd4] text-black p-3 rounded-xl transition-all active:scale-90 flex items-center justify-center min-w-[50px]"
              >
          {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            <p className="text-[10px] text-zinc-500 mt-3 ml-1">
              Anyone with this link can view your published creative pieces.
            </p>
          </div>

          {/* PROFILE INFORMATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Display Name</label>
              <input 
          type="text" 
          defaultValue="Creative Mind"
          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-[#22d3ee] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Location</label>
              <input 
          type="text" 
          placeholder="New York, NY"
          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-[#22d3ee] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Bio</label>
            <textarea 
              rows={3}
              placeholder="Tell the world about your creative process..."
              className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#22d3ee] transition-all resize-none"
            />
          </div>
          <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-white mb-4">Privacy & Security</h3>
            <div className="space-y-3">
              <select className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-[#22d3ee] transition-all">
          <option>Portfolio visibility: Public</option>
          <option>Portfolio visibility: Private</option>
              </select>
              <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded" />
          <span className="text-sm text-zinc-300">Allow search engines to index your profile</span>
              </label>
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-4 flex items-center justify-between">
            <button className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-medium transition-colors">
              <Share2 size={16} />
              Share Stats
            </button>
            <div className="flex gap-6">
              <button className="text-zinc-400 hover:text-white text-sm font-semibold transition-colors">
          Cancel
              </button>
              <button className="bg-[#22d3ee] hover:bg-[#1ebbd4] text-black px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-cyan-500/10 transition-all active:scale-95">
          Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
