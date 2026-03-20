import { useState } from "react";
import { motion } from "framer-motion";

import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import {
  FileSpreadsheet, Database, Target, Trophy, TrendingUp, BarChart3,
  Activity, Layers,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionHeader from "../components/SectionHeader";
import {
  dashboardKPIs, monthlyReports, reportBreakdown,
  operationalMetrics, supplyChainFlow,
} from "../lib/data";

const kpiIcons: Record<string, typeof FileSpreadsheet> = {
  FileSpreadsheet, Database, Target, Trophy,
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface-2 border border-b1 rounded-xl p-3 shadow-xl text-sm">
      <p className="text-t1 font-semibold mb-1">{label}</p>
      {payload.map((e: any, i: number) => (
        <p key={i} style={{ color: e.color }} className="text-xs">
          {e.name}: <strong>{e.value}</strong>
        </p>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  const [tab, setTab] = useState<"reports" | "operations" | "supply">("reports");

  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Interactive Dashboard"
          title="Data Visualization Showcase"
          subtitle="Sample MIS reporting, operational metrics, and supply chain dashboards demonstrating my analytical capabilities."
        />

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {dashboardKPIs.map((kpi, i) => {
            const Icon = kpiIcons[kpi.icon] || FileSpreadsheet;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-surface-1 border border-b1 rounded-2xl p-5 card-lift">
                  <div className="flex items-center justify-between mb-3">
                    <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: kpi.color + "18" }}>
                      <Icon className="size-5" style={{ color: kpi.color }} />
                    </div>
                    <span className="text-emerald text-xs font-mono font-bold flex items-center gap-1">
                      <TrendingUp className="size-3" />{kpi.delta}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-t1 font-mono">
                    <AnimatedCounter end={kpi.value} suffix={kpi.suffix} />
                  </div>
                  <div className="text-t3 text-xs mt-1">{kpi.label}</div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Tab Switcher */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setTab("reports")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                tab === "reports"
                  ? "bg-cyan/10 text-cyan border-cyan/20"
                  : "text-t3 hover:text-t2 hover:bg-surface-2/50 border-transparent"
              }`}
            >
              <BarChart3 className="size-4" />MIS Reports
            </button>
            <button
              onClick={() => setTab("operations")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                tab === "operations"
                  ? "bg-violet/10 text-violet border-violet/20"
                  : "text-t3 hover:text-t2 hover:bg-surface-2/50 border-transparent"
              }`}
            >
              <Activity className="size-4" />Operations
            </button>
            <button
              onClick={() => setTab("supply")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                tab === "supply"
                  ? "bg-emerald/10 text-emerald border-emerald/20"
                  : "text-t3 hover:text-t2 hover:bg-surface-2/50 border-transparent"
              }`}
            >
              <Layers className="size-4" />Supply Chain
            </button>
          </div>
        </FadeIn>

        {/* ═══ REPORTS TAB ═══ */}
        {tab === "reports" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <FadeIn className="lg:col-span-2">
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-1">Monthly Report Generation</h3>
                <p className="text-t3 text-xs mb-6">Daily, weekly, and monthly MIS reports generated per month</p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyReports}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-b1)" />
                      <XAxis dataKey="month" tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <YAxis tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Bar dataKey="daily" name="Daily" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="weekly" name="Weekly" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="monthly" name="Monthly" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-1">Report Type Distribution</h3>
                <p className="text-t3 text-xs mb-6">Breakdown by report category (%)</p>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={reportBreakdown} cx="50%" cy="50%" innerRadius={48} outerRadius={76} paddingAngle={3} dataKey="value">
                        {reportBreakdown.map((entry, idx) => (
                          <Cell key={idx} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-3">
                  {reportBreakdown.map((r, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full" style={{ background: r.fill }} />
                        <span className="text-t2">{r.name}</span>
                      </div>
                      <span className="text-t3 font-mono">{r.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ═══ OPERATIONS TAB ═══ */}
        {tab === "operations" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-1">Accuracy & Efficiency Trend</h3>
                <p className="text-t3 text-xs mb-6">Monthly operational accuracy and efficiency scores</p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={operationalMetrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-b1)" />
                      <XAxis dataKey="month" tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <YAxis domain={[90, 101]} tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line type="monotone" dataKey="accuracy" name="Accuracy %" stroke="#10b981" strokeWidth={2.5} dot={{ fill: "#10b981", r: 3 }} />
                      <Line type="monotone" dataKey="efficiency" name="Efficiency %" stroke="#06b6d4" strokeWidth={2.5} dot={{ fill: "#06b6d4", r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-1">Records Processed</h3>
                <p className="text-t3 text-xs mb-6">Monthly data records managed and processed</p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={operationalMetrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-b1)" />
                      <XAxis dataKey="month" tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <YAxis tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="records" name="Records" stroke="#8b5cf6" fill="#8b5cf620" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </FadeIn>

            {/* Operational KPIs */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-5">Operational Performance Metrics</h3>
                <div className="space-y-5">
                  {[
                    { label: "Data Entry Accuracy", value: "100%", bar: 100, color: "#10b981" },
                    { label: "Report Delivery On-Time", value: "98.5%", bar: 98.5, color: "#06b6d4" },
                    { label: "Documentation Completeness", value: "100%", bar: 100, color: "#8b5cf6" },
                    { label: "Customer Query Resolution", value: "96%", bar: 96, color: "#f59e0b" },
                    { label: "Process Efficiency Score", value: "94%", bar: 94, color: "#ef4444" },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-t2 text-sm">{m.label}</span>
                        <span className="text-t1 text-sm font-mono font-semibold">{m.value}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-surface-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${m.bar}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: m.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ═══ SUPPLY CHAIN TAB ═══ */}
        {tab === "supply" && (
          <div className="grid lg:grid-cols-2 gap-6">
            <FadeIn className="lg:col-span-2">
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-1">Inventory Inbound vs Outbound</h3>
                <p className="text-t3 text-xs mb-6">Weekly supply chain flow analysis</p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={supplyChainFlow}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-b1)" />
                      <XAxis dataKey="week" tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <YAxis tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Area type="monotone" dataKey="inbound" name="Inbound" stroke="#10b981" fill="#10b98120" strokeWidth={2} />
                      <Area type="monotone" dataKey="outbound" name="Outbound" stroke="#ef4444" fill="#ef444420" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-1">Stock Level Trend</h3>
                <p className="text-t3 text-xs mb-6">Weekly closing stock levels</p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={supplyChainFlow}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-b1)" />
                      <XAxis dataKey="week" tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <YAxis tick={{ fill: "var(--color-t3)", fontSize: 12 }} axisLine={{ stroke: "var(--color-b1)" }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Line type="monotone" dataKey="stock" name="Stock Level" stroke="#8b5cf6" strokeWidth={2.5} dot={{ fill: "#8b5cf6", r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-surface-1 border border-b1 rounded-2xl p-6">
                <h3 className="font-semibold text-t1 mb-5">Supply Chain KPIs</h3>
                <div className="space-y-5">
                  {[
                    { label: "Stock Accuracy", value: "98.5%", bar: 98.5, color: "#10b981" },
                    { label: "Order Processing Time", value: "1.8 days", bar: 82, color: "#06b6d4" },
                    { label: "Inventory Turnover", value: "6.2x/year", bar: 78, color: "#f59e0b" },
                    { label: "Documentation Compliance", value: "100%", bar: 100, color: "#8b5cf6" },
                    { label: "Cross-functional Coordination", value: "95%", bar: 95, color: "#ef4444" },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-t2 text-sm">{m.label}</span>
                        <span className="text-t1 text-sm font-mono font-semibold">{m.value}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-surface-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${m.bar}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: m.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </div>
  );
}
