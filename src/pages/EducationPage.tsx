import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { education } from "../lib/data";

const colors = ["#06b6d4", "#8b5cf6", "#10b981"];

export default function EducationPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="My educational foundation that supports my career in MIS and data management."
        />

        <div className="space-y-6">
          {education.map((ed, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6 md:p-8 card-lift">
                <div className="flex items-start gap-5">
                  <div className="size-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: colors[i] + '18' }}>
                    <GraduationCap className="size-7" style={{ color: colors[i] }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-t1 mb-1">{ed.degree}</h3>
                    <p className="text-cyan text-sm mb-2">{ed.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-t3 text-sm">
                      <span className="flex items-center gap-1"><MapPin className="size-3.5" />{ed.state}</span>
                      <span className="flex items-center gap-1"><Calendar className="size-3.5" />{ed.year}</span>
                      <span className="flex items-center gap-1"><Award className="size-3.5" />Percentage: {ed.percentage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Additional info */}
        <FadeIn>
          <div className="mt-14 bg-surface-1 border border-b1 rounded-2xl p-8">
            <h3 className="font-bold text-xl text-t1 mb-4 text-center">Additional Information</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-surface-2/60 rounded-xl p-4">
                <div className="text-2xl mb-2">🗓️</div>
                <div className="text-t3 text-xs">Date of Birth</div>
                <div className="text-t1 text-sm font-semibold">04 March 2002</div>
              </div>
              <div className="bg-surface-2/60 rounded-xl p-4">
                <div className="text-2xl mb-2">🗣️</div>
                <div className="text-t3 text-xs">Languages</div>
                <div className="text-t1 text-sm font-semibold">Hindi (Native), English</div>
              </div>
              <div className="bg-surface-2/60 rounded-xl p-4">
                <div className="text-2xl mb-2">🇮🇳</div>
                <div className="text-t3 text-xs">Nationality</div>
                <div className="text-t1 text-sm font-semibold">Indian</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
