import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  BadgeDollarSign,
  ShieldCheck,
  Zap,
  Moon,
} from "lucide-react";

export const metadata = {
  title: "Battery Storage Systems | Energy Rebate Solutions",
  description:
    "Store surplus solar energy and power your home around the clock with a modern battery storage system.",
};

export default function BatteryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <BatteryCharging size={16} />
            Energy Storage
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
            Battery Storage Systems
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            Store excess solar energy and power your home day and night.
            Reduce grid dependence, protect against blackouts, and
            future-proof your energy supply with a modern battery system.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Why Add a Battery?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Moon, title: "Power at Night", text: "Use stored solar energy after the sun goes down instead of buying from the grid." },
              { icon: BadgeDollarSign, title: "Maximise Savings", text: "Store cheap off-peak energy and avoid expensive peak-rate electricity charges." },
              { icon: ShieldCheck, title: "Blackout Protection", text: "Keep your essential appliances running during power outages with backup capability." },
              { icon: Zap, title: "Rebate Eligible", text: "State government battery rebates are available to further reduce your upfront cost." },
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
              { step: "01", title: "Energy Audit", text: "We analyse your solar production and energy usage patterns to size the right battery." },
              { step: "02", title: "Installation", text: "Certified electricians install and configure your battery system with your existing solar." },
              { step: "03", title: "Monitor & Save", text: "Track your energy storage in real-time via an app and enjoy lower bills immediately." },
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
      <section className="bg-green py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Store Your Solar Energy?</h2>
          <p className="mt-3 text-green-dark/80 font-medium">Find out which battery system is right for your home.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all mt-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Free Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
