import { motion } from 'framer-motion';

const eventItems = [
  { 
    key: 'akad', 
    title: 'Akad Nikah', 
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  },
  { 
    key: 'resepsi', 
    title: 'Resepsi', 
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    )
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Event({ event }) {
  return (
    <section id="event" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
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
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
            <div className="h-px w-12 bg-gold-500/50" />
          </motion.div>

          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-gold-300/70"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            Save The Date
          </motion.p>

          <motion.h2
            className="mt-4 font-serif text-4xl text-white md:text-5xl"
            variants={fadeUp}
            transition={{ duration: 0.9 }}
          >
            Waktu & Tempat
          </motion.h2>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {eventItems.map(({ key, title, icon }) => {
            const info = event[key];
            return (
              <motion.article
                key={key}
                className="group relative overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold-500/40 md:p-10"
                variants={fadeUp}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl transition-all duration-500 group-hover:bg-gold-500/20" />
                
                {/* Icon */}
                <div className="relative mb-6 inline-flex rounded-2xl border border-gold-500/30 bg-gold-500/10 p-4 text-gold-500">
                  {icon}
                </div>

                {/* Title */}
                <h3 className="relative font-serif text-3xl text-white md:text-4xl">
                  {title}
                </h3>

                {/* Details */}
                <div className="relative mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-300/60">Tanggal</p>
                      <p className="mt-1 text-lg text-white/90">{info.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-300/60">Waktu</p>
                      <p className="mt-1 text-lg text-white/90">{info.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-300/60">Lokasi</p>
                      <p className="mt-1 text-lg text-white/90">{info.location}</p>
                    </div>
                  </div>
                </div>

                {/* Map Button */}
                <motion.a
                  href="#"
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-6 py-3 text-sm font-medium tracking-wide text-gold-300 transition-all duration-300 hover:border-gold-500/50 hover:bg-gold-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Lihat Lokasi
                </motion.a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Event;
