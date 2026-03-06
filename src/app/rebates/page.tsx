import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle,
  Zap,
  Droplets,
  Snowflake,
  Sun,
  BatteryCharging,
  FileCheck,
  ShieldCheck,
  Building2,
  Home,
  Leaf,
} from "lucide-react";

export const metadata = {
  title: "Energy Rebates | Energy Rebate Solutions",
  description:
    "Available of all different Energy Rebate Programs for Residential & Commercial sites across Australia.",
};

const rebatePrograms = [
  {
    icon: Zap,
    title: "Victorian Energy Upgrades (VEU)",
    rebateValue: "Varies",
    description:
      "The VEU program helps Victorian households and businesses reduce energy costs by providing incentives for energy-efficient upgrades. We handle the entire VEU process from assessment to certificate lodgement.",
    eligibility: [
      "Victorian residential or commercial property",
      "Replacing inefficient appliances or systems",
      "Installation by accredited VEU provider",
      "Must meet minimum energy efficiency standards",
    ],
  },
  {
    icon: Sun,
    title: "Solar Panel Rebates (Solar Victoria)",
    rebateValue: "Up to $1,400",
    description:
      "Access Solar Victoria rebates to dramatically reduce the upfront cost of a rooftop solar system. Combined with federal STCs, solar has never been more affordable for Australian homeowners.",
    eligibility: [
      "Property owner with suitable roof space",
      "Combined household income under $210,000",
      "Property value under $3 million",
      "Installed by CEC-accredited installer",
    ],
  },
  {
    icon: Droplets,
    title: "Heat Pump Rebates (VEU & STCs)",
    rebateValue: "Up to $1,000+",
    description:
      "Replace your old electric or gas hot water system with an energy-efficient heat pump. Claim rebates through both the VEU program and federal Small-scale Technology Certificates (STCs).",
    eligibility: [
      "Existing electric or gas hot water system",
      "Property owner or authorised representative",
      "System installed by accredited provider",
      "Meet minimum energy efficiency standards",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage (STCs)",
    rebateValue: "Up to $3,000+",
    description:
      "State battery rebate programs and federal STCs can significantly offset the cost of adding battery storage to your solar system for round-the-clock energy savings.",
    eligibility: [
      "Existing or new solar system on property",
      "Approved battery product list",
      "Household income eligibility (varies by state)",
      "Installation by accredited provider",
    ],
  },
  {
    icon: Leaf,
    title: "Energy Efficiency Incentives (VEECs/VEU)",
    rebateValue: "Varies",
    description:
      "Victorian Energy Efficiency Certificates (VEECs) are created when energy-saving upgrades are installed. We manage the creation, lodgement, and processing of your VEECs to maximise your financial benefit.",
    eligibility: [
      "Victorian residential or commercial property",
      "Qualifying energy efficiency upgrade",
      "Installed by accredited VEU provider",
      "Meets compliance standards",
    ],
  },
];

export default function RebatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <BadgeDollarSign size={16} />
            Energy Incentives
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Energy Rebates
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Available of all different Energy Rebate Programs to the Residential
            &amp; Commercial sites. We help you navigate the programs and
            maximise your savings.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Check My Eligibility <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How Rebates Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            How Rebates Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Assessment", text: "We check your property and current systems against rebate eligibility criteria." },
              { step: "02", title: "Quote & Approval", text: "Receive a transparent quote showing the full cost, rebate value, and your final price." },
              { step: "03", title: "Installation", text: "Our accredited team completes the upgrade to full compliance standards." },
              { step: "04", title: "Rebate Processed", text: "We handle all certificates, paperwork, and lodgements — you receive your savings." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-navy text-green font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebate Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              Available Programs
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              Energy Rebate Programs
            </h2>
            <p className="mt-4 text-gray-500">
              We assist with a range of rebate programs for
              residential and commercial properties across Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rebatePrograms.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-green/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center">
                        <Icon size={24} className="text-green" />
                      </div>
                      <h3 className="text-lg font-bold text-navy">
                        {program.title}
                      </h3>
                    </div>
                    <span className="bg-green/10 text-green font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap">
                      {program.rebateValue}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {program.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Eligibility Requirements
                    </h4>
                    <ul className="space-y-2">
                      {program.eligibility.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={15}
                            className="text-green mt-0.5 shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="py-14 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, title: "Accredited Provider", text: "Fully approved to deliver rebate-eligible installations." },
              { icon: FileCheck, title: "We Handle Paperwork", text: "STCs, VEECs, and all compliance documentation managed for you." },
              { icon: BadgeDollarSign, title: "Maximum Savings", text: "We ensure you claim every dollar of rebate you're entitled to." },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-3">
                    <Icon size={24} className="text-green" />
                  </div>
                  <h3 className="font-bold text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-gradient py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Not Sure Which Rebates You Qualify For?
          </h2>
          <p className="mt-3 text-white/70 font-medium">
            Our team will assess your property and tell you exactly what
            you&apos;re entitled to — free of charge.
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
