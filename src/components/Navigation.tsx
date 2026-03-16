import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-outline-variant/10 shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="scale-95 active:scale-90 transition-transform">
            <Search className="w-6 h-6 text-on-surface" />
          </button>
        </div>
        <Link to="/" className="font-headline text-lg italic text-on-surface tracking-tight">
          Golden Butter
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/profile" className="scale-95 active:scale-90 transition-transform">
            <User className={`w-6 h-6 ${isActive('/profile') ? 'text-primary' : 'text-on-surface'}`} />
          </Link>
          <Link to="/checkout" className="scale-95 active:scale-90 transition-transform relative">
            <ShoppingBag className={`w-6 h-6 ${isActive('/checkout') ? 'text-primary' : 'text-on-surface'}`} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* Desktop Nav Cluster */}
      <nav className="hidden md:flex justify-center gap-8 pb-3">
        <Link to="/" className={`${isActive('/') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Catalog</Link>
        <Link to="/checkout" className={`${isActive('/checkout') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Orders</Link>
        <Link to="/profile" className={`${isActive('/profile') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Profile</Link>
      </nav>
    </header>
  );
};

export const BottomNav: React.FC = () => {
  const { pathname } = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 w-full rounded-t-[1.5rem] bg-surface md:hidden z-50 shadow-[0_-8px_32px_rgba(27,28,25,0.06)]">
      <div className="flex justify-around items-center w-full px-4 py-3 pb-6">
        <Link to="/" className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive('/') ? 'bg-primary-container/30 text-primary rounded-2xl px-5 py-1.5 scale-110' : 'text-on-surface-variant/70'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/') ? "'FILL' 1" : "" }}>menu_book</span>
          <span className="font-label text-[10px] font-medium tracking-tight mt-1">Catalog</span>
        </Link>
        <Link to="/checkout" className={`flex flex-col items-center justify-center transition-all duration-300 relative ${isActive('/checkout') ? 'bg-primary-container/30 text-primary rounded-2xl px-5 py-1.5 scale-110' : 'text-on-surface-variant/70'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/checkout') ? "'FILL' 1" : "" }}>receipt_long</span>
          <span className="font-label text-[10px] font-medium tracking-tight mt-1">Orders</span>
          {totalItems > 0 && (
            <span className="absolute top-1 right-2 bg-primary text-on-primary text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="/profile" className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive('/profile') ? 'bg-primary-container/30 text-primary rounded-2xl px-5 py-1.5 scale-110' : 'text-on-surface-variant/70'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/profile') ? "'FILL' 1" : "" }}>person</span>
          <span className="font-label text-[10px] font-medium tracking-tight mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};
