import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Facebook, Youtube, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>
            <div className="space-y-2">
              <p>45 Nelson Mandela Drive</p>
              <p>Nairobi, Kenya 00100</p>
              <p>Phone: +254 747 986 200</p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-green-500" />
                support@artverse.co.ke
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-green-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Subscribe to receive updates about new artworks and exclusive offers.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-red-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-red-500">•</span>
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms & Conditions
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ArtVerse Gallery. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
