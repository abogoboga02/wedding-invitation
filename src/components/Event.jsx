import { motion } from 'framer-motion';

const eventItems = [
  { key: 'akad', title: 'Akad', icon: '🕌' },
  { key: 'resepsi', title: 'Resepsi', icon: '🥂' }
];

function Event({ event }) {
  return (
    <section id="event" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-28">
      <motion.h2
        className="text-center font-serif text-[clamp(1.8rem,1.4rem+1.6vw,2.9rem)] text-gold-300"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Wedding Event
      </motion.h2>

      <motion.div
        className="mt-10 grid gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {eventItems.map(({ key, title, icon }) => {
          const info = event[key];
          return (
            <motion.article
              key={key}
              className="rounded-xl border border-gold-500/30 bg-white/5 p-8 shadow-premium backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-3xl">{icon}</p>
              <h3 className="mt-4 font-serif text-4xl text-gold-100">{title}</h3>
              <div className="mt-6 space-y-2 text-white/90">
                <p>{info.date}</p>
                <p>{info.time}</p>
                <p>{info.location}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Event;
