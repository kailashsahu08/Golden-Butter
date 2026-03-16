import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container py-20 px-6 border-t border-outline-variant/10 mb-20 md:mb-0">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="font-headline italic text-2xl text-on-surface mb-2">The Golden Alchemy</h2>
          <p className="text-on-surface-variant text-sm">Crafting heirlooms for the modern table.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Shipping & Returns</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Contact Curator</a>
        </div>
        <p className="text-on-surface-variant/50 text-xs">© 2026 Golden Butter. All rights reserved.</p>
      </div>
    </footer>
  );
};
