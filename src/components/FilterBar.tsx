import React from 'react';
import { Palette, Frame, Printer, Globe, Film } from 'lucide-react';

interface FilterBarProps {
  selectedType: string | null;
  onTypeSelect: (type: string | null) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedType, onTypeSelect }) => {
  const filters = [
    { type: 'digital', icon: Palette, label: 'Digital' },
    { type: 'framed', icon: Frame, label: 'Framed' },
    { type: 'print', icon: Printer, label: 'Print' },
    { type: 'webdesign', icon: Globe, label: 'Web Design' },
    { type: 'animation', icon: Film, label: 'Animation' },
  ];

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {filters.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onTypeSelect(selectedType === type ? null : type)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedType === type
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Icon size={20} />
          {label}
        </button>
      ))}
    </div>
  );
};