import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, User, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';

// ── Search Modal ───────────────────────────────────────────────────────
const SearchModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const results = query.trim().length > 0
    ? PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
    )
    : [];

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4">
        <div className="bg-surface rounded-3xl shadow-2xl border border-outline-variant/20 overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-outline-variant/15">
            <Search className="w-5 h-5 text-on-surface-variant flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for ghee, ingredients, tags..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-on-surface text-sm outline-none placeholder:text-on-surface-variant/60"
            />
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          {query.trim() && (
            <div className="max-h-80 overflow-y-auto">
              {results.length > 0 ? (
                results.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full flex items-center gap-4 px-5 py-3 hover:bg-surface-container transition-colors text-left"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-low">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-label font-bold text-on-surface text-sm truncate">{product.name}</div>
                      <div className="text-on-surface-variant text-xs truncate">{product.subtitle}</div>
                    </div>
                    <div className="text-primary font-label font-bold text-sm flex-shrink-0">${product.price.toFixed(2)}</div>
                  </button>
                ))
              ) : (
                <div className="px-5 py-8 text-center">
                  <p className="text-on-surface-variant text-sm">No products found for "<strong className="text-on-surface">{query}</strong>"</p>
                  <Link
                    to="/catalog"
                    onClick={onClose}
                    className="inline-block mt-3 text-primary text-sm font-label font-bold hover:underline"
                  >
                    Browse all products →
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Default suggestions */}
          {!query.trim() && (
            <div className="px-5 py-4">
              <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['A2 Ghee', 'Buffalo Ghee', 'Herb Infused', 'Traditional', 'Turmeric'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="bg-surface-container text-on-surface-variant text-xs px-3 py-1.5 rounded-full hover:bg-primary-container/20 hover:text-primary transition-colors font-label"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// ── Navbar ─────────────────────────────────────────────────────────────
export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const { totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

      <header className="fixed top-0 left-0 right-0 z-40 glass-header border-b border-outline-variant/10 shadow-sm shadow-on-surface/5">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          {/* Left: Search */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="scale-95 active:scale-90 transition-transform hover:text-primary"
              aria-label="Open search"
            >
              <Search className="w-6 h-6 text-on-surface hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Center: Logo */}
          <Link to="/" className="village-gold-title text-xl font-black tracking-tight leading-none">
            Village Gold
          </Link>

          {/* Right: User + Cart */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center gap-8 pb-3">
          <Link to="/" className={`${isActive('/') && pathname === '/' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Home</Link>
          <Link to="/catalog" className={`${isActive('/catalog') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Catalog</Link>
          <Link to="/checkout" className={`${isActive('/checkout') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Orders</Link>
          <Link to="/profile" className={`${isActive('/profile') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>Profile</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-300 font-label text-sm uppercase tracking-[0.1rem]`}>About</Link>
        </nav>
      </header>
    </>
  );
};

// ── Bottom Navigation ──────────────────────────────────────────────────
export const BottomNav: React.FC = () => {
  const { pathname } = useLocation();
  const { totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      <nav className="fixed bottom-0 w-full rounded-t-[1.5rem] bg-surface md:hidden z-30 shadow-[0_-8px_32px_rgba(27,28,25,0.06)]">
        <div className="flex justify-around items-center w-full px-4 py-3 pb-6">
          <Link to="/" className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive('/') && pathname === '/' ? 'bg-primary-container/30 text-primary rounded-2xl px-5 py-1.5 scale-110' : 'text-on-surface-variant/70'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/') && pathname === '/' ? "'FILL' 1" : "" }}>home</span>
            <span className="font-label text-[10px] font-medium tracking-tight mt-1">Home</span>
          </Link>
          <Link to="/catalog" className={`flex flex-col items-center justify-center transition-all duration-300 ${isActive('/catalog') ? 'bg-primary-container/30 text-primary rounded-2xl px-5 py-1.5 scale-110' : 'text-on-surface-variant/70'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/catalog') ? "'FILL' 1" : "" }}>menu_book</span>
            <span className="font-label text-[10px] font-medium tracking-tight mt-1">Catalog</span>
          </Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center justify-center text-on-surface-variant/70 transition-all duration-300"
          >
            <span className="material-symbols-outlined">search</span>
            <span className="font-label text-[10px] font-medium tracking-tight mt-1">Search</span>
          </button>
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
    </>
  );
};
