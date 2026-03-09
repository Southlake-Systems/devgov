import Button from "../ui/Button";
import Container from "../ui/Container";

export default function HeroSection() {
  return (
<section className="relative overflow-hidden min-h-screen flex  justify-center text-center pt-70">
      <Container className="relative z-10">
          <h1 className="text-5xl md:text-9xl font-poppins font-semibold tracking-tight leading-[1.05]">Southlake          </h1>

        <p className="mt-3 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Engineering systems that organizations can depend on.
        </p>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Southlake is a software development and research organization focused on building robust, compliant, and scalable systems.
Our work is grounded in trust, accountability, and long-term commitment.
        </p>
      </Container>
    </section>
  );
}