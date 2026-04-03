import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

function Hero({ groom, bride, guestName, tagline }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Cover / Envelope */}
      <AnimatePresence>
        {!isOpen && (
          <motion.section
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1510] to-[#2d2418]"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3, ease: 'easeOut' }}
            />
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Cover Content */}
            <motion.div
              className="relative z-10 mx-4 w-full max-w-lg text-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {/* Ornament Top */}
              <motion.div
                className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                variants={scaleIn}
                transition={{ duration: 1 }}
              />

              <motion.p
                className="font-serif text-sm uppercase tracking-[0.3em] text-gold-300/80"
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                The Wedding Of
              </motion.p>

              <motion.h1
                className="mt-6 font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl"
                variants={fadeUp}
                transition={{ duration: 1 }}
              >
                {groom}
                <span className="mx-3 text-gold-500">&</span>
                {bride}
              </motion.h1>

              <motion.p
                className="mt-6 text-sm tracking-[0.2em] text-white/60"
                variants={fadeUp}
                transition={{ duration: 0.8 }}
              >
                12 . 12 . 2026
              </motion.p>

              {/* Ornament */}
              <motion.div
                className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                variants={scaleIn}
                transition={{ duration: 1 }}
              />

              {/* Guest Name */}
              <motion.div
                className="mt-10 rounded-2xl border border-gold-500/20 bg-white/5 px-8 py-6 backdrop-blur-md"
                variants={fadeUp}
                transition={{ duration: 0.9 }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gold-300/70">
                  Kepada Yth.
                </p>
                <p className="mt-2 font-serif text-2xl text-white">
                  {guestName}
                </p>
              </motion.div>

              {/* Open Button */}
              <motion.button
                onClick={() => setIsOpen(true)}
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold-500/50 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 px-10 py-4 font-medium tracking-[0.15em] text-black shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40"
                variants={fadeUp}
                transition={{ duration: 0.9 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 6 9-6" />
                </svg>
                Buka Undangan
              </motion.button>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:px-12">
        {/* Background with Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#151210] to-[#0b0b0b]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Decorative Light Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gold-700/5 blur-[80px]" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-4xl text-center"
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
        >
          {/* Top Ornament */}
          <motion.div
            className="mx-auto mb-6 flex items-center justify-center gap-4"
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/50 md:w-24" />
            <svg className="h-6 w-6 text-gold-500/70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/50 md:w-24" />
          </motion.div>

          <motion.p
            className="font-serif text-base tracking-[0.25em] text-gold-300/80 md:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            {tagline}
          </motion.p>

          <motion.h1
            className="mt-8 font-serif text-5xl leading-[1.1] text-white md:text-7xl lg:text-8xl"
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            {groom.toUpperCase()}
            <span className="mx-2 inline-block text-gold-500 md:mx-4">&</span>
            {bride.toUpperCase()}
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            variants={fadeUp}
            transition={{ duration: 1 }}
          >
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.a
            href="#event"
            className="mt-12 inline-flex flex-col items-center gap-2 text-gold-300/70 transition-colors hover:text-gold-300"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll Down</span>
            <motion.svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
