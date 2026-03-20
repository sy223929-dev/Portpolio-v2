import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-cyan/10 text-cyan border border-cyan/20 mb-5">
        {badge}
      </span>
      <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-t1 mb-3 leading-tight">{title}</h2>
      {subtitle && <p className="text-t2 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
