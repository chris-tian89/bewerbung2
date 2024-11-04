import React from 'react';

interface FighterCardProps {
  name: string;
  imageUrl: string;
  skill: string;
  description: string;
}

export function FighterCard({ name, imageUrl, skill, description }: FighterCardProps) {
  return (
    <div className="fighter-card bg-black/80 backdrop-blur-sm p-4 rounded-xl border-4 border-green-500 hover:scale-105 transition-transform">
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover pixel-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-xl font-bold text-green-400 neon-text font-pixel">{name}</h3>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-red-500 font-pixel text-sm">{skill}</span>
          <div className="h-2 w-32 bg-black/50 rounded-full border border-green-500">
            <div className="h-full bg-green-500 rounded-full animate-[blink_2s_ease-in-out_infinite]" style={{width: '80%'}}></div>
          </div>
        </div>
        <p className="text-green-300 text-sm font-mono">{description}</p>
      </div>
    </div>
  );
}