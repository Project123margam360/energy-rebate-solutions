import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  BadgeDollarSign,
  Clock,
  Sun,
  Wind,
  Snowflake,
  BatteryCharging,
  Leaf,
  TrendingUp,
  CheckCircle,
  Droplets,
  FileCheck,
  Headphones,
  Star,
  Quote,
  ShieldCheck,
  BadgeCheck,
  Eye,
} from "lucide-react";

const services = [
  {
    title: "Heat Pumps",
    description:
      "Replace your old hot water system with an energy-efficient heat pump and save up to 75% on water heating costs.",
    icon: Wind,
    href: "/services/heat-pumps",
  },
  {
    title: "Air Conditioning",
    description:
      "Upgrade to a premium split or ducted system with top-tier energy ratings and available incentives.",
    icon: Snowflake,
    href: "/services/air-conditioning",
  },
  {
    title: "Solar Panels",
    description:
      "Harness Australian sunshine with a rooftop solar installation — reduce your bills from day one.",
    icon: Sun,
    href: "/services/solar",
  },
  {
    title: "Battery Storage",
    description:
      "Store excess solar energy and power your home day and night with a modern battery system.",
    icon: BatteryCharging,
    href: "/services/battery",
  },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Fully Accredited",
    text: "Fully accredited to deliver rebate-eligible installations across Australia.",
  },
  {
    icon: BadgeDollarSign,
    title: "Save Thousands",
    text: "Access rebates up to $3,000+ on qualifying energy upgrades for your home.",
  },
  {
    icon: Clock,
    title: "Fast & Simple",
    text: "From free assessment to installation — we handle the paperwork and logistics.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative hero-gradient overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-[400px] h-[400px] bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-amber-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-44">
          <div className="flex items-center justify-between gap-12">
            {/* Left — Text content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Welcome to{" "}
                <span className="text-gradient">Energy Rebate Solutions</span>
              </h1>
              <p className="mt-5 text-xl md:text-2xl text-gray-300 font-small leading-snug max-w-2xl">
                Offering under Victoria Energy Upgrades Rebates, Solar Rebates, Batteries and all other incentive Programs benefiting the customers and reducing carbon emissions.
              </p>
              <p className="mt-4 text-base text-gray-400 leading-relaxed max-w-xl">
                We help Australian households access available incentives
                for heat pumps, solar, air conditioning, and battery storage — so
                you save money while reducing your carbon footprint.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/assessment"
                  className="btn-primary text-base px-8 py-3.5"
                >
                  Get Free Assessment
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/rebates"
                  className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy text-base px-8 py-3.5"
                >
                  Explore Rebates
                </Link>
              </div>
            </div>

            {/* Right — Logo */}
            <div className="hidden lg:flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Energy Rebate Solutions Logo"
                width={400}
                height={400}
                className="w-72 h-72 xl:w-80 xl:h-80 object-contain bg-white rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((tp) => {
              const Icon = tp.icon;
              return (
                <div
                  key={tp.title}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base">
                      {tp.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {tp.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div>
              <span className="text-green font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy leading-tight">
                About Energy Rebate Solutions
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Energy Rebate Solutions assist you providing Victorian Energy Upgrades products including all Sustainable Environmental Energy Programs reducing the gas emissions. 
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
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-green font-semibold hover:gap-3 transition-all"
              >
                Learn more about us
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Benefits grid */}
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
                  text: "Our experts ensure you claim every dollar of rebates you\u2019re entitled to — hassle-free.",
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

      {/* ── Services ── */}
      <section className="py-20 md:py-28 warm-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              Energy Upgrades That Pay for Themselves
            </h2>
            <p className="mt-4 text-gray-500">
              We install rebate-eligible systems that cut your bills
              and boost your home&apos;s value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-green/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-5 group-hover:bg-green/20 transition-colors">
                    <Icon
                      size={28}
                      className="text-green group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-green transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {svc.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-green">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Energy Upgrade Solutions ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              Comprehensive Energy Upgrade Solutions
            </h2>
            <p className="mt-4 text-gray-500">
              From installation to rebate processing, we deliver end-to-end
              energy upgrade services across Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Droplets,
                title: "Heat Pump Hot Water Systems",
                description:
                  "Replace your old electric or gas hot water unit with a highly efficient heat pump system — eligible for rebates up to $1,000+.",
              },
              {
                icon: Snowflake,
                title: "Reverse Cycle Air Conditioning",
                description:
                  "Stay comfortable year-round with energy-rated reverse cycle systems that heat and cool your home efficiently.",
              },
              {
                icon: Sun,
                title: "Solar Panels Installation",
                description:
                  "Capture free energy from the Australian sun with a professionally installed rooftop solar system tailored to your usage.",
              },
              {
                icon: BatteryCharging,
                title: "Battery Storage Systems",
                description:
                  "Store surplus solar energy and power your home around the clock — reduce grid dependence and future-proof your energy supply.",
              },
              {
                icon: FileCheck,
                title: "Rebate Processing & Compliance",
                description:
                  "We handle all paperwork, STC certificates, and compliance requirements so you receive your maximum rebate without the hassle.",
              },
              {
                icon: Headphones,
                title: "24/7 Customer Support",
                description:
                  "Our dedicated support team is available around the clock to answer questions, schedule servicing, and resolve any concerns.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-green/20 transition-all"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-green/0 group-hover:bg-green transition-colors" />
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-5 group-hover:bg-green/20 transition-colors">
                    <Icon
                      size={28}
                      className="text-green group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partnered Brands ── */}
      <section className="py-16 md:py-20 warm-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              Trusted Partners
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              Partnered Brands
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              We work with quality, safe, warranties approved brands under the program known for reliability and performance.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 warm-fade-left z-10" />
          <div className="absolute inset-y-0 right-0 w-24 warm-fade-right z-10" />

          <div className="flex animate-marquee gap-12 w-max">
            {/* First set */}
            {[
              { name: "Carrier", logo: "/brands/carrier.svg" },
              { name: "Panasonic", logo: "/brands/panasonic.svg" },
              { name: "Mitsubishi Electric", logo: "/brands/mitsubishi-electric.svg" },
              { name: "Daikin", logo: "/brands/daikin.svg" },
              { name: "Rinnai", logo: "/brands/rinnai.svg" },
              { name: "Midea", logo: "/brands/midea.svg" },
              { name: "Fox ESS", logo: "/brands/fox-ess.svg" },
              { name: "GoodWe", logo: "/brands/goodwe.svg" },
              { name: "Sungrow", logo: "/brands/sungrow.svg" },
              { name: "Jinko Solar", logo: "/brands/jinko-solar.svg" },
            ].map((brand) => (
              <div
                key={`a-${brand.name}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-5 hover:shadow-lg hover:border-green/30 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 max-w-[140px] object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { name: "Carrier", logo: "/brands/carrier.svg" },
              { name: "Panasonic", logo: "/brands/panasonic.svg" },
              { name: "Mitsubishi Electric", logo: "/brands/mitsubishi-electric.svg" },
              { name: "Daikin", logo: "/brands/daikin.svg" },
              { name: "Rinnai", logo: "/brands/rinnai.svg" },
              { name: "Midea", logo: "/brands/midea.svg" },
              { name: "Fox ESS", logo: "/brands/fox-ess.svg" },
              { name: "GoodWe", logo: "/brands/goodwe.svg" },
              { name: "Sungrow", logo: "/brands/sungrow.svg" },
              { name: "Jinko Solar", logo: "/brands/jinko-solar.svg" },
            ].map((brand) => (
              <div
                key={`b-${brand.name}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-5 hover:shadow-lg hover:border-green/30 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accredited Rebate Provider Banner ── */}
      <section className="relative hero-gradient overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-orange/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <ShieldCheck size={16} />
                Accredited Provider
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Accredited Rebate Provider
              </h2>
              <p className="mt-5 text-gray-300 leading-relaxed">
                Energy Rebate Solutions provide all services to the customers under the Energy Makeovers Accredited Provider with all energy efficiency programs. 
                <br></br> we help create{" "}
                <span className="text-amber font-semibold">
                  Victorian Energy Efficiency Certificates (VEECs)
                </span>
                and other state rebate claims on behalf of all our customers.
                <br />
                These certificates represent the energy savings generated by
                your upgrade, and we manage the entire process — from
                assessment and installation to certificate lodgement — so you
                receive maximum financial benefit.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Every project is handled with meticulous attention to regulatory
                requirements, ensuring your upgrade is fully compliant and your
                rebate is secured without delays.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/assessment"
                  className="btn-primary text-base px-8 py-3.5"
                >
                  Check Your Eligibility
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right — highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: BadgeCheck,
                  title: "Full Compliance",
                  text: "Every installation meets strict industry standards and regulatory requirements for VEECs and STCs.",
                },
                {
                  icon: Eye,
                  title: "Transparent Pricing",
                  text: "No hidden fees or surprises — we clearly outline all costs, rebate values, and your final out-of-pocket price upfront.",
                },
                {
                  icon: FileCheck,
                  title: "VEEC Management",
                  text: "We handle the creation, lodgement, and processing of your Victorian Energy Efficiency Certificates from start to finish.",
                },
                {
                  icon: Shield,
                  title: "Guaranteed Rebates",
                  text: "Our accredited team ensures you receive every dollar of rebate you\u2019re entitled to — or we\u2019ll sort it out.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-green/10 flex items-center justify-center mb-4 group-hover:bg-green/20 transition-colors">
                      <Icon size={22} className="text-green" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
              What Our Clients Say
            </h2>

            {/* Star rating */}
            <div className="mt-5 inline-flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={22}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                {/* Partial star for 4.8 */}
                <div className="relative">
                  <Star size={22} className="text-gray-200 fill-gray-200" />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: "80%" }}>
                    <Star
                      size={22}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                <span className="text-navy font-bold text-base">4.8</span> out
                of 5 — based on 200+ verified reviews
              </span>
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Melbourne, VIC",
                rating: 5,
                text: "Energy Rebate Solutions saved us thousands on our hot water system upgrade. The heat pump they installed cut our energy bills by over 60%, and the rebate covered most of the cost. Absolutely worth it!",
              },
              {
                name: "James T.",
                location: "Sydney, NSW",
                rating: 5,
                text: "The entire rebate process was completely stress-free. They handled all the paperwork, sorted the VEECs, and kept us informed every step of the way. I didn\u2019t have to lift a finger — highly recommend!",
              },
              {
                name: "Priya K.",
                location: "Brisbane, QLD",
                rating: 5,
                text: "From the initial assessment to the final installation, the team was incredibly professional. The installers were punctual, tidy, and explained everything clearly. Our new solar and battery system is performing brilliantly.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="relative bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:border-green/20 transition-all group"
              >
                {/* Quote icon */}
                <Quote
                  size={36}
                  className="absolute top-5 right-5 text-green/10 group-hover:text-green/20 transition-colors"
                />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-navy">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
