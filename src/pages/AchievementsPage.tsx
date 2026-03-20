import { Award, Trophy, Star, Zap } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { achievements } from "../lib/data";

const icons = [Trophy, Award, Star, Zap];
const colors = ["#f59e0b", "#06b6d4", "#8b5cf6", "#10b981"];

export default function AchievementsPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Recognition"
          title="Key Achievements"
          subtitle="Milestones and awards that reflect my commitment to operational excellence and data accuracy."
        />

        <div className="space-y-6">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            const color = colors[i % colors.length];
            return (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-6 md:p-8 card-lift">
                  <div className="flex items-start gap-5">
                    <div className="size-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: color + '18' }}>
                      <Icon className="size-7" style={{ color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-t1 text-base leading-relaxed font-medium">{a}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {i === 0 && ["Zone Level Award", "Prayas Financial Services", "Operational Excellence"].map(t => (
                          <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-amber/8 text-amber border border-amber/15">{t}</span>
                        ))}
                        {i === 1 && ["Twice Awarded", "CreditAccess Grameen", "Data Management"].map(t => (
                          <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-cyan/8 text-cyan border border-cyan/15">{t}</span>
                        ))}
                        {i === 2 && ["MIS Systems", "Operational Efficiency", "Database Management"].map(t => (
                          <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-violet/8 text-violet border border-violet/15">{t}</span>
                        ))}
                        {i === 3 && ["100% Accuracy", "All Roles", "Financial Documentation"].map(t => (
                          <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-emerald/8 text-emerald border border-emerald/15">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Summary stats */}
        <FadeIn>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Awards Won", value: "3", color: "#f59e0b" },
              { label: "Zone Level", value: "1", color: "#06b6d4" },
              { label: "Area Level", value: "2", color: "#8b5cf6" },
              { label: "Accuracy Rate", value: "100%", color: "#10b981" },
            ].map((s, i) => (
              <div key={i} className="bg-surface-1 border border-b1 rounded-2xl p-5 text-center card-lift">
                <div className="text-3xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                <div className="text-t3 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
