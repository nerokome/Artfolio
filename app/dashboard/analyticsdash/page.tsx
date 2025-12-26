
'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

export default function Page() {
  
  const viewsOverTime = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Profile Views',
        data: [12, 18, 25, 40, 32, 55, 48],
        fill: true,
        borderColor: '#22d3ee',
        backgroundColor: 'rgba(34, 211, 238, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const donutOptions = {
    cutout: '75%',
    plugins: { legend: { display: false } },
  };

  return (
    <div className="min-h-screen text-white ">
      <div>
        <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
        <p className="text-zinc-400 mb-8">
          Track your artwork performance and audience engagement over time.
        </p>
      </div>
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

        
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#181818] p-6 rounded-2xl border border-white/5">
            <h2 className="text-xl font-medium mb-6">
              Views Over Time
            </h2>
            <div className="h-64">
              <Line data={viewsOverTime} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-[#181818] p-6 rounded-2xl border border-white/5">
            <h2 className="text-xl font-medium mb-6">
              Engagement Split
            </h2>
            <div className="flex gap-12">
              <DonutStat label="Artwork A" value={45} />
              <DonutStat label="Artwork B" value={30} />
              <DonutStat label="Artwork C" value={30} />
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-4 bg-[#181818] p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-medium mb-6">
            Most Viewed Pieces
          </h2>
          <div className="space-y-4">
            {['Neon Portrait', 'Night Cityscape', 'Urban Loneliness'].map((title) => (
              <div
                key={title}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition"
              >
                <div className="w-16 h-12 bg-zinc-700 rounded-lg" />
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-zinc-500">Digital Art</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function DonutStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto">
        <Doughnut
          data={{
            datasets: [{
              data: [value, 100 - value],
              backgroundColor: ['#22d3ee', '#2d2d2d'],
              borderWidth: 0,
            }],
          }}
          options={{ cutout: '75%', plugins: { legend: { display: false } } }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {value}%
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
