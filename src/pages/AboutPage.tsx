import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Award, Users, MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const timeline = [
  {
    year: '1962',
    title: 'The Beginning',
    desc: 'Ramprasad Sharma begins making ghee for his village in Rajasthan, using the Bilona method passed down from his father.',
  },
  {
    year: '1988',
    title: 'Second Generation',
    desc: 'His son Mahesh expands the craft, supplying to neighboring villages and establishing the first quality standards.',
  },
  {
    year: '2010',
    title: 'The Revival',
    desc: 'Grandchildren Arjun and Priya return from the city, determined to bring this heritage to modern India.',
  },
  {
    year: '2018',
    title: 'Village Gold Born',
    desc: 'Village Gold launches, partnering with 15 villages and bringing artisanal ghee to cities across India.',
  },
  {
    year: '2024',
    title: 'Golden Era',
    desc: 'Serving 50,000+ families nationwide while preserving the same hand-crafted process from day one.',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Purity Above All',
    desc: 'No shortcuts. No fillers. Every jar contains 100% pure ghee — nothing added, nothing taken away.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    desc: 'Our artisans are not employees — they are family. Their joy infuses every jar of Village Gold.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'We pay fair wages above market rates, ensuring our village partners thrive and grow with us.',
  },
  {
    icon: Award,
    title: 'Uncompromising Quality',
    desc: 'Every batch is tested in-house and by third-party labs before it reaches your kitchen.',
  },
];

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Co-Founder & Head of Production',
    initials: 'AS',
    bio: 'Third-generation ghee artisan. Left a corporate career to revive his family\'s ancient craft.',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & Chief Curator',
    initials: 'PS',
    bio: 'Food scientist turned traditionalist. Ensures every product meets her grandmother\'s standard.',
  },
  {
    name: 'Ramesh Kumawat',
    role: 'Master Artisan, Rajasthan',
    initials: 'RK',
    bio: 'Been making ghee for 40 years. The keeper of the original Bilona recipe.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export const AboutPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden pb-24">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden bg-surface">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 signature-gradient opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label text-sm font-medium uppercase tracking-[0.2rem] text-primary mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="village-gold-title text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            About Village Gold
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We are not just a ghee brand. We are the keepers of a centuries-old tradition, 
            the protectors of a fading craft, and the bridge between ancient Indian villages 
            and modern Indian kitchens.
          </motion.p>
        </div>
      </section>

      {/* ─── MISSION ────────────────────────────────────────────── */}
      <section className="bg-surface-container py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              Our Mission
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-6">
              Preserving gold,<br /><span className="italic">one jar at a time</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Across India's heartland, hundreds of artisanal ghee makers carry a tradition that is thousands of years old. But with industrialisation, this craft was dying — replaced by factory-produced ghee that cuts corners at every step.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Village Gold exists to reverse that. We partner directly with village artisans, pay fair prices, and bring their uncompromising craft to homes across India — and the world.
            </p>
            <div className="flex flex-col gap-3">
              {['100% traditional Bilona process', 'Direct partnerships with artisans', 'No middlemen — more money to makers', 'Third-party lab tested every batch'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-on-surface-variant text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-surface">
              <img
                src="/about-artisan.png"
                alt="Village artisan making ghee"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-surface rounded-2xl p-5 shadow-xl border border-outline-variant/10">
              <div className="text-center">
                <div className="village-gold-title text-3xl font-black mb-1">60+</div>
                <div className="text-on-surface-variant text-xs font-label uppercase tracking-widest">Years of Tradition</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMELINE ───────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              Our Journey
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
              Six decades of <span className="italic">golden craft</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full signature-gradient shadow-lg ring-4 ring-surface z-10" />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 ${i % 2 === 0 ? 'md:pr-8 md:text-right md:w-1/2' : 'md:pl-8 md:w-1/2 md:ml-auto'}`}>
                    <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10">
                      <div className="village-gold-title text-2xl font-black mb-1">{item.year}</div>
                      <h3 className="font-headline text-lg text-on-surface mb-2">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────── */}
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
              What We Stand For
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
              Our <span className="italic">core values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full signature-gradient flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-headline text-xl text-on-surface mb-3">{v.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ──────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-label text-sm font-medium uppercase tracking-[0.15rem] text-primary mb-3 block">
              The People
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
              Meet the <span className="italic">family</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface-container rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full signature-gradient flex items-center justify-center mx-auto mb-5 text-white font-bold text-xl">
                  {member.initials}
                </div>
                <h3 className="font-headline text-xl text-on-surface mb-1">{member.name}</h3>
                <p className="text-primary font-label text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION ───────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
            <div className="w-16 h-16 rounded-2xl signature-gradient flex items-center justify-center flex-shrink-0">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-headline text-2xl text-on-surface mb-2">Rooted in India</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
                Our artisans work across 15 villages in Rajasthan, Punjab, and Gujarat. Every jar you buy supports a village family and keeps a tradition alive.
              </p>
            </div>
            <div className="md:ml-auto flex-shrink-0">
              <Link
                to="/catalog"
                className="signature-gradient text-white px-6 py-3 rounded-full font-label text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all duration-300"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
