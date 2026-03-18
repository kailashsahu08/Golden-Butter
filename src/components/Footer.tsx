import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container py-20 px-6 border-t border-outline-variant/10 mb-20 md:mb-0">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="village-gold-title text-2xl font-black mb-2">Village Gold</h2>
          <p className="text-on-surface-variant text-sm">Crafting liquid gold from the heart of Indian villages.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Home</Link>
          <Link to="/catalog" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Catalog</Link>
          <Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors text-sm">About Us</Link>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Shipping & Returns</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Contact</a>
        </div>
        <p className="text-on-surface-variant/50 text-xs">© 2026 Village Gold. All rights reserved.</p>
      </div>
    </footer>
  );
};
