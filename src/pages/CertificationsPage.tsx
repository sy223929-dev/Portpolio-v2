import { motion } from "framer-motion";
import {
  Shield, Monitor, Lightbulb, Calculator, BarChart3, Warehouse, Package,
  Building2,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { certifications } from "../lib/data";

const iconMap: Record<string, typeof Shield> = {
  Shield, Monitor, Lightbulb, Calculator, BarChart3, Warehouse, Package,
};

export default function CertificationsPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Credentials"
          title="Certifications & Professional Development"
          subtitle="Continuous learning is the key to staying relevant. Here are my professional certifications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Shield;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-6 card-lift h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-14 rounded-2xl flex items-center justify-center" style={{ background: cert.color + "18" }}>
                      <Icon className="size-7" style={{ color: cert.color }} />
                    </div>
                  </div>
                  <h3 className="font-bold text-t1 mb-1 leading-snug">{cert.name}</h3>
                  {cert.issuer && (
                    <p className="text-t3 text-sm flex items-center gap-1">
                      <Building2 className="size-3.5" />{cert.issuer}
                    </p>
                  )}
                  <div className="mt-auto pt-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="h-1 rounded-full"
                      style={{ backgroundColor: cert.color }}
                    />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Learning roadmap */}
        <FadeIn>
          <div className="bg-surface-1 border border-b1 rounded-2xl p-8">
            <h3 className="font-bold text-xl text-t1 mb-8 text-center">My Learning Roadmap</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { year: "2021", items: ["CCC — NIELIT", "Insurance Operations"], color: "#06b6d4" },
                { year: "2022", items: ["O Level — NIELIT", "CCE Certificate"], color: "#8b5cf6" },
                { year: "2023", items: ["Tally Prime", "B.Com Graduation"], color: "#10b981" },
                { year: "2024", items: ["Power BI", "Warehouse Mgmt", "Inventory Mgmt"], color: "#f59e0b" },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="size-14 rounded-full mx-auto mb-3 flex items-center justify-center font-bold font-mono text-sm" style={{ background: step.color + "18", color: step.color }}>
                    {step.year}
                  </div>
                  <div className="space-y-1">
                    {step.items.map((item, j) => (
                      <div key={j} className="text-t2 text-xs">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
