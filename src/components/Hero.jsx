import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 }
};

function Hero({ groom, bride, guestName, tagline }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 md:px-12">
      <motion.div
        className="absolute inset-0 bg-gold-premium"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <motion.div
        className="relative w-full max-w-5xl rounded-[2.5rem] border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg md:p-14"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.18
            }
          }
        }}
      >
        <motion.p
          className="font-serif text-[clamp(1rem,1rem+0.618vw,1.6rem)] tracking-[0.18em] text-gold-100"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Dear, {guestName}
        </motion.p>

        <motion.h1
          className="mt-5 font-serif text-[clamp(2.5rem,1.8rem+4.2vw,6.85rem)] leading-[1.05] text-white"
          variants={fadeUp}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {groom.toUpperCase()} <span className="text-gold-300">&</span> {bride.toUpperCase()}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,0.86rem+0.86vw,1.618rem)] text-white/90"
          variants={fadeUp}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {tagline}
        </motion.p>

        <motion.a
          href="#event"
          className="mt-10 inline-flex rounded-full border border-gold-300 bg-gold-500/90 px-8 py-3 text-sm font-medium tracking-[0.12em] text-black transition hover:scale-105 hover:bg-gold-300"
          variants={fadeUp}
          transition={{ duration: 0.95, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Open Invitation
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
