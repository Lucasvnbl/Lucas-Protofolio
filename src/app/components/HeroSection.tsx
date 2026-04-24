import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const ROLES = [
  "Information System",
  "Data Analyst",
  "Student Legislative Council",
  "Student Representative Council of Faculty of Technology and Design",
];

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = isDeleting ? 40 : 70;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.substring(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIdx]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#1E3A8A]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#F97316]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/5 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              background: i % 2 === 0 ? "#1E3A8A" : "#F97316",
              opacity: 0.3 + (i * 0.05),
              top: `${15 + i * 12}%`,
              left: `${10 + i * 14}%`,
              animation: `float ${3 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/20 border border-[#1E3A8A]/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span
              className="text-[#93B4FF] text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Open for Internship & Collaboration
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-white mb-3"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B7FE8] to-[#F97316]">
              Lucas Vincent Kurniawan Obedius Nobel
            </span>
            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
              ✨ Test Update
            </span>
          </h1>

          {/* Typewriter Role */}
          <div
            className="flex items-center gap-2 mb-6"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span>{displayed}</span>
            <span className="w-0.5 h-7 bg-[#F97316] animate-pulse" />
          </div>

          {/* Description */}
          <p
            className="text-white/50 mb-8 max-w-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            Mahasiswa Sistem Informasi yang passionate dalam membangun solusi
            digital end-to-end — dari code yang clean hingga insight data yang
            actionable, dan brand identity yang berkesan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3A8A] text-white hover:bg-[#2547B0] transition-all hover:shadow-lg hover:shadow-[#1E3A8A]/30 cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
            >
              View Projects
              <ArrowDown size={16} className="rotate-[-90deg]" />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
            >
              <Download size={16} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span
              className="text-white/30 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Find me on
            </span>
            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "mailto:you@email.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#1E3A8A]/60 hover:bg-[#1E3A8A]/20 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Glassmorphism Card / Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Main Glass Card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E3A8A]/60 to-transparent" />

              {/* Header row */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#2547B0] flex items-center justify-center">
                  <span
                    className="text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    YN
                  </span>
                </div>
                <div>
                  <p
                    className="text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                  >
                    Lucas Vincent Kurniawan Obedius Nobel
                  </p>
                  <p
                    className="text-white/40"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                  >
                    Information Systems Student
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Available
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Tech Stack", value: "12+" },
                  { label: "GPA", value: "3.8" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/5 border border-white/8 p-3 text-center"
                  >
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", marginTop: "2px" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Preview */}
              <div className="space-y-3">
                {[
                  { skill: "Full-Stack Dev", pct: 85, color: "#1E3A8A" },
                  { skill: "Data Analytics", pct: 80, color: "#F97316" },
                  { skill: "Brand Design", pct: 72, color: "#8B5CF6" },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-1">
                      <span
                        className="text-white/60"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
                      >
                        {item.skill}
                      </span>
                      <span
                        className="text-white/40"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
                      >
                        {item.pct}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: `linear-gradient(90deg, ${item.color}80, ${item.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom decorative */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-[#F97316] text-white text-xs shadow-lg shadow-[#F97316]/30"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              🎓 2025
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-[#1E3A8A] border border-[#1E3A8A]/60 text-white text-xs shadow-lg shadow-[#1E3A8A]/30"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              💻 React · Node.js · MySQL
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
      >
        <span className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
