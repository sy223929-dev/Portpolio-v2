import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileSpreadsheet, Database, BarChart3, FileText, Calculator,
  Monitor, Wrench, Truck, Code, Globe, Presentation,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { skillCategories, skillProficiency } from "../lib/data";

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-t2 text-sm">{name}</span>
        <span className="text-t3 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

const toolGrid = [
  { name: "Advanced Excel", Icon: FileSpreadsheet, color: "#217346" },
  { name: "Power BI", Icon: BarChart3, color: "#f2c811" },
  { name: "Tally Prime", Icon: Calculator, color: "#00a4ef" },
  { name: "Python", Icon: Code, color: "#3776ab" },
  { name: "MySQL", Icon: Database, color: "#4479a1" },
  { name: "MS Word", Icon: FileText, color: "#2b579a" },
  { name: "PowerPoint", Icon: Presentation, color: "#d24726" },
  { name: "Web Dev", Icon: Globe, color: "#06b6d4" },
];

export default function SkillsPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Technical Skills"
          title="Skills & Proficiency"
          subtitle="A comprehensive breakdown of my technical toolkit across MIS, Supply Chain, and general office skills."
        />

        {/* Proficiency bars */}
        <FadeIn>
          <div className="bg-surface-1 border border-b1 rounded-2xl p-6 md:p-8 mb-10">
            <h3 className="font-bold text-lg text-t1 mb-6">Proficiency Overview</h3>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {skillProficiency.map((s, i) => (
                <SkillBar key={s.skill} name={s.skill} level={s.level} color="#06b6d4" delay={i * 0.08} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Skill categories */}
        <div className="space-y-6 mb-14">
          {skillCategories.map((cat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: cat.color + "18" }}>
                    {cat.icon === "Monitor" && <Monitor className="size-5" style={{ color: cat.color }} />}
                    {cat.icon === "Briefcase" && <Wrench className="size-5" style={{ color: cat.color }} />}
                    {cat.icon === "Truck" && <Truck className="size-5" style={{ color: cat.color }} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-t1">{cat.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, j) => (
                    <span key={j} className="px-3 py-1.5 text-sm rounded-xl bg-surface-2 text-t2 border border-b1 hover:border-cyan/30 hover:text-cyan transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tools grid */}
        <FadeIn>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-amber/10 text-amber border border-amber/20 mb-4">My Toolkit</span>
            <h3 className="font-bold text-2xl text-t1">Tools & Technologies</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {toolGrid.map((t, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-5 text-center card-lift">
                <div className="size-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: t.color + "18" }}>
                  <t.Icon className="size-6" style={{ color: t.color }} />
                </div>
                <div className="text-t1 text-sm font-medium">{t.name}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
