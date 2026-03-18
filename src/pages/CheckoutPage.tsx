import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Trash2, Plus, Minus, Home, Briefcase, CreditCard, Wallet, Landmark, ArrowRight, ShieldCheck, Leaf, History, Sparkles, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  const handleConfirmPurchase = () => {
    clearCart();
    navigate('/success');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="bg-surface-container-low w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-10 h-10 text-on-surface-variant/30" />
        </div>
        <h2 className="font-headline text-3xl mb-4">Your cart is empty</h2>
        <p className="text-on-surface-variant mb-12 max-w-md mx-auto">
          It seems you haven't added any liquid gold to your collection yet. Explore our catalog to find your perfect batch.
        </p>
        <button
          onClick={() => navigate('/catalog')}
          className="signature-gradient text-on-primary px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  const shipping = 0;
  const tax = totalPrice * 0.05;
  const total = totalPrice + shipping + tax;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-12">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl text-on-surface">Review Your Order</h2>
              <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant">{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</span>
            </div>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-surface-container-lowest rounded-xl p-4 flex gap-6 items-center group transition-all duration-300">
                  <div className="w-24 h-24 bg-surface-variant rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline text-lg text-on-surface">{item.name}</h3>
                        <p className="text-sm text-on-surface-variant">{item.subtitle}</p>
                      </div>
                      <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center bg-surface-container rounded-full px-3 py-1 gap-4">
                        <button
                          onClick={() => item.quantity === 1 ? removeFromCart(item.id) : updateQuantity(item.id, -1)}
                          className="text-primary hover:scale-110 transition-transform"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-primary hover:scale-110 transition-transform"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-on-surface-variant hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline text-2xl text-on-surface">Delivery Address</h2>
              <button className="text-primary font-semibold text-sm flex items-center gap-1">
                <Plus className="w-4 h-4" /> Add New
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="relative cursor-pointer group">
                <input type="radio" name="address" className="peer sr-only" defaultChecked />
                <div className="p-6 rounded-xl border-2 border-transparent bg-surface-container-lowest peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Home className="text-primary w-5 h-5 fill-primary" />
                      <span className="font-bold">Home</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100"></div>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    42 Alchemy Estates, Golden Lane<br />
                    Udaipur, Rajasthan - 313001
                  </p>
                </div>
              </label>
              <label className="relative cursor-pointer group">
                <input type="radio" name="address" className="peer sr-only" />
                <div className="p-6 rounded-xl border-2 border-transparent bg-surface-container-lowest peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary transition-colors">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-bold">Office</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100"></div>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Artisan Hub, Level 4, Block B<br />
                    Cyber City, Gurgaon - 122002
                  </p>
                </div>
              </label>
            </div>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-on-surface mb-6">Payment Method</h2>
            <div className="space-y-3">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
                <label className="flex items-center p-5 cursor-pointer hover:bg-surface-container-low transition-colors">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary border-outline-variant focus:ring-primary" defaultChecked />
                  <div className="ml-4 flex items-center gap-3">
                    <CreditCard className="text-on-surface-variant w-5 h-5" />
                    <span className="font-medium">Credit / Debit Card</span>
                  </div>
                </label>
                <div className="px-5 pb-5 ml-9 grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary-container" placeholder="Card Number" type="text" />
                  </div>
                  <input className="bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary-container" placeholder="MM/YY" type="text" />
                  <input className="bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary-container" placeholder="CVV" type="text" />
                </div>
              </div>
              <label className="flex items-center p-5 bg-surface-container-lowest rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
                <input type="radio" name="payment" className="w-5 h-5 text-primary border-outline-variant focus:ring-primary" />
                <div className="ml-4 flex items-center gap-3">
                  <Wallet className="text-on-surface-variant w-5 h-5" />
                  <span className="font-medium">UPI (PhonePe, Google Pay)</span>
                </div>
              </label>
              <label className="flex items-center p-5 bg-surface-container-lowest rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors">
                <input type="radio" name="payment" className="w-5 h-5 text-primary border-outline-variant focus:ring-primary" />
                <div className="ml-4 flex items-center gap-3">
                  <Landmark className="text-on-surface-variant w-5 h-5" />
                  <span className="font-medium">Net Banking</span>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="bg-surface-container rounded-3xl p-8 shadow-sm">
            <h2 className="font-headline text-xl mb-8">Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Shipping</span>
                <span className="text-primary font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Taxes (GST 5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                <div>
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Total Amount</span>
                  <div className="text-3xl font-headline text-on-surface mt-1">${total.toFixed(2)}</div>
                </div>
                <div className="bg-tertiary-container/30 px-3 py-1 rounded text-xs font-semibold text-on-tertiary-container">
                  SECURE CHECKOUT
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl mb-8 border border-primary/10">
              <div className="flex gap-3 items-start">
                <Sparkles className="text-primary w-5 h-5 fill-primary" />
                <div>
                  <p className="text-sm font-semibold">Heirloom Quality Guarantee</p>
                  <p className="text-xs text-on-surface-variant mt-1">Each jar is hand-poured and verified for purity before shipping.</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleConfirmPurchase}
              className="w-full signature-gradient text-on-primary py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Confirm Purchase
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-on-surface-variant mt-6 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" />
              Payments are encrypted and secure
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2">
              <Leaf className="w-4 h-4" /> Certified Organic
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2">
              <History className="w-4 h-4" /> Traditional Bilona
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

