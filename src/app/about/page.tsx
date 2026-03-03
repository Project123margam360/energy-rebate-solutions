import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  BadgeDollarSign,
  Leaf,
  TrendingUp,
  ShieldCheck,
  Users,
  Award,
  Zap,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";

export const metadata = {
  title: "About Us | Energy Rebate Solutions",
  description:
    "Learn about Energy Rebate Solutions — Australia's leading provider of government-backed energy efficiency upgrades.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Users size={16} />
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            About Energy Rebate Solutions
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Australia&apos;s trusted partner for government-backed energy
            upgrades — helping households and businesses save money while
            building a sustainable future.
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-green font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy leading-tight">
                Leading Provider of Government-Backed Energy Upgrades
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Energy Rebate Solutions is a leading provider of
                government-backed energy efficiency upgrades across Australia.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We specialize in helping homeowners and businesses access
                available rebate programs to upgrade to energy-efficient
                systems — including heat pumps, air conditioning, solar panels,
                and battery storage solutions.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Our accredited installers ensure every upgrade is completed to
                Australian standards, delivering:
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Lower energy bills",
                  "Reduced carbon footprint",
                  "Long-term performance",
                  "Maximum rebate benefits",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-gray-600 font-medium"
                  >
                    <CheckCircle size={16} className="text-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-500 leading-relaxed">
                From consultation to installation and rebate processing — we
                manage everything end-to-end.
              </p>
            </div>

            {/* Benefits cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: BadgeDollarSign,
                  title: "Lower Energy Bills",
                  text: "Slash your electricity and gas costs with high-efficiency systems designed to use less energy without sacrificing comfort.",
                },
                {
                  icon: Leaf,
                  title: "Reduced Carbon Footprint",
                  text: "Make a real difference for the environment by switching to clean, renewable energy solutions for your home.",
                },
                {
                  icon: TrendingUp,
                  title: "Long-Term Performance",
                  text: "We install only premium, warranty-backed products that deliver reliable performance for years to come.",
                },
                {
                  icon: CheckCircle,
                  title: "Maximum Rebate Benefits",
                  text: "Our experts ensure you claim every dollar of government rebates you\u2019re entitled to — hassle-free.",
                },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-gray-50 rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-green/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-4 group-hover:bg-green/20 transition-colors">
                      <Icon size={24} className="text-green" />
                    </div>
                    <h3 className="text-base font-bold text-navy">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 md:py-28 warm-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              What Drives Us
            </h2>
            <p className="mt-4 text-gray-500">
              Our core values shape every interaction, installation, and outcome
              we deliver for Australian households.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Customer First",
                text: "Every decision we make starts with what's best for the homeowner — from pricing to product selection.",
              },
              {
                icon: ShieldCheck,
                title: "Full Compliance",
                text: "We meet every government standard and regulatory requirement for rebate-eligible installations.",
              },
              {
                icon: Heart,
                title: "Sustainability",
                text: "We're committed to reducing Australia's carbon footprint one home at a time through clean energy upgrades.",
              },
              {
                icon: Lightbulb,
                title: "Transparency",
                text: "No hidden fees, no surprises — we clearly communicate costs, rebate values, and timelines upfront.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-green/20 transition-colors">
                    <Icon size={28} className="text-green" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5,000+", label: "Homes Upgraded" },
              { value: "$8M+", label: "Rebates Claimed" },
              { value: "4.8★", label: "Average Rating" },
              { value: "100%", label: "Compliance Record" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-green">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              The Energy Rebate Solutions Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Accredited Installers",
                text: "All our technicians are fully licensed, insured, and government-accredited to deliver rebate-eligible upgrades across Australia.",
              },
              {
                icon: Zap,
                title: "End-to-End Service",
                text: "From the initial free assessment through installation to rebate processing — we manage the entire journey so you don't have to.",
              },
              {
                icon: BadgeDollarSign,
                title: "Maximum Rebates Guaranteed",
                text: "We know the rebate landscape inside out and ensure you claim every dollar you're entitled to — no paperwork stress, no missed incentives.",
              },
            ].map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-green/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-5 group-hover:bg-green/20 transition-colors">
                    <Icon size={28} className="text-green" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-gradient py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Start Saving?
          </h2>
          <p className="mt-3 text-white/70 font-medium">
            Find out which government rebates you qualify for — it takes 2
            minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all mt-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Free Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
