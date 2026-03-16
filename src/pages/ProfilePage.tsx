import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Package, Heart, CreditCard, LogOut, ChevronRight, Bell, Shield } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const user = {
    name: 'Kailash Sahu',
    email: 'mr.kailashsahu08@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200',
    memberSince: 'March 2024',
    tier: 'Gold Alchemist'
  };

  const menuItems = [
    { icon: Package, label: 'My Orders', description: 'Track, return or buy again' },
    { icon: Heart, label: 'Wishlist', description: 'Your favorite liquid gold batches' },
    { icon: CreditCard, label: 'Payments', description: 'Manage your payment methods' },
    { icon: Bell, label: 'Notifications', description: 'Stay updated on new drops' },
    { icon: Shield, label: 'Privacy & Security', description: 'Manage your account security' },
    { icon: Settings, label: 'Settings', description: 'App preferences and more' },
  ];

  const handleAction = (action: string) => {
    console.log(`Action triggered: ${action}`);
    // In a real app, this would navigate or open a modal
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-4xl mx-auto px-6 py-12 md:py-20"
    >
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16 p-8 bg-surface-container rounded-[2rem] border border-outline-variant/10">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <button 
            onClick={() => handleAction('settings')}
            className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center md:text-left flex-grow">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h2 className="font-headline text-3xl font-bold">{user.name}</h2>
            <span className="inline-block bg-primary-fixed text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {user.tier}
            </span>
          </div>
          <p className="text-on-surface-variant mb-4">{user.email}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <div className="flex flex-col">
              <span className="text-on-surface-variant/60 uppercase text-[10px] font-bold tracking-widest">Member Since</span>
              <span className="font-medium">{user.memberSince}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-on-surface-variant/60 uppercase text-[10px] font-bold tracking-widest">Total Orders</span>
              <span className="font-medium">12</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => handleAction('edit_profile')}
          className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full font-bold text-sm hover:bg-outline-variant/20 transition-colors active:scale-95"
        >
          Edit Profile
        </button>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {menuItems.map((item, index) => (
          <button 
            key={index}
            onClick={() => handleAction(item.label)}
            className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/5 hover:bg-surface-container-high hover:border-primary/20 transition-all group text-left active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-on-surface">{item.label}</h3>
              <p className="text-sm text-on-surface-variant/70">{item.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-on-surface-variant/30 group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <button 
        onClick={() => handleAction('logout')}
        className="w-full flex items-center justify-center gap-3 p-6 text-error font-bold border-2 border-error/10 rounded-2xl hover:bg-error/5 transition-colors active:scale-[0.98]"
      >
        <LogOut className="w-5 h-5" />
        Logout from Alchemy
      </button>
    </motion.div>
  );
};
