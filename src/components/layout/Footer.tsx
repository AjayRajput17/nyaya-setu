import { Link } from "react-router-dom";
import { BookOpen, ExternalLink } from "lucide-react";

const footerLinks = {
  platform: [
    { name: "About Nyaya", href: "/about" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Constitution Portal", href: "https://legislative.gov.in", external: true },
    { name: "Supreme Court", href: "https://main.sci.gov.in", external: true },
    { name: "Law Commission", href: "https://lawcommissionofindia.nic.in", external: true },
    { name: "National Portal", href: "https://india.gov.in", external: true },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Data Protection", href: "/data-protection" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Nyaya Platform</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Making the Constitution of India accessible to every citizen through 
              simplified explanations, interactive learning, and comprehensive resources.
            </p>
            <p className="text-xs text-muted-foreground">
              🇮🇳 Building Constitutional Literacy for All
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Official Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Nyaya Platform. Educational initiative for constitutional awareness.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            Made with ❤️ for India
          </p>
        </div>
      </div>
    </footer>
  );
}