import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Closing({ groom, bride }) {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510] via-[#0f0d0a] to-[#0b0b0b]" />
      
      {/* Decorative Light */}
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[100px]" />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {/* Quote Icon */}
        <motion.div
          className="mx-auto mb-8"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <svg className="mx-auto h-12 w-12 text-gold-500/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
        </motion.div>

        {/* Verse */}
        <motion.p
          className="font-serif text-xl leading-relaxed text-white/80 md:text-2xl"
          variants={fadeUp}
          transition={{ duration: 0.9 }}
        >
          {"\"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.\""}
        </motion.p>

        <motion.p
          className="mt-4 text-sm tracking-wider text-gold-300/70"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          QS. Ar-Rum: 21
        </motion.p>

        {/* Divider */}
        <motion.div
          className="mx-auto my-12 h-px w-32 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        />

        {/* Thank You Message */}
        <motion.div
          className="rounded-3xl border border-gold-500/20 bg-gradient-to-b from-gold-500/10 to-gold-500/5 p-10 backdrop-blur-sm md:p-14"
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300/70">
            Terima Kasih
          </p>

          <h2 className="mt-6 font-serif text-3xl text-white md:text-4xl lg:text-5xl">
            Kehadiran Anda Adalah
            <br />
            <span className="text-gold-300">Kebahagiaan Kami</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">
            Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu untuk perjalanan baru kami.
          </p>

          {/* Couple Names */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold-500/40" />
            <p className="font-serif text-2xl tracking-wide text-gold-300 md:text-3xl">
              {groom} & {bride}
            </p>
            <div className="h-px w-12 bg-gold-500/40" />
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="https://wa.me/6200000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 px-8 py-4 font-medium tracking-wide text-black shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konfirmasi Kehadiran
            </motion.a>

            <motion.a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-8 py-4 font-medium tracking-wide text-gold-300 transition-all duration-300 hover:border-gold-500/50 hover:bg-gold-500/20 sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Kirim Hadiah
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 space-y-4"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold-500/30" />
            <svg className="h-5 w-5 text-gold-500/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="h-px w-16 bg-gold-500/30" />
          </div>

          <p className="text-sm text-white/40">
            Made with love
          </p>
          
          <p className="text-xs text-white/30">
            {groom} & {bride} Wedding
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Closing;
