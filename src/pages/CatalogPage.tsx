import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { motion } from 'framer-motion';

export const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Ghee');
  const categories = ['All Ghee', 'A2 Cow', 'Buffalo', 'Infused', 'Traditional'];

  const filteredProducts = selectedCategory === 'All Ghee' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        p.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-6 pt-8 pb-32"
    >
      {/* Hero Section */}
      <div className="mb-12">
        <span className="font-label text-sm font-medium uppercase tracking-[0.1rem] text-primary mb-2 block">Our Collection</span>
        <h2 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight max-w-2xl">
          Liquid gold, <span className="italic">masterfully</span> clarified.
        </h2>
      </div>

      {/* Category Horizontal Scroll */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category 
                ? 'signature-gradient text-on-primary shadow-lg shadow-on-surface/5' 
                : 'bg-surface-container-low text-on-surface-variant border border-outline-variant/15 hover:bg-surface-container-high'
            } px-8 py-3 rounded-full whitespace-nowrap font-label text-sm font-bold transition-all duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>


      {/* Featured Section */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container rounded-3xl p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-headline text-4xl mb-4 text-on-surface">The Alchemy of Aging</h4>
            <p className="text-on-surface-variant max-w-md mb-8">
              Our Ghee is traditionally clarified for 12 hours, resulting in a nutty aroma and a smooth, granular texture that is unmatched.
            </p>
            <a className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all" href="#">
              Learn our process <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 md:opacity-100">
            <img 
              className="w-full h-full object-cover grayscale mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0VqI_66RmR57aDhLmH0JNKVOEQZf7kNmAFKkHEa-dGCup2bfKPhB6WTxHaCOmsLyut2kTx5B4ufxM2iRY-rJxf4Hf2bH9rbRWbPGB093bScQbK2x4EGy0bdqOUj6RyALXo-kLrWVMVT8JkLKS4I6zmGBuINdl49dYwtdYpLk6rqhW8WCSNEpHJg2-afZkGAQqSRYKnF6oMCnytTx_78hhfIKgmKWP7JFiaBDhobL6cJo22m_09BK5pz0mTrlJpPEQMwsQBoFGNgPl" 
              alt="Traditional process"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="bg-primary-container/20 rounded-3xl p-12 flex flex-col justify-between">
          <Star className="text-primary w-10 h-10 fill-primary" />
          <div>
            <h4 className="font-headline text-2xl mb-2">Subscribe & Save</h4>
            <p className="text-on-surface-variant text-sm mb-6">Never run out of your daily gold. Get 15% off on monthly refills.</p>
            <button className="bg-on-surface text-surface px-6 py-3 rounded-full font-label text-xs font-bold uppercase tracking-widest">Join Ritual</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
