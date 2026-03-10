import Button from "../ui/Button";
import Container from "../ui/Container";
import RippleField from "../ui/RippleField";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden text-center pt-50">


      <Container className="relative z-10">

        {/* Company label */}
        <p className="mb-6 text-sm tracking-widest uppercase text-white/50">
          Southlake
        </p>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Engineering secure and scalable digital systems.
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto">
          Built with reliability, accountability, and long-term trust.
        </p>

        {/* Description */}
        <p className="mt-6 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
          we are a software development and research organization focused
          on designing robust and compliant systems. Our work is grounded in
          trust, accountability, and long-term commitment.
        </p>

        {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <a href="#projects">
              <Button>Our Work</Button>
            </a>

            <Button variant="secondary">Contact</Button>
          </div>

      </Container>
    </section>
  );
}