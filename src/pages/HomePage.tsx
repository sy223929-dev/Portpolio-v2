import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronRight, FileSpreadsheet, Database, BarChart3,
  Truck, Award, Mail, LayoutDashboard, Shield,
  Star, TrendingUp, Zap,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  personal, summary, experiences, skillCategories,
  certifications, achievements, education,
} from "../lib/data";

export default function HomePage() {
  return (
    <div className="grid-bg min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[100dvh] flex items-center pt-16">
        {/* Ambient glow */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="size-2 rounded-full bg-emerald animate-pulse" />
                <span className="text-emerald text-sm font-mono">Open for MIS & Supply Chain Roles</span>
              </div>

              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-3">
                <span className="text-t1">I'm </span>
                <span className="gradient-text glow-text">{personal.name}</span>
              </h1>
              <p className="text-t2 text-xl sm:text-2xl font-medium mb-6">
                MIS Executive · Data Management · Supply Chain Operations
              </p>
              <p className="text-t3 text-base leading-relaxed max-w-xl mb-8">
                {summary}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan text-surface-0 font-semibold rounded-xl hover:bg-cyan/85 transition-colors glow-cyan">
                  Let's Connect <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 border border-b1 text-t2 rounded-xl hover:border-cyan/40 hover:text-cyan transition-colors">
                  <LayoutDashboard className="size-4" /> View Dashboard
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-b1">
                {[
                  { v: 3, s: "+", l: "Years Exp." },
                  { v: 850, s: "+", l: "MIS Reports" },
                  { v: 100, s: "%", l: "Accuracy" },
                  { v: 3, s: "", l: "Awards Won" },
                ].map((st, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-bold text-cyan font-mono">
                      <AnimatedCounter end={st.v} suffix={st.s} />
                    </div>
                    <div className="text-t3 text-xs mt-1">{st.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — 2 cols: floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2 hidden lg:flex flex-col items-center gap-5 relative"
            >
              {/* Profile avatar area */}
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan/20 via-violet/10 to-emerald/10 blur-2xl" />
                <div className="relative w-full h-full rounded-3xl bg-surface-2 border border-b1 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text">SY</div>
                    <div className="text-t3 text-xs font-mono mt-1">MIS &amp; DATA</div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="float-y absolute -top-2 -right-4 bg-surface-2/90 backdrop-blur border border-b1 rounded-xl p-3 flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-emerald/10 flex items-center justify-center">
                  <TrendingUp className="size-4 text-emerald" />
                </div>
                <div>
                  <div className="text-[10px] text-t3">Reports/Month</div>
                  <div className="text-sm font-bold text-t1">70+</div>
                </div>
              </div>

              <div className="float-y2 absolute bottom-8 -left-8 bg-surface-2/90 backdrop-blur border border-b1 rounded-xl p-3 flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-amber/10 flex items-center justify-center">
                  <Star className="size-4 text-amber" />
                </div>
                <div>
                  <div className="text-[10px] text-t3">Zone Level</div>
                  <div className="text-sm font-bold text-t1">Award Winner</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CORE EXPERTISE ═══════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-cyan/10 text-cyan border border-cyan/20 mb-4">Core Expertise</span>
              <h2 className="font-bold text-3xl md:text-4xl text-t1">What I Bring to the Table</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: FileSpreadsheet, title: "MIS Reporting", desc: "Daily/weekly/monthly reports, pivot tables, VLOOKUP, dashboards", hex: "#06b6d4" },
              { Icon: Database, title: "Data Management", desc: "Customer databases, record keeping, 100% accuracy in documentation", hex: "#8b5cf6" },
              { Icon: BarChart3, title: "Business Intelligence", desc: "Power BI dashboards, Python analysis, MySQL queries", hex: "#10b981" },
              { Icon: Truck, title: "Supply Chain Ops", desc: "Inventory control, stock management, warehouse operations, procurement", hex: "#f59e0b" },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-6 card-lift h-full">
                  <div className="size-12 rounded-xl flex items-center justify-center mb-4" style={{ background: c.hex + "18" }}>
                    <c.Icon className="size-6" style={{ color: c.hex }} />
                  </div>
                  <h3 className="font-semibold text-t1 mb-2">{c.title}</h3>
                  <p className="text-t3 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div className="text-center mt-8">
            <Link to="/skills" className="inline-flex items-center gap-1.5 text-cyan text-sm font-medium hover:underline">
              View All Skills <ChevronRight className="size-4" />
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ═══════ EXPERIENCE PREVIEW ═══════ */}
      <section className="py-20 bg-surface-1/40">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-emerald/10 text-emerald border border-emerald/20 mb-4">Career Journey</span>
              <h2 className="font-bold text-3xl md:text-4xl text-t1">Professional Experience</h2>
            </div>
          </FadeIn>

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.12}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-6 card-lift">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-t1">{exp.role}</h3>
                      <p className="text-cyan text-sm">{exp.company}</p>
                    </div>
                    <span className="text-t3 text-sm font-mono whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.slice(0, 2).map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-t2 text-sm">
                        <ChevronRight className="size-4 text-cyan shrink-0 mt-0.5" />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div className="text-center mt-8">
            <Link to="/experience" className="inline-flex items-center gap-1.5 text-cyan text-sm font-medium hover:underline">
              View Full Experience <ChevronRight className="size-4" />
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ═══════ SKILLS SNAPSHOT ═══════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-violet/10 text-violet border border-violet/20 mb-4">Technical Skills</span>
              <h2 className="font-bold text-3xl md:text-4xl text-t1">Skills & Proficiency</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-6 card-lift h-full">
                  <h3 className="font-semibold text-t1 mb-4 flex items-center gap-2">
                    <span className="size-2 rounded-full" style={{ background: cat.color }} />
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <span key={j} className="px-2.5 py-1 text-xs rounded-lg bg-surface-2 text-t2 border border-b1">{item}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div className="text-center mt-8">
            <Link to="/skills" className="inline-flex items-center gap-1.5 text-cyan text-sm font-medium hover:underline">
              View Detailed Skills <ChevronRight className="size-4" />
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ═══════ CERTIFICATIONS PREVIEW ═══════ */}
      <section className="py-20 bg-surface-1/40">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-amber/10 text-amber border border-amber/20 mb-4">Credentials</span>
              <h2 className="font-bold text-3xl md:text-4xl text-t1">Certifications & Training</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.slice(0, 4).map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-5 card-lift">
                  <div className="size-10 rounded-xl flex items-center justify-center mb-3" style={{ background: c.color + "18" }}>
                    <Shield className="size-5" style={{ color: c.color }} />
                  </div>
                  <h4 className="font-semibold text-t1 text-sm mb-1 leading-snug">{c.name}</h4>
                  {c.issuer && <p className="text-t3 text-xs">{c.issuer}</p>}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div className="text-center mt-8">
            <Link to="/certifications" className="inline-flex items-center gap-1.5 text-cyan text-sm font-medium hover:underline">
              View All Certifications <ChevronRight className="size-4" />
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ═══════ ACHIEVEMENTS ═══════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-amber/10 text-amber border border-amber/20 mb-4">Recognition</span>
              <h2 className="font-bold text-3xl md:text-4xl text-t1">Key Achievements</h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {achievements.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-surface-1 border border-b1 rounded-2xl p-5 card-lift">
                  <div className="size-10 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                    <Award className="size-5 text-amber" />
                  </div>
                  <p className="text-t2 text-sm leading-relaxed pt-1.5">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div className="text-center mt-8">
            <Link to="/achievements" className="inline-flex items-center gap-1.5 text-cyan text-sm font-medium hover:underline">
              View Achievements <ChevronRight className="size-4" />
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ═══════ EDUCATION PREVIEW ═══════ */}
      <section className="py-20 bg-surface-1/40">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-violet/10 text-violet border border-violet/20 mb-4">Education</span>
              <h2 className="font-bold text-3xl md:text-4xl text-t1">Academic Background</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {education.map((ed, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-5 card-lift text-center">
                  <div className="size-10 rounded-xl bg-violet/10 flex items-center justify-center mx-auto mb-3">
                    <Zap className="size-5 text-violet" />
                  </div>
                  <h4 className="font-semibold text-t1 text-sm mb-1">{ed.degree}</h4>
                  <p className="text-cyan text-xs mb-1">{ed.institution}</p>
                  <p className="text-t3 text-xs">{ed.year} · {ed.percentage}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn><div className="text-center mt-8">
            <Link to="/education" className="inline-flex items-center gap-1.5 text-cyan text-sm font-medium hover:underline">
              View Education <ChevronRight className="size-4" />
            </Link>
          </div></FadeIn>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <FadeIn>
            <div className="relative bg-surface-1 border border-b1 rounded-3xl p-8 md:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 pointer-events-none" />
              <div className="relative">
                <h2 className="font-bold text-3xl md:text-4xl text-t1 mb-4">
                  Ready to Discuss <span className="gradient-text">MIS & Supply Chain</span> Needs?
                </h2>
                <p className="text-t2 max-w-xl mx-auto mb-8">
                  I'm actively seeking MIS Executive, MIS Reporting, and Supply Chain Operations roles. Let's connect and explore how I can add value to your team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-cyan text-surface-0 font-semibold rounded-xl hover:bg-cyan/85 transition-colors glow-cyan">
                    <Mail className="size-4" /> Get in Touch <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/dashboard" className="inline-flex items-center gap-2 px-8 py-3.5 border border-b1 text-t2 rounded-xl hover:border-cyan/40 hover:text-cyan transition-colors">
                    <LayoutDashboard className="size-4" /> View Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
