import Container from "../ui/Container";

const points = [
  "Sprint accountability dashboards",
  "Transparent task tracking",
  "Code review enforcement",
  "CI/CD pipeline monitoring",
  "Deployment traceability",
];

export default function ProofOfProcess() {
  return (
    <section className="py-28 z-10">
      <Container>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-12">
          Governance-Driven Development
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-lg text-white/70">
          {points.map((p) => (
            <p key={p}>• {p}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}