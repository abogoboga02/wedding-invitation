import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Gallery({ gallery }) {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-[#0f0d0a] to-[#0b0b0b]" />
      
      {/* Decorative Elements */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div
            className="mx-auto mb-4 flex items-center justify-center gap-3"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px w-12 bg-gold-500/50" />
            <svg className="h-5 w-5 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm16 12V6H4v11l4-4 3 3 5-5 4 4v2z"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
            </svg>
            <div className="h-px w-12 bg-gold-500/50" />
          </motion.div>

          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-gold-300/70"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Our Moments
          </motion.p>

          <motion.h2
            className="mt-4 font-serif text-4xl text-white md:text-5xl"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            Galeri Foto
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-lg text-white/60"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            Momen-momen indah perjalanan cinta kami
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {gallery.map((image, index) => (
            <motion.div
              key={image}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:aspect-square"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Image */}
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <motion.div
                  className="rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full border border-gold-500/30 bg-gold-500/10 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Ornament */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/30" />
          <svg className="h-4 w-4 text-gold-500/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/30" />
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
