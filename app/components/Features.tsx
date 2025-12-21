import React from 'react'
import { FaCamera } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const Features = () => {
  const features = [
    {
      title: "Upload & Organize",
      icon: <FaCamera size={35}  color='#67E8F9' />,
    },
    {
      title: "Analytics & Insights",
      icon: <FaChartSimple size={35}  color='#67E8F9' />,
    },
    {
      title: "Share & Connect",
      icon: <IoShareSocialSharp size={35} color='#67E8F9' />,
    },
  ]

  return (
    <section className="mx-auto mt-20 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center hover:border-cyan-400 transition"
        >
          <div className="flex items-center justify-center text-3xl mb-4">{f.icon}</div>
          <h3 className="font-semibold">{f.title}</h3>
        </div>
      ))}
    </section>
  )
}

export default Features
