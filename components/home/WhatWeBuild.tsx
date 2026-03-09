import Container from "../ui/Container";

const services = [
  "SaaS Platforms",
  "AI-powered Applications",
  "DevOps & CI/CD Systems",
  "Backend Architecture (Django / Node / Cloud-native)",
  "Secure API Ecosystems",
  "Internal Tools & Dashboards",
];

export default function WhatWeBuild() {
  return (
    <section className="py-28 min-h-screen">
      <Container>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-12">
          From Idea to Infrastructure
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
            key={item}
            className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
            <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}