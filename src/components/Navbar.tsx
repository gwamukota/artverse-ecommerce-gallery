import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Palette, Menu, X, Home, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC<{ onCartClick: () => void }> = ({ onCartClick }) => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="flex items-center gap-2">
              <Palette 
                size={32} 
                className="text-red-600 transform hover:scale-110 transition-transform"
                style={{
                  filter: 'drop-shadow(0 0 2px rgba(0, 128, 0, 0.5))'
                }}
              />
              <h1 className="text-2xl font-bold hidden sm:block bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
                ArtVerse Gallery
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                location.pathname === '/'
                  ? 'bg-gradient-to-r from-black via-red-600 to-green-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => navigate('/store')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                location.pathname === '/store'
                  ? 'bg-gradient-to-r from-black via-red-600 to-green-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              <Store size={20} />
              <span>Store</span>
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart size={24} />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-black via-red-600 to-green-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <ShoppingCart size={24} />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-black via-red-600 to-green-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
                location.pathname === '/'
                  ? 'bg-gradient-to-r from-black via-red-600 to-green-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              <Home size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => {
                navigate('/store');
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg ${
                location.pathname === '/store'
                  ? 'bg-gradient-to-r from-black via-red-600 to-green-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              <Store size={20} />
              <span>Store</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};