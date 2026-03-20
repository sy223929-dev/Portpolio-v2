import { Link } from "react-router-dom";
import {
  Building2, Target, TrendingUp, ArrowRight, CheckCircle2,
  BookOpen, Award, MapPin, Phone, Mail, Linkedin, Calendar,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { personal, summary } from "../lib/data";

export default function AboutPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionHeader badge="About Me" title="My Professional Story" subtitle="From NBFC operations to MIS mastery — a journey driven by data and dedication." />

        {/* Profile + Summary */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <FadeIn className="lg:col-span-2">
            <div className="bg-surface-1 border border-b1 rounded-2xl p-6 text-center">
              <div className="size-32 rounded-2xl bg-gradient-to-br from-cyan/20 via-violet/10 to-emerald/10 mx-auto flex items-center justify-center mb-4">
                <span className="text-5xl font-bold gradient-text">SY</span>
              </div>
              <h3 className="font-bold text-xl text-t1">{personal.name}</h3>
              <p className="text-cyan text-sm mb-4">MIS Executive & Supply Chain Specialist</p>
              <div className="space-y-2 text-left">
                {[
                  { Icon: MapPin, text: personal.location },
                  { Icon: Phone, text: personal.phone },
                  { Icon: Mail, text: personal.email },
                  { Icon: Calendar, text: `DOB: ${personal.dob}` },
                  { Icon: Linkedin, text: "LinkedIn Profile" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-t3 text-sm">
                    <Icon className="size-4 text-cyan shrink-0" />{text}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-b1 text-left">
                <p className="text-t3 text-xs"><strong className="text-t2">Languages:</strong> {personal.languages}</p>
                <p className="text-t3 text-xs mt-1"><strong className="text-t2">Nationality:</strong> {personal.nationality}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-3 space-y-6">
            <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-t1 mb-3 flex items-center gap-2">
                <BookOpen className="size-5 text-cyan" /> Professional Summary
              </h3>
              <p className="text-t2 leading-relaxed">{summary}</p>
            </div>

            <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
              <h3 className="font-semibold text-lg text-t1 mb-3 flex items-center gap-2">
                <Building2 className="size-5 text-emerald" /> NBFC & Finance Operations Expertise
              </h3>
              <p className="text-t2 leading-relaxed mb-4">
                My career has been built in the NBFC and financial services sector, working with leading institutions like Prayas Financial Services and CreditAccess Grameen. This experience provides deep understanding of:
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  "Customer data management & MIS reporting",
                  "Loan lifecycle documentation & processing",
                  "Financial record keeping & compliance",
                  "Branch operations & office coordination",
                  "Billing operations & Tally Prime accounting",
                  "Performance tracking & management reports",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-t2 text-sm">
                    <CheckCircle2 className="size-4 text-emerald shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Transition */}
        <FadeIn>
          <div className="bg-surface-1 border border-cyan/20 rounded-2xl p-6 md:p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                <Target className="size-6 text-cyan" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-t1 mb-3">My Transition: NBFC Operations → MIS & Supply Chain</h3>
                <p className="text-t2 leading-relaxed mb-5">
                  While my experience is rooted in NBFC and financial services operations, the skills I've developed are directly transferable to MIS Reporting and Supply Chain Management roles. Data management, process optimization, inventory tracking, documentation flow, and reporting automation are the core competencies I've honed — and they're exactly what modern supply chain and MIS roles demand.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { Icon: TrendingUp, title: "Data-Driven Decisions", desc: "Built tracking systems and generated reports for management review" },
                    { Icon: Award, title: "Proven Results", desc: "Multiple Highest Loan Distribution Awards through operational excellence" },
                    { Icon: Building2, title: "Cross-Team Coordination", desc: "End-to-end office coordination across branches and departments" },
                  ].map(({ Icon, title, desc }, i) => (
                    <div key={i} className="bg-surface-2/60 rounded-xl p-4">
                      <Icon className="size-5 text-cyan mb-2" />
                      <h4 className="text-t1 text-sm font-semibold mb-1">{title}</h4>
                      <p className="text-t3 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Values */}
        <FadeIn>
          <h3 className="font-bold text-2xl text-t1 text-center mb-8">What Drives Me</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { emoji: "📊", title: "Accuracy First", desc: "100% accuracy in data entry and financial documentation across all roles." },
            { emoji: "⚡", title: "Efficiency", desc: "Streamlining data management processes and developing tracking systems." },
            { emoji: "📈", title: "Continuous Growth", desc: "From Excel to Power BI to Python — constantly upgrading my toolkit." },
            { emoji: "🤝", title: "Collaboration", desc: "Coordinating with branch offices for timely data submission and reporting." },
          ].map((v, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6 text-center card-lift h-full">
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h4 className="font-semibold text-t1 mb-2">{v.title}</h4>
                <p className="text-t3 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <Link to="/experience" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-cyan text-surface-0 font-semibold rounded-xl hover:bg-cyan/85 transition-colors glow-cyan">
              View My Experience <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
