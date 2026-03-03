import Link from "next/link";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Heat Pumps", href: "/services/heat-pumps" },
    { name: "Air Conditioning", href: "/services/air-conditioning" },
    { name: "Solar Panels", href: "/services/solar" },
    { name: "Battery Storage", href: "/services/battery" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Rebates", href: "/rebates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Warranty Info", href: "/warranty" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* ── CTA Banner ── */}
      <div className="bg-green">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to slash your energy bills?
            </h3>
            <p className="mt-1 text-green-dark/80 font-medium text-sm md:text-base">
              Find out which government rebates you qualify for — it takes 2
              minutes.
            </p>
          </div>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Free Assessment
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Zap size={22} className="text-green" />
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-bold tracking-tight">
                  Energy Rebate
                </span>
                <span className="block text-xs font-medium text-gray-400 -mt-0.5 tracking-wide uppercase">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              Australia&#39;s trusted partner for government-backed energy
              upgrades. We help households and businesses access rebates for heat
              pumps, solar, air conditioning, and battery storage.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2.5 text-sm text-gray-400">
              <a
                href="tel:1300000000"
                className="flex items-center gap-2.5 hover:text-green transition-colors"
              >
                <Phone size={15} />
                1300 000 000
              </a>
              <a
                href="mailto:info@energyrebatesolutions.com.au"
                className="flex items-center gap-2.5 hover:text-green transition-colors"
              >
                <Mail size={15} />
                info@energyrebatesolutions.com.au
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>Melbourne, VIC Australia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Energy Rebate Solutions. All
            rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green/20 hover:text-green transition-colors text-gray-400"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green/20 hover:text-green transition-colors text-gray-400"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green/20 hover:text-green transition-colors text-gray-400"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
