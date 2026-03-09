import Container from "../ui/Container";

export default function WhySection() {
  return (
    <section className="py-28 min-h-screen">
      <Container>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-12">
          Software Built With Accountability at the Core
        </h2>

        <div className="max-w-3xl mx-auto text-white/70 text-lg space-y-6 text-center">
          <p>Most development agencies sell speed. We sell ownership.</p>

          <p>
            At Southlake, every sprint is documented.
            Every milestone is tracked.
            Every line of code is reviewable.
          </p>

          <p>
            We don’t just build features —
            we build systems that scale and teams that trust.
          </p>
        </div>
      </Container>
    </section>
  );
}

