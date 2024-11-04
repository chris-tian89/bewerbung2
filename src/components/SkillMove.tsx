import React from 'react';

interface SkillMoveProps {
  name: string;
  command: string;
}

export function SkillMove({ name, command }: SkillMoveProps) {
  return (
    <div className="bg-black/50 p-3 rounded-lg border-2 border-green-500 hover:border-red-500 transition-colors">
      <div className="flex justify-between items-center gap-4">
        <span className="font-pixel text-green-400 text-sm">{name}</span>
        <kbd className="font-mono text-red-500 text-sm bg-black/30 px-2 py-1 rounded">{command}</kbd>
      </div>
    </div>
  );
}