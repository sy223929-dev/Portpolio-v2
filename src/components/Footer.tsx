import { Link } from "react-router-dom";
import { Database, Mail, Linkedin, MapPin, Phone, ArrowUp } from "lucide-react";
import { personal } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-b1 bg-surface-1/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="size-8 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <Database className="size-4 text-cyan" />
              </div>
              <span className="font-bold text-t1">Surendra<span className="text-cyan">.</span>MIS</span>
            </div>
            <p className="text-t3 text-sm leading-relaxed max-w-xs">
              MIS Executive & Supply Chain Operations professional transforming data into actionable business insights.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-t1 mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {["About","Experience","Skills","Projects","Dashboard","Contact"].map(l => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-t3 text-sm hover:text-cyan transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-t1 mb-4 text-sm">Contact</h4>
            <div className="space-y-2.5">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-t3 text-sm hover:text-cyan transition-colors">
                <Mail className="size-3.5 shrink-0" />{personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-2 text-t3 text-sm hover:text-cyan transition-colors">
                <Phone className="size-3.5 shrink-0" />{personal.phone}
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-t3 text-sm hover:text-cyan transition-colors">
                <Linkedin className="size-3.5 shrink-0" />LinkedIn Profile
              </a>
              <span className="flex items-center gap-2 text-t3 text-sm">
                <MapPin className="size-3.5 shrink-0" />{personal.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-b1 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-t3 text-xs">© {new Date().getFullYear()} {personal.name} — Built with precision & data.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1 text-t3 text-xs hover:text-cyan transition-colors">
            <ArrowUp className="size-3" />Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
