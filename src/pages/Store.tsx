import React, { useState } from 'react';
import { FilterBar } from '../components/FilterBar';
import { ArtCard } from '../components/ArtCard';
import { artworks } from '../data/artworks';

export const Store: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredArtworks = selectedType
    ? artworks.filter(art => art.type === selectedType)
    : artworks;

  return (
    <div className="flex-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Art Gallery</h1>
        <FilterBar
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredArtworks.map(artwork => (
            <ArtCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};