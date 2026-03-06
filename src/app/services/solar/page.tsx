import Link from "next/link";
import {
  ArrowRight,
  Sun,
  BadgeDollarSign,
  ShieldCheck,
  Zap,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Solar Panels – Solar Victoria Program | Energy Rebate Solutions",
  description:
    "Premium solar panel installation under the Solar Victoria Program. Generate clean energy and reduce electricity bills.",
};

export default function SolarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Sun size={16} />
            Solar Victoria Program
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
            Solar Panels
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-amber-300 max-w-2xl">
            Premium Solar Panel Installation
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-xl leading-relaxed">
            Generate clean energy and reduce electricity bills.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Get Free Assessment <ArrowRight size={18} />
            </Link>
            <Link href="/rebates" className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy text-base px-8 py-3.5">
              View Rebates
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 warm-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "High Efficiency Panels", text: "Premium high efficiency solar panels that maximise energy generation from every ray of sunlight." },
              { icon: ShieldCheck, title: "Tier-1 Manufacturers", text: "We only install panels from Tier-1 manufacturers, ensuring world-class quality and reliability." },
              { icon: TrendingUp, title: "25-Year Warranty", text: "25-year performance warranty on panels, giving you decades of guaranteed energy production." },
              { icon: BadgeDollarSign, title: "Federal STC Rebates", text: "Federal STC rebates available to significantly reduce your upfront installation cost." },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-green" />
                  </div>
                  <h3 className="font-bold text-navy">{b.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Solar Assessment", text: "We evaluate your roof, energy usage, and shading to design the optimal system size." },
              { step: "02", title: "Professional Install", text: "CEC-accredited installers mount your panels and connect the inverter — typically in one day." },
              { step: "03", title: "Start Saving", text: "Your system starts generating power immediately. We handle all rebate paperwork." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy text-green font-extrabold text-xl flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-navy text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-gradient py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Go Solar?</h2>
          <p className="mt-3 text-white/70 font-medium">Get a personalised solar quote for your property today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all mt-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Free Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
