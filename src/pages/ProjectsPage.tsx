import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";

const projects = [
  {
    title: "Daily & Weekly MIS Reporting System",
    category: "MIS Reporting",
    description: "Built comprehensive MIS reporting workflows using Advanced Excel with pivot tables and VLOOKUP functions. Generated daily, weekly, and monthly reports for operational monitoring and management review, covering customer records, loan disbursement, and collection tracking.",
    tools: ["Advanced Excel", "Pivot Tables", "VLOOKUP", "XLOOKUP", "Power Query"],
    metrics: ["850+ reports generated", "100% accuracy", "Daily + Weekly + Monthly"],
    color: "#06b6d4",
  },
  {
    title: "Customer Database & Records Management",
    category: "Data Management",
    description: "Designed and maintained comprehensive customer databases across multiple branches. Ensured accuracy in customer data entry, maintained organized filing systems for quick retrieval, and developed data tracking systems for management review to support decision-making processes.",
    tools: ["Advanced Excel", "MySQL", "Tally Prime", "MS Word"],
    metrics: ["25,000+ records", "Zero-error tolerance", "Multi-branch system"],
    color: "#8b5cf6",
  },
  {
    title: "Financial Documentation & Billing Tracker",
    category: "Finance Operations",
    description: "Managed loan disbursement operations and bank deposits with 100% accuracy in financial documentation. Supported billing operations, basic accounting entries in Tally Prime, and systematic record keeping for financial transactions across all branches.",
    tools: ["Tally Prime", "Advanced Excel", "GST Compliance", "Banking Systems"],
    metrics: ["100% accuracy", "Billing + Accounting", "Audit-ready records"],
    color: "#10b981",
  },
  {
    title: "Supply Chain & Inventory Reporting Dashboard",
    category: "Supply Chain",
    description: "Developed Excel-based reporting systems for purchase and sales record flow, stock management, and inventory control. Created movement documentation templates and operational records maintenance workflows for cross-functional coordination and warehouse operations tracking.",
    tools: ["Power BI", "Advanced Excel", "Power Query", "Dashboards"],
    metrics: ["Real-time tracking", "Stock management", "Cross-functional reports"],
    color: "#f59e0b",
  },
];

export default function ProjectsPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Portfolio"
          title="Projects & Systems Built"
          subtitle="Real-world MIS reporting and data management solutions I've built to drive operational efficiency."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="bg-surface-1 border border-b1 rounded-2xl overflow-hidden card-lift h-full flex flex-col">
                {/* Color header */}
                <div className="h-2 w-full" style={{ background: p.color }} />

                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase mb-2" style={{ color: p.color }}>{p.category}</span>
                  <h3 className="font-bold text-lg text-t1 mb-3">{p.title}</h3>
                  <p className="text-t2 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {p.metrics.map((m, j) => (
                      <div key={j} className="bg-surface-2/60 rounded-xl p-3 text-center">
                        <TrendingUp className="size-4 text-emerald mx-auto mb-1" />
                        <div className="text-t1 text-xs font-semibold leading-tight">{m}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="pt-4 border-t border-b1">
                    <div className="text-t3 text-[10px] mb-2 font-mono tracking-wider uppercase">Tools Used</div>
                    <div className="flex flex-wrap gap-2">
                      {p.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-cyan/5 text-cyan border border-cyan/15 font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-16 bg-surface-1 border border-b1 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-2xl text-t1 mb-3">Want to See Data in Action?</h3>
            <p className="text-t2 max-w-lg mx-auto mb-6">
              Check out the interactive dashboard page for live sample visualizations showing my MIS reporting and data analysis capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/dashboard" className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan text-surface-0 font-semibold rounded-xl hover:bg-cyan/85 transition-colors glow-cyan">
                View Dashboard <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-b1 text-t2 rounded-xl hover:border-cyan/40 hover:text-cyan transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
