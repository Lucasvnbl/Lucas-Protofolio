import { Mail, MapPin, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const email = "lucasnbl111@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 rounded-full bg-[#1E3A8A]/8 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#F97316]" />
            <span
              className="text-[#F97316] text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Contact
            </span>
            <span className="w-8 h-px bg-[#F97316]" />
          </div>
          <h2
            className="text-white mb-3"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Mari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B7FE8] to-[#F97316]">
              Berkolaborasi
            </span>
          </h2>
          <p
            className="text-white/40 max-w-md mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
          >
            Terbuka untuk peluang magang, project freelance, kolaborasi riset, atau sekadar diskusi teknologi!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="space-y-5">
            {/* Email card */}
            <div className="rounded-2xl border border-white/8 bg-[#0D1124] p-5 group hover:border-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-[#1E3A8A]/20 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/20 border border-[#1E3A8A]/30 flex items-center justify-center group-hover:bg-[#1E3A8A]/30 transition-colors">
                  <Mail size={18} className="text-[#93B4FF]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Email</p>
                  <p className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{email}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="ml-auto w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Location card */}
            <div className="rounded-2xl border border-white/8 bg-[#0D1124] p-5 group hover:border-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-[#F97316]/20 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center group-hover:bg-[#F97316]/20 transition-colors">
                  <MapPin size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Location</p>
                  <p className="text-white text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Indonesia 🇮🇩</p>
                </div>
              </div>
            </div>

            {/* Status card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 group hover:border-emerald-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <p
                    className="text-emerald-400"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Available for Opportunities
                  </p>
                  <p
                    className="text-emerald-400/60 text-xs mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Internship · Freelance · Collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Response time */}
            <p
              className="text-white/25 text-xs px-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ⚡ Biasanya membalas dalam 24 jam
            </p>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/8 bg-[#0D1124] p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-white/40 text-xs mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Nama
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama kamu"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-[#1E3A8A]/60 focus:bg-white/6 focus:scale-105 focus:shadow-lg focus:shadow-[#1E3A8A]/20 hover:border-white/15 hover:bg-white/5 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-white/40 text-xs mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@contoh.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-[#1E3A8A]/60 focus:bg-white/6 focus:scale-105 focus:shadow-lg focus:shadow-[#1E3A8A]/20 hover:border-white/15 hover:bg-white/5 transition-all duration-300 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-white/40 text-xs mb-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Subjek
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Topik diskusi..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-[#1E3A8A]/60 focus:bg-white/6 focus:scale-105 focus:shadow-lg focus:shadow-[#1E3A8A]/20 hover:border-white/15 hover:bg-white/5 transition-all duration-300 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div>
              <label
                className="block text-white/40 text-xs mb-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Pesan
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Ceritakan project atau peluang kolaborasimu..."
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-white/4 border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-[#1E3A8A]/60 focus:bg-white/6 focus:scale-105 focus:shadow-lg focus:shadow-[#1E3A8A]/20 hover:border-white/15 hover:bg-white/5 transition-all duration-300 text-sm resize-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E3A8A] hover:bg-[#2547B0] hover:scale-105 hover:shadow-2xl hover:shadow-[#1E3A8A]/40 text-white transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
            >
              {sent ? (
                <>
                  <Check size={16} className="text-emerald-300" />
                  Pesan Terkirim!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Kirim Pesan
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
