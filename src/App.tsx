import React, { useState } from 'react';
import { Monitor, Mail, Phone, Github, Linkedin, Download, Send, Joystick } from 'lucide-react';
import { FighterCard } from './components/FighterCard';
import { SkillMove } from './components/SkillMove';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const fighters = [
    {
      name: "React Ryu",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      skill: "Frontend Master",
      description: "Mastery of React components and state management. Special move: useEffect Hadoken!"
    },
    {
      name: "TypeScript Ken",
      imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      skill: "Type Guardian",
      description: "Expert in TypeScript and static typing. Signature move: Interface Shoryuken!"
    },
    {
      name: "API Chun-Li",
      imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      skill: "Backend Warrior",
      description: "REST API and GraphQL specialist. Famous for: Lightning Fast Queries!"
    }
  ];

  const specialMoves = [
    { name: "Component Hadoken", command: "↓ ↘ → + React.useState()" },
    { name: "Type Shoryuken", command: "→ ↓ ↘ + interface{}" },
    { name: "API Lightning Kicks", command: "async/await combo" },
    { name: "Git Hurricane Kick", command: "git commit && git push" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 md:p-8">
      <div className="arcade-frame">
        <div className="arcade-screen min-h-screen relative overflow-hidden p-4">
          <div className="static-noise" />
          <div className="absolute inset-0 retro-grid opacity-20" />
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <header className="text-center mb-16 pt-8">
              <div className="inline-block p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Joystick className="w-12 h-12 text-green-400 animate-[blink_2s_ease-in-out_infinite]" />
                  <Monitor className="w-12 h-12 text-green-400 animate-[blink_2s_ease-in-out_infinite]" />
                  <Joystick className="w-12 h-12 text-green-400 animate-[blink_2s_ease-in-out_infinite]" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text font-pixel">DEVELOPER</h1>
                <p className="text-xl md:text-2xl text-red-500 font-mono animate-[blink_4s_ease-in-out_infinite]">
                  INSERT COIN TO START
                </p>
                <div className="mt-4 coin-slot w-16 h-8 mx-auto"></div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {fighters.map((fighter) => (
                <FighterCard key={fighter.name} {...fighter} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8 bg-black/80 backdrop-blur-sm p-6 rounded-xl border-4 border-green-500">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400 neon-text font-pixel">SPECIAL MOVES</h2>
                  <div className="grid gap-3">
                    {specialMoves.map((move) => (
                      <SkillMove key={move.name} {...move} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 text-green-400 hover:text-green-300 bg-black/50 p-2 rounded-lg border border-green-500">
                    <Github className="w-5 h-5" />
                    <span className="font-mono">Github</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-green-400 hover:text-green-300 bg-black/50 p-2 rounded-lg border border-green-500">
                    <Linkedin className="w-5 h-5" />
                    <span className="font-mono">LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-green-400 hover:text-green-300 bg-black/50 p-2 rounded-lg border border-green-500">
                    <Download className="w-5 h-5" />
                    <span className="font-mono">Resume</span>
                  </a>
                </div>
              </div>

              <div className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border-4 border-green-500">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500 neon-text font-pixel">PRESS START</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono mb-2">PLAYER NAME</label>
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-green-500 rounded-lg bg-black/50 font-mono focus:outline-none focus:border-green-400 text-green-300"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono mb-2">CONTACT FREQUENCY</label>
                    <input
                      type="email"
                      className="w-full p-3 border-2 border-green-500 rounded-lg bg-black/50 font-mono focus:outline-none focus:border-green-400 text-green-300"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono mb-2">SECRET MESSAGE</label>
                    <textarea
                      className="w-full p-3 border-2 border-green-500 rounded-lg bg-black/50 font-mono h-32 focus:outline-none focus:border-green-400 text-green-300"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2 animate-[blink_1s_ease-in-out_infinite]"
                  >
                    <Send className="w-5 h-5" />
                    <span className="font-pixel">FIGHT!</span>
                  </button>
                </form>
              </div>
            </div>

            <footer className="mt-16 text-center font-mono text-green-400">
              <div className="flex flex-wrap justify-center gap-6 mb-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-green-300">
                  <Mail className="w-5 h-5" />
                  <span>contact@example.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-green-300">
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
              </div>
              <p className="text-red-500 font-pixel text-sm">© 1970 - CREDITS: 1</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;