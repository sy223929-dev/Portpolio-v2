import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, User, Briefcase, FolderKanban, Award, Wrench,
  LayoutDashboard, Mail, Menu, X, Sun, Moon, GraduationCap,
  Trophy, Database,
} from "lucide-react";

interface Props {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const links = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: User },
  { to: "/experience", label: "Experience", Icon: Briefcase },
  { to: "/skills", label: "Skills", Icon: Wrench },
  { to: "/projects", label: "Projects", Icon: FolderKanban },
  { to: "/certifications", label: "Certifications", Icon: Award },
  { to: "/achievements", label: "Achievements", Icon: Trophy },
  { to: "/education", label: "Education", Icon: GraduationCap },
  { to: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/contact", label: "Contact", Icon: Mail },
];

export default function Navbar({ theme, toggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-surface-0/75 backdrop-blur-2xl border-b border-b1 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="size-9 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <Database className="size-[18px] text-cyan" />
            </div>
            <div className="hidden sm:block leading-none">
              <span className="font-bold text-t1 text-[15px]">Surendra</span>
              <span className="text-cyan font-bold text-[15px]">.</span>
              <span className="text-t3 text-xs block font-mono tracking-wide">MIS &amp; DATA</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {links.map(({ to, label, Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    active ? "text-cyan" : "text-t2 hover:text-t1 hover:bg-surface-2/50"
                  }`}
                >
                  <Icon className="size-3.5" />
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-2 -bottom-px h-[2px] bg-cyan rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="size-9 rounded-xl flex items-center justify-center text-t2 hover:text-t1 hover:bg-surface-2/60 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden size-9 rounded-xl flex items-center justify-center text-t2 hover:text-t1 hover:bg-surface-2/60 transition-colors"
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-surface-1 border-l border-b1 p-5 pt-20 overflow-y-auto"
            >
              {links.map(({ to, label, Icon }, i) => {
                const active = pathname === to;
                return (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-colors ${
                        active
                          ? "bg-cyan/10 text-cyan border border-cyan/20"
                          : "text-t2 hover:text-t1 hover:bg-surface-2/50"
                      }`}
                    >
                      <Icon className="size-[18px]" />
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
