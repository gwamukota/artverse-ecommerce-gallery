import React from 'react';
import { ArtItem } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ArtCardProps {
  artwork: ArtItem;
}

export const ArtCard: React.FC<ArtCardProps> = ({ artwork }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {artwork.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
        <p className="text-gray-600 mb-2">by {artwork.artist}</p>
        <p className="text-sm text-gray-500 mb-4">{artwork.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${artwork.price}</span>
          <button
            onClick={() => dispatch({ type: 'ADD_ITEM', payload: artwork })}
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};