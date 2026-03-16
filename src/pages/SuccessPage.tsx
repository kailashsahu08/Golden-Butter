import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const SuccessPage: React.FC = () => {
  const relatedProducts = PRODUCTS.slice(3, 6);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-screen-xl mx-auto px-6 py-12 md:py-20"
    >
      {/* Success Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 signature-gradient opacity-10 blur-3xl rounded-full"></div>
            <div className="relative z-10 p-8 bg-surface-container-lowest rounded-full shadow-xl shadow-on-surface/5">
              <CheckCircle className="text-primary w-32 h-32 md:w-48 md:h-48 fill-primary/10" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="font-label text-sm uppercase tracking-[0.2rem] text-primary mb-4">Golden Gratitude</p>
          <h2 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your order is <br /><span className="italic font-normal">on its way.</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            The liquid gold has been poured, the jar sealed with care, and our caravan is preparing for departure. You will receive a notification once the alchemy reaches your doorstep.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="signature-gradient text-on-primary px-8 py-4 rounded-full font-bold hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-primary/10">
              Track My Order
            </button>
            <Link to="/" className="bg-surface-container-low px-8 py-4 rounded-full font-medium text-on-surface hover:bg-surface-container transition-colors">
              View Receipt
            </Link>
          </div>
        </div>
      </div>

      {/* Rating Section */}
      <section className="mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl"></div>
        <div className="bg-surface-container p-8 md:p-16 rounded-[2rem] relative z-10 border border-outline-variant/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-headline text-3xl md:text-4xl mb-2">Rate your experience</h3>
            <p className="font-label text-on-surface-variant mb-10 tracking-wide">SHARE YOUR FEEDBACK WITH THE CURATOR</p>
            <div className="flex justify-center gap-2 mb-10">
              {[...Array(5)].map((_, i) => (
                <button key={i} className={`${i < 4 ? 'text-primary' : 'text-on-surface-variant/20'} hover:scale-110 transition-transform`}>
                  <Star className={`w-10 h-10 ${i < 4 ? 'fill-primary' : ''}`} />
                </button>
              ))}
            </div>
            <div className="space-y-6">
              <div className="relative group">
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-2xl p-6 focus:ring-2 focus:ring-primary-fixed placeholder:text-on-surface-variant/40 text-on-surface-variant resize-none" 
                  placeholder="Write your golden review here..." 
                  rows={4}
                />
              </div>
              <button className="signature-gradient text-on-primary px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h3 className="font-headline text-4xl mb-2">Continue the Alchemy</h3>
            <p className="font-label text-on-surface-variant tracking-widest text-sm uppercase">CURATED PAIRINGS FOR YOUR PANTRY</p>
          </div>
          <Link to="/" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            View Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-highest rounded-[1.5rem] overflow-hidden relative mb-6">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={product.image} 
                  alt={product.name}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-container text-on-tertiary-container text-xs px-3 py-1.5 rounded-[0.25rem] font-bold uppercase">
                    {product.tags[0]}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline text-xl">{product.name}</h4>
                  <span className="font-body font-bold text-primary">${product.price}</span>
                </div>
                <p className="text-on-surface-variant text-sm line-clamp-2">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
