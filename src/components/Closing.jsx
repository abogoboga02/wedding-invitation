import { motion } from 'framer-motion';

function Closing({ groom, bride }) {
  return (
    <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28">
      <motion.div
        className="mx-auto max-w-4xl rounded-[2rem] border border-gold-500/30 bg-gold-500/10 p-10 text-center shadow-premium backdrop-blur-sm"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-gold-100">Thank You</p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,1.45rem+2.3vw,3.8rem)] text-white">
          Kehadiran Anda Sangat Berarti
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan
          memberikan doa restu untuk perjalanan baru kami.
        </p>

        <p className="mt-8 font-serif text-3xl text-gold-300">
          {groom} & {bride}
        </p>

        <motion.a
          href="https://wa.me/6200000000000"
          className="mt-8 inline-flex rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold tracking-[0.12em] text-black transition hover:bg-gold-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          RSVP via WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Closing;
