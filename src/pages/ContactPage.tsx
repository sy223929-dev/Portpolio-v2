import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Linkedin, MapPin, Phone, Send, CheckCircle2,
  Briefcase, MessageSquare,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { personal } from "../lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3500);
  };

  return (
    <div className="grid-bg min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionHeader
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="I'm actively seeking MIS Executive, MIS Reporting, and Supply Chain Operations opportunities. Let's discuss how I can add value to your team."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-5">
              {/* Availability */}
              <div className="bg-emerald/5 border border-emerald/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-2.5 rounded-full bg-emerald animate-pulse" />
                  <span className="text-emerald text-sm font-semibold">Available for Opportunities</span>
                </div>
                <p className="text-t2 text-sm leading-relaxed">
                  Currently open to MIS Executive, MIS Reporting, Data Analyst, Back Office, and Supply Chain Operations roles across India.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-3">
                {[
                  { Icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                  { Icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
                  { Icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: personal.linkedin },
                  { Icon: MapPin, label: "Location", value: personal.location, href: "#" },
                ].map(({ Icon, label, value, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-surface-1 border border-b1 rounded-xl p-4 card-lift"
                  >
                    <div className="size-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-cyan" />
                    </div>
                    <div>
                      <div className="text-t3 text-xs">{label}</div>
                      <div className="text-t1 text-sm font-medium">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Target roles */}
              <div className="bg-surface-1 border border-b1 rounded-2xl p-5">
                <h4 className="font-semibold text-t1 mb-3 flex items-center gap-2 text-sm">
                  <Briefcase className="size-4 text-cyan" /> Roles I'm Targeting
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MIS Executive", "MIS Reporting Analyst", "Data Analyst",
                    "Back Office Executive", "Supply Chain Executive", "Accounts & Billing",
                  ].map((r) => (
                    <span key={r} className="px-3 py-1.5 text-xs rounded-lg bg-cyan/5 text-cyan border border-cyan/15">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="bg-surface-1 border border-b1 rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-xl text-t1 mb-1 flex items-center gap-2">
                <MessageSquare className="size-5 text-cyan" /> Send a Message
              </h3>
              <p className="text-t3 text-sm mb-6">Fill out the form and I'll get back to you within 24 hours.</p>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="size-16 rounded-full bg-emerald/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="size-8 text-emerald" />
                  </div>
                  <h4 className="font-bold text-xl text-t1 mb-2">Message Sent!</h4>
                  <p className="text-t2 text-sm">Thank you for reaching out. I'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-t2 text-sm mb-1.5">Your Name</label>
                      <input
                        type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-b1 text-t1 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all placeholder:text-t3"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-t2 text-sm mb-1.5">Email Address</label>
                      <input
                        type="email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-b1 text-t1 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all placeholder:text-t3"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-t2 text-sm mb-1.5">Subject</label>
                    <input
                      type="text" required value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-b1 text-t1 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all placeholder:text-t3"
                      placeholder="MIS Executive Position Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-t2 text-sm mb-1.5">Message</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-b1 text-t1 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20 transition-all placeholder:text-t3 resize-none"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center gap-2 px-8 py-3.5 bg-cyan text-surface-0 font-semibold rounded-xl hover:bg-cyan/85 transition-colors glow-cyan w-full sm:w-auto justify-center"
                  >
                    <Send className="size-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
