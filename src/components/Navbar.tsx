"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Zap,
  Sun,
  Wind,
  BatteryCharging,
  Snowflake,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    name: "Heat Pumps",
    href: "/services/heat-pumps",
    icon: Wind,
    description: "Energy-efficient hot water systems",
  },
  {
    name: "Air Conditioning",
    href: "/services/air-conditioning",
    icon: Snowflake,
    description: "Premium split & ducted systems",
  },
  {
    name: "Solar Panels",
    href: "/services/solar",
    icon: Sun,
    description: "Rooftop solar installations",
  },
  {
    name: "Battery Storage",
    href: "/services/battery",
    icon: BatteryCharging,
    description: "Home battery solutions",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* ── Top bar ── */}
      <div className="hidden md:block bg-gradient-to-r from-navy-dark via-navy to-navy-light text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-center gap-6">
          <a
            href="tel:+61433901009"
            className="flex items-center gap-1.5 hover:text-amber-light transition-colors"
          >
            <Phone size={14} />
            +61 433 901 009
          </a>
          <span className="text-white/40">|</span>
          <a
            href="https://wa.me/61413238089"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-amber-light transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +61 413 238 089
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group -my-2">
          <Image
            src="/logo.png"
            alt="Energy Rebate Solutions"
            width={320}
            height={100}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-2">
                {services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="mt-0.5 w-9 h-9 rounded-md bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
                        <Icon size={18} className="text-amber" />
                      </div>
                      <div>
                        <span className="block text-sm font-semibold text-gray-800 group-hover:text-navy transition-colors">
                          {svc.name}
                        </span>
                        <span className="block text-xs text-gray-500">
                          {svc.description}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link href="/rebates" className="nav-link">
            Rebates
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link href="/assessment" className="hidden sm:inline-flex btn-primary">
            Get Free Assessment
            <ArrowRight size={16} />
          </Link>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-1 bg-white">
          <Link
            href="/"
            className="block py-2.5 font-medium text-gray-700 hover:text-navy transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile services accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2.5 font-medium text-gray-700 hover:text-navy transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                servicesOpen ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                {services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-navy transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon size={16} className="text-amber" />
                      <span className="text-sm font-medium">{svc.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/rebates"
            className="block py-2.5 font-medium text-gray-700 hover:text-navy transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Rebates
          </Link>
          <Link
            href="/about"
            className="block py-2.5 font-medium text-gray-700 hover:text-navy transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2.5 font-medium text-gray-700 hover:text-navy transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-3">
            <Link
              href="/assessment"
              className="btn-primary w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Assessment
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile phone */}
          <a
            href="tel:1300000000"
            className="flex items-center justify-center gap-2 pt-3 text-sm text-gray-500 hover:text-navy transition-colors"
          >
            <Phone size={14} />
            1300 000 000
          </a>
        </div>
      </div>
    </header>
  );
}
