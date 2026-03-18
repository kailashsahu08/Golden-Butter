import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Star, Award, Truck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Leaf,
    title: 'Pure A2 Milk',
    desc: 'Sourced from free-roaming indigenous cows, fed only on natural grass and herbs.',
  },
  {
    icon: Shield,
    title: 'No Additives',
    desc: 'Zero preservatives, zero artificial colours — just pure, honest ghee.',
  },
  {
    icon: Award,
    title: 'Bilona Method',
    desc: 'Hand-churned butter, slow-clarified over wood fire. The ancient vedic way.',
  },
  {
    icon: Truck,
    title: 'Farm to Table',
    desc: 'Delivered fresh within 72 hours of production, straight from the village.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatar: 'PS',
    rating: 5,
    text: 'The aroma alone takes me back to my grandmother\'s kitchen. This ghee is life-changing. My dals have never tasted better!',
  },
  {
    name: 'Rajiv Menon',
    location: 'Bangalore',
    avatar: 'RM',
    rating: 5,
    text: 'I have tried many brands but Village Gold stands apart. The granular texture tells you it is real, hand-churned ghee.',
  },
  {
    name: 'Anita Patel',
    location: 'Ahmedabad',
    avatar: 'AP',
    rating: 5,
    text: 'My children love the kadha made with this ghee. Immunity-boosting and delicious — what more do you need?',
  },
];

const stats = [
  { value: '15+', label: 'Villages Partnered' },
  { value: '50K+', label: 'Happy Families' },
  { value: '100%', label: 'Natural Process' },
  { value: '3rd Gen', label: 'Artisan Makers' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.3rem' }}
            animate={{ opacity: 1, letterSpacing: '0.5rem' }}
            transition={{ duration: 1 }}
            className="text-primary-container text-xs tracking-[0.5rem] uppercase mb-4 font-label"
          >
            Proudly Presenting
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="village-gold-title text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4 drop-shadow-2xl"
          >
            Village Gold
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-surface/90 text-lg md:text-xl max-w-xl mx-auto mb-2 font-headline italic"
          >
            Pure Traditional Ghee
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-surface/70 text-sm max-w-md mx-auto mb-10 font-body"
          >
            Crafted by third-generation artisans, using the ancient Bilona method — straight from Indian villages to your kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/catalog"
              className="signature-gradient text-white px-8 py-4 rounded-full font-label font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="bg-surface/20 backdrop-blur-sm border border-surface/30 text-surface px-8 py-4 rounded-full font-label font-bold text-sm uppercase tracking-widest hover:bg-surface/30 transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-surface/50 text-xs tracking-widest uppercase font-label">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-surface/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────────── */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="village-gold-title text-3xl md:text-5xl font-black mb-2">{s.value}</div>
              <p className="text-on-surface-variant text-sm font-label tracking-widest uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── WHY VILLAGE GOLD ───────────────────────────────────── */}
      <section className="bg-surface-container py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              Why Choose Us
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
              Gold born from <span className="italic">ancient wisdom</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10"
              >
                <div className="w-12 h-12 rounded-2xl signature-gradient flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-headline text-xl text-on-surface mb-2">{f.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HERITAGE BANNER ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              Heritage Craft
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-6">
              From the heart of<br /><span className="italic">Indian villages</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Every jar of Village Gold is a testament to centuries-old wisdom. Our artisans in rural Rajasthan and Punjab carry forward a practice passed down through three generations — waking at dawn to hand-churn curd into butter, then slowly clarifying it over low wood fires.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              The result is ghee that smells like home and tastes like tradition. No short-cuts. No compromise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all duration-300"
            >
              Learn Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0VqI_66RmR57aDhLmH0JNKVOEQZf7kNmAFKkHEa-dGCup2bfKPhB6WTxHaCOmsLyut2kTx5B4ufxM2iRY-rJxf4Hf2bH9rbRWbPGB093bScQbK2x4EGy0bdqOUj6RyALXo-kLrWVMVT8JkLKS4I6zmGBuINdl49dYwtdYpLk6rqhW8WCSNEpHJg2-afZkGAQqSRYKnF6oMCnytTx_78hhfIKgmKWP7JFiaBDhobL6cJo22m_09BK5pz0mTrlJpPEQMwsQBoFGNgPl"
                alt="Traditional ghee making process"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-surface rounded-2xl p-4 shadow-xl border border-outline-variant/10">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <div>
                  <div className="font-label font-bold text-on-surface text-sm">4.9 Rating</div>
                  <div className="text-on-surface-variant text-xs">50,000+ reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS CTA ─────────────────────────────── */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              Our Collection
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">
              Liquid gold, <span className="italic">masterfully</span> clarified
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Explore our curated range of premium ghees — from classic A2 Cow to herb-infused blends, each crafted with the same dedication to purity.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link
              to="/catalog"
              className="signature-gradient text-white px-10 py-4 rounded-full font-label font-bold text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Full Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              Voices from Our Family
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
              What our <span className="italic">customers say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface-container rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full signature-gradient flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-label font-bold text-on-surface text-sm">{t.name}</div>
                    <div className="text-on-surface-variant text-xs">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="signature-gradient py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Users className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-4">
              Join the Village Gold Family
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Subscribe and save 15% on monthly refills. Never run out of your daily gold.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 bg-surface text-primary px-10 py-4 rounded-full font-label font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Your Ritual <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
