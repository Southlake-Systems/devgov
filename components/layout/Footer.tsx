import Container from "../ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <Container>

        <div className="py-16 grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              Southlake
            </h3>

            <p className="text-white/60 max-w-sm leading-relaxed">
              A software development and research organization focused on
              building secure, scalable, and reliable digital systems grounded
              in accountability and long-term trust.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Navigation
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Contact
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>hello@southlake.dev</li>
              <li>Kerala, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">

          <p>
            © {new Date().getFullYear()} Southlake. All rights reserved.
          </p>

          <p>
            Engineering systems with accountability.
          </p>

        </div>

      </Container>
    </footer>
  );
}