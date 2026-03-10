import Container from "../ui/Container";

const services = [
  {
    name: "Identity & Access Management",
    description: [
      "Authentication & authorization systems",
      "Role based access control (RBAC)",
      "Single Sign-On integration",
      "Secure identity verification",
      "Enterprise permission management",
      "Audit & compliance logging",
    ],
  },
{
  name: "Custom Software Development",
  description: [
    "End-to-end web and platform development",
    "Scalable and secure application architecture",
    "Performance-focused system design",
    "Reliable and maintainable software systems",
    "Integration with existing business tools",
    "Future-ready systems built to scale",
  ],
},
{
  name: "Managed Hosting & Maintenance",
  description: [
    "Complete application hosting and deployment",
    "Continuous monitoring and reliability management",
    "Bug fixes and performance improvements",
    "Security updates and system maintenance",
    "Scalable infrastructure management",
    "Ongoing technical support",
  ],
}
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="py-28 min-h-screen">
      <Container>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center mb-16">
          Our Specialisation Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-6">
                {service.name}
              </h3>

              <ul className="space-y-3 text-sm text-gray-300">
                {service.description.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-[2px]">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-center leading-relaxed">
          These are our current focus areas, supported by broader expertise in
          events, marketing, and AI.
        </p>
      </Container>
    </section>
  );
}