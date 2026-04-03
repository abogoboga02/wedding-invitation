import { motion } from 'framer-motion';

function Gallery({ gallery }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-28">
      <motion.h2
        className="text-center font-serif text-[clamp(1.8rem,1.4rem+1.6vw,2.9rem)] text-gold-300"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Our Gallery
      </motion.h2>

      <motion.div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.16 }
          }
        }}
      >
        {gallery.map((image, index) => (
          <motion.div
            key={image}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-premium"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src={image}
              alt={`Wedding gallery ${index + 1}`}
              className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Gallery;
