import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette2, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1">
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Unique Art
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Explore our curated collection of digital, framed, and print artwork from talented artists worldwide.
          </p>
          <button
            onClick={() => navigate('/store')}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Browse Gallery <ArrowRight />
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Art',
                description: 'Contemporary digital masterpieces',
                image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
              },
              {
                title: 'Framed Art',
                description: 'Elegant framed paintings and prints',
                image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80',
              },
              {
                title: 'Animations',
                description: 'Moving art that captivates',
                image: 'https://images.unsplash.com/photo-1633287387306-f08b4b3671c6?auto=format&fit=crop&q=80',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => navigate('/store')}
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};