import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col group">
      <Link to={`/product/${product.id}`} className="aspect-[4/5] bg-surface-variant rounded-xl overflow-hidden mb-6 relative">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
            {product.tags[0]}
          </span>
        </div>
      </Link>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-headline text-2xl text-on-surface">{product.name}</h3>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mt-1">{product.subtitle}</p>
        </div>
        <span className="font-headline text-xl text-primary">${product.price.toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < product.rating ? 'text-primary fill-primary' : 'text-outline'}`} 
          />
        ))}
        <span className="text-xs font-label text-on-surface-variant ml-2">({product.reviews} Reviews)</span>
      </div>
      <button 
        onClick={handleAddToCart}
        className={`${added ? 'bg-emerald-600' : 'signature-gradient'} text-on-primary w-full py-4 rounded-full font-label text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-on-surface/5`}
      >
        {added ? (
          <>
            <Check className="w-4 h-4" />
            Added to Cart
          </>
        ) : (
          'Add to Cart'
        )}
      </button>
    </div>
  );
};
