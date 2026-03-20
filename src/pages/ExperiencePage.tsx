import { Link } from "react-router-dom";

import {
  ChevronRight, MapPin, Calendar, Building2, Award, ArrowRight,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { experiences } from "../lib/data";

export default function ExperiencePage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Career Timeline"
          title="Professional Experience"
          subtitle="A detailed journey through my career in MIS reporting, data management, and NBFC operations."
        />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-violet to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.12}>
                <div className="relative pl-14 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-[13px] md:left-[25px] top-7 size-4 rounded-full bg-cyan border-[3px] border-surface-0 timeline-dot z-10" />

                  <div className="bg-surface-1 border border-b1 rounded-2xl p-6 md:p-8 card-lift">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3 className="font-bold text-xl text-t1">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-cyan text-sm">
                            <Building2 className="size-4" />{exp.company}
                          </span>
                          <span className="flex items-center gap-1 text-t3 text-sm">
                            <MapPin className="size-3" />{exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-t3 text-sm font-mono whitespace-nowrap">
                        <Calendar className="size-4" />{exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <div className="space-y-3">
                      {exp.bullets.map((bullet, j) => {
                        const isAward = bullet.toLowerCase().includes("award") || bullet.toLowerCase().includes("achieved");
                        return (
                          <div
                            key={j}
                            className={`flex items-start gap-3 text-sm leading-relaxed ${
                              isAward
                                ? "bg-amber/5 border border-amber/20 rounded-xl p-3 text-amber"
                                : "text-t2"
                            }`}
                          >
                            {isAward ? (
                              <Award className="size-4 shrink-0 mt-0.5" />
                            ) : (
                              <ChevronRight className="size-4 text-cyan shrink-0 mt-0.5" />
                            )}
                            {bullet}
                          </div>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="mt-5 pt-4 border-t border-b1 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-lg bg-cyan/8 text-cyan border border-cyan/15">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="mt-16 text-center">
            <Link to="/skills" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-cyan text-surface-0 font-semibold rounded-xl hover:bg-cyan/85 transition-colors glow-cyan">
              View Skills <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
