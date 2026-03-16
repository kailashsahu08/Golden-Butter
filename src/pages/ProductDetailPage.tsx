import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Zap, ShieldCheck, Sparkles, Award, Leaf, History, ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../constants';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-24"
    >
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Image Side */}
        <div className="lg:col-span-7 relative">
          <div className="aspect-[4/5] bg-surface-variant rounded-xl overflow-hidden shadow-sm">
            <img 
              className="w-full h-full object-cover" 
              src={product.image} 
              alt={product.name}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Ratings Badge */}
          <div className="absolute bottom-8 -right-4 md:-right-8 bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_32px_rgba(27,28,25,0.06)] flex flex-col items-center">
            <span className="font-headline text-4xl text-primary font-bold">{product.rating.toFixed(1)}</span>
            <div className="flex text-primary-container mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-label text-xs uppercase tracking-[0.1rem] text-on-surface-variant">{product.reviews} Reviews</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div>
            <span className="font-label text-md uppercase tracking-[0.1rem] text-primary mb-2 block">Small Batch • Heritage Recipe</span>
            <h2 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight mb-4">{product.name}</h2>
            <p className="text-xl text-on-surface-variant font-medium">${product.price.toFixed(2)} <span className="text-sm font-normal text-outline">/ 500ml</span></p>
          </div>
          <p className="text-lg text-on-surface-variant leading-relaxed font-body">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {product.tags.map(tag => (
              <span key={tag} className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-sm text-sm font-medium">{tag}</span>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-4">
            <button 
              onClick={handleBuyNow}
              className="block w-full text-center signature-gradient text-on-primary py-5 rounded-full font-bold text-lg shadow-lg shadow-on-surface/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Buy Now
            </button>
            <button 
              onClick={handleAddToCart}
              className={`block w-full text-center border-2 ${added ? 'border-emerald-600 text-emerald-600 bg-emerald-50' : 'border-primary text-primary'} py-5 rounded-full font-bold text-lg hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section className="mb-24 bg-surface-container-low p-8 md:p-16 rounded-[2rem]">
        <div className="text-center mb-12">
          <span className="font-label text-md uppercase tracking-[0.1rem] text-on-surface-variant">The Alchemy of Health</span>
          <h3 className="font-headline text-4xl text-on-surface mt-2">Nutritional Benefits</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <Zap className="text-primary w-10 h-10 mb-4" />
            <h4 className="font-headline text-xl mb-2">Instant Energy</h4>
            <p className="text-on-surface-variant leading-relaxed">Rich in medium-chain fatty acids that provide a quick source of energy for your body and mind.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <ShieldCheck className="text-primary w-10 h-10 mb-4" />
            <h4 className="font-headline text-xl mb-2">Gut Health</h4>
            <p className="text-on-surface-variant leading-relaxed">Contains Butyric acid, which helps nourish the gut lining and supports healthy digestion.</p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <Sparkles className="text-primary w-10 h-10 mb-4" />
            <h4 className="font-headline text-xl mb-2">Vitamin Rich</h4>
            <p className="text-on-surface-variant leading-relaxed">A natural source of fat-soluble vitamins A, D, E, and K, essential for bone and brain health.</p>
          </div>
        </div>
      </section>

      {/* Provenance */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="font-headline text-3xl">The Provenance</h3>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Each jar of "The Golden Alchemy" tells a story of patience. Unlike industrial ghee, we allow the curd to set naturally over 12 hours before it is churned. The butter is then clarified over a low wood-fire flame, capturing the smoky essence and preserving the delicate nutrients.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 border-b border-outline-variant/20 pb-4">
              <Award className="text-primary" />
              <span className="font-medium text-on-surface">Lab Certified Purity</span>
            </div>
            <div className="flex items-center space-x-4 border-b border-outline-variant/20 pb-4">
              <Leaf className="text-primary" />
              <span className="font-medium text-on-surface">Zero Preservatives or Fillers</span>
            </div>
            <div className="flex items-center space-x-4">
              <History className="text-primary" />
              <span className="font-medium text-on-surface">Shelf life of 12 Months</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container rounded-xl overflow-hidden aspect-video">
          <img 
            className="w-full h-full object-cover grayscale-[0.2]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDabecpe3E78P8nA5lbjSwvyeN5ppo8RrsTT2i20UyHmqV95qKp0EmdMhyanE9IvK4d3KSzMFvDGD1dnJqBKYvO33VjSp_0C3V-P6YfVZrO1CCkR93bOaMAvvtQnjdxxOiCq-16biK8nXUIWZWwQc1WPLfntuBlcNEUIofaIeuNsvnuvdyyMf-NFy_7v10wFYtTaTAMNm2q6Ds0bXHJk_LMz2m5FJxYCD7yQD_sMqFaLAT26KN4LCMpftHN2LJ6elUIhPoLwv9EpfhF" 
            alt="Ghee texture"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="font-headline text-4xl mb-2">Customer Reflections</h3>
            <p className="text-on-surface-variant">What our community is saying about our liquid gold.</p>
          </div>
          <button className="bg-surface-container-high px-6 py-3 rounded-full font-bold text-on-surface hover:bg-surface-container-highest transition-colors">
            Write a Review
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-on-surface">{review.author}</p>
                  {review.verified && <p className="text-xs text-outline uppercase tracking-wider">Verified Purchase</p>}
                </div>
                <div className="flex text-primary text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-outline'}`} />
                  ))}
                </div>
              </div>
              <p className="italic text-on-surface-variant leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
