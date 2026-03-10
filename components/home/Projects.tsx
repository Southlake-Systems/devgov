import Container from "../ui/Container";
import Image from "next/image";

export default function Projects() {
  const project = {
    name: "Arangu 2026 Registration Platform",
    description:
      "A centralized digital platform designed to manage registrations and participant coordination across large-scale college technical events. The system streamlined event discovery, simplified onboarding, and provided organizers with a reliable system to manage participants.",
    metrics: [
      { value: "102", label: "Events Managed" },
      { value: "1000+", label: "Participants" },
      { value: "2000+", label: "Registrations" },
    ],
    link: "https://yourprojectlink.com",
  };

  return (
    <section id="projects" className="py-32">
      <Container>

        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Featured Project
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              {project.name}
            </h3>

            <p className="text-white/70 leading-relaxed mb-10 text-lg">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="text-sm text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE PREVIEW */}
            <a
              href="https://amritakalotsavam.amrita.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-[460px] md:h-[440px] rounded-xl border border-white/10 overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]">

                <Image
                  src="/projects/image.png"
                  alt="Arangu 2026 Registration Platform"
                  fill
                  className="object-cover"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-medium tracking-wide">
                    Visit Project →
                  </span>
                </div>

              </div>
            </a>

        </div>

      </Container>
    </section>
  );
}