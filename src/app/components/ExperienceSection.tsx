import { Briefcase, GraduationCap, Award, Users } from "lucide-react";

type ExperienceType = "work" | "education" | "award" | "org";

interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  org: string;
  period: string;
  location?: string;
  desc: string;
  tags?: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    id: "e1",
    type: "education",
    title: "S1 Sistem Informasi",
    org: "Universitas XYZ",
    period: "2021 — Present",
    location: "Indonesia",
    desc: "Fokus pada pengembangan sistem berbasis web, analisis data bisnis, dan manajemen proyek teknologi. Aktif sebagai anggota dan pengurus organisasi kemahasiswaan.",
    tags: ["GPA 3.8", "Dean's List", "Scholarship"],
    color: "#1E3A8A",
  },
  {
    id: "e2",
    type: "org",
    title: "Ketua Divisi Teknologi",
    org: "Himpunan Mahasiswa Sistem Informasi",
    period: "2023 — 2024",
    location: "Universitas XYZ",
    desc: "Memimpin tim 12 orang dalam pengembangan platform digital HMSI. Berhasil meluncurkan website resmi dan sistem pendaftaran event online yang digunakan oleh 500+ mahasiswa.",
    tags: ["Leadership", "Team of 12", "500+ Users"],
    color: "#F97316",
  },
  {
    id: "e3",
    type: "work",
    title: "Web Developer Intern",
    org: "PT. Digital Solusi Indonesia",
    period: "Jul — Sep 2023",
    location: "Remote",
    desc: "Membantu pengembangan fitur back-end menggunakan Node.js dan MySQL. Terlibat dalam code review, dokumentasi API, dan pengujian unit test untuk sistem e-commerce internal.",
    tags: ["Node.js", "MySQL", "REST API", "3 months"],
    color: "#1E3A8A",
  },
  {
    id: "e4",
    type: "org",
    title: "Staff Divisi Riset & Teknologi",
    org: "BEM Fakultas Ilmu Komputer",
    period: "2022 — 2023",
    location: "Universitas XYZ",
    desc: "Mengelola program literasi digital dan workshop teknologi untuk mahasiswa baru. Mengorganisir 3 seminar nasional dengan total 200+ peserta.",
    tags: ["Event Management", "3 Seminar", "200+ Participants"],
    color: "#8B5CF6",
  },
  {
    id: "e5",
    type: "award",
    title: "Juara 2 — Hackathon Nasional",
    org: "TechFest University 2023",
    period: "Oktober 2023",
    desc: "Memenangkan posisi runner-up dari 80+ tim se-Indonesia dalam kompetisi pengembangan solusi digital untuk UMKM. Membangun MVP dalam 24 jam.",
    tags: ["Hackathon", "80+ Teams", "24 Hours"],
    color: "#F59E0B",
  },
  {
    id: "e6",
    type: "award",
    title: "Peserta Terbaik — Data Analytics Bootcamp",
    org: "Dicoding Academy × Kominfo",
    period: "Agustus 2023",
    desc: "Menyelesaikan bootcamp intensif analisis data dengan Python dan Power BI. Dipilih sebagai peserta terbaik atas proyek akhir analisis churn pelanggan.",
    tags: ["Python", "Power BI", "Top Performer"],
    color: "#10B981",
  },
];

const typeConfig: Record<ExperienceType, { icon: JSX.Element; label: string }> = {
  work: { icon: <Briefcase size={14} />, label: "Work" },
  education: { icon: <GraduationCap size={14} />, label: "Education" },
  award: { icon: <Award size={14} />, label: "Achievement" },
  org: { icon: <Users size={14} />, label: "Organization" },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#080D1A] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#1E3A8A]/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#F97316]" />
            <span
              className="text-[#F97316] text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Experience
            </span>
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Perjalanan &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B7FE8] to-[#F97316]">
              Pencapaian
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E3A8A]/60 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const config = typeConfig[exp.type];

              return (
                <div
                  key={exp.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile/Desktop: Content card */}
                  <div
                    className={`ml-10 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div
                      className="group relative rounded-2xl border border-white/8 bg-[#0D1124] p-5 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderLeft: `2px solid ${exp.color}40`,
                      }}
                    >
                      {/* Hover glow left border */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl transition-all duration-300 group-hover:opacity-100 opacity-50"
                        style={{ background: exp.color }}
                      />

                      {/* Type badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {config.icon}
                          {config.label}
                        </div>
                        <span
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-white mb-1"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className="mb-2"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          color: exp.color,
                          fontWeight: 500,
                        }}
                      >
                        {exp.org}
                        {exp.location && (
                          <span className="text-white/30 font-normal ml-2">
                            · {exp.location}
                          </span>
                        )}
                      </p>

                      {/* Description */}
                      <p
                        className="text-white/40 text-sm mb-3"
                        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
                      >
                        {exp.desc}
                      </p>

                      {/* Tags */}
                      {exp.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-white/4 border border-white/6 text-white/35 text-xs"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center dot - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-[#0A0F1E] z-10"
                      style={{ background: exp.color }}
                    />
                  </div>

                  {/* Left dot - Mobile */}
                  <div
                    className="md:hidden absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full mt-6 z-10"
                    style={{ background: exp.color }}
                  />

                  {/* Spacer for right side on desktop */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
