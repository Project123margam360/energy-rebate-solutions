"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Zap,
  User,
  Building2,
  MapPin,
  Shield,
  Clock,
  BadgeDollarSign,
} from "lucide-react";

const products = [
  "Heat Pump Hot Water System",
  "Reverse Cycle Air Conditioning",
  "Solar Panel Installation",
  "Battery Storage System",
  "Multiple Products",
  "Not Sure — Need Advice",
];

const states = [
  "VIC — Victoria",
  "NSW — New South Wales",
  "QLD — Queensland",
  "SA — South Australia",
  "WA — Western Australia",
  "TAS — Tasmania",
  "ACT — Australian Capital Territory",
  "NT — Northern Territory",
];

export default function AssessmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    state: "",
    product: "",
    ownerConfirm: false,
    eligibilityConfirm: false,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.propertyType)
      newErrors.propertyType = "Please select a property type.";
    if (!formData.state) newErrors.state = "Please select your state.";
    if (!formData.product)
      newErrors.product = "Please select a product of interest.";
    if (!formData.ownerConfirm)
      newErrors.ownerConfirm = "You must confirm you are the property owner.";
    if (!formData.eligibilityConfirm)
      newErrors.eligibilityConfirm =
        "You must confirm the property meets rebate eligibility.";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Zap size={16} />
            Free &amp; No Obligation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Get Your Free Energy Assessment
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find out which government rebates you qualify for and how much you
            could save on energy-efficient upgrades — it takes just 2 minutes.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── Sidebar ── */}
            <div className="lg:col-span-1 space-y-6">
              {/* How it works */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="text-lg font-bold text-navy mb-5 flex items-center gap-2">
                  <Zap size={20} className="text-green" />
                  How It Works
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "Complete the Form",
                      text: "Tell us about your property and the upgrades you're interested in.",
                    },
                    {
                      step: "2",
                      title: "We Check Eligibility",
                      text: "Our team reviews your details against current government rebate programs.",
                    },
                    {
                      step: "3",
                      title: "Receive Your Quote",
                      text: "Get a transparent quote showing the full cost, rebate value, and your final price.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-navy text-green text-sm font-bold flex items-center justify-center shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-navy">
                          {item.title}
                        </span>
                        <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust card */}
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-green" />
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    "100% free, no-obligation assessment",
                    "Government-accredited rebate provider",
                    "Response within 24 business hours",
                    "Transparent pricing — no hidden fees",
                    "5,000+ homes already upgraded",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={14}
                        className="text-green mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: BadgeDollarSign, value: "$3K+", label: "Max Rebate" },
                  { icon: Clock, value: "24hr", label: "Response" },
                  { icon: Shield, value: "100%", label: "Compliance" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl border border-gray-200 p-4 text-center"
                    >
                      <Icon size={20} className="text-green mx-auto mb-1.5" />
                      <div className="text-lg font-bold text-navy">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Assessment Form ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">
                    Assessment Request Received!
                  </h3>
                  <p className="mt-3 text-gray-500 max-w-md mx-auto">
                    Thank you, {formData.fullName.split(" ")[0]}! One of our
                    energy rebate specialists will review your details and
                    contact you within 24 business hours with your personalised
                    rebate eligibility report.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        propertyType: "",
                        state: "",
                        product: "",
                        ownerConfirm: false,
                        eligibilityConfirm: false,
                        message: "",
                      });
                    }}
                    className="btn-primary mt-8"
                  >
                    Submit Another Assessment
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 md:p-10"
                >
                  <h3 className="text-xl font-bold text-navy mb-1">
                    Free Energy Assessment
                  </h3>
                  <p className="text-sm text-gray-400 mb-8">
                    Fill in your details and we&apos;ll check which government
                    rebates you qualify for.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="John Smith"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors outline-none focus:ring-2 focus:ring-green/30 ${
                            errors.fullName
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50 focus:border-green"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors outline-none focus:ring-2 focus:ring-green/30 ${
                            errors.email
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50 focus:border-green"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="04XX XXX XXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors outline-none focus:ring-2 focus:ring-green/30 ${
                            errors.phone
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50 focus:border-green"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Property Type */}
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Property Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors outline-none appearance-none focus:ring-2 focus:ring-green/30 ${
                            errors.propertyType
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50 focus:border-green"
                          } ${!formData.propertyType ? "text-gray-400" : "text-gray-900"}`}
                        >
                          <option value="" disabled>
                            Select property type
                          </option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                        <svg
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      {errors.propertyType && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.propertyType}
                        </p>
                      )}
                    </div>

                    {/* State */}
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        State <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors outline-none appearance-none focus:ring-2 focus:ring-green/30 ${
                            errors.state
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50 focus:border-green"
                          } ${!formData.state ? "text-gray-400" : "text-gray-900"}`}
                        >
                          <option value="" disabled>
                            Select your state
                          </option>
                          {states.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      {errors.state && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.state}
                        </p>
                      )}
                    </div>

                    {/* Product of Interest */}
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Product of Interest{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Zap
                          size={16}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm transition-colors outline-none appearance-none focus:ring-2 focus:ring-green/30 ${
                            errors.product
                              ? "border-red-400 bg-red-50/50"
                              : "border-gray-200 bg-gray-50 focus:border-green"
                          } ${!formData.product ? "text-gray-400" : "text-gray-900"}`}
                        >
                          <option value="" disabled>
                            Select a product
                          </option>
                          {products.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      {errors.product && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.product}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Additional Details{" "}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your current energy setup, property size, or any specific questions…"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm transition-colors outline-none focus:ring-2 focus:ring-green/30 focus:border-green resize-none"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="ownerConfirm"
                          checked={formData.ownerConfirm}
                          onChange={handleChange}
                          className="mt-0.5 w-5 h-5 rounded border-gray-300 text-green accent-green focus:ring-green/30 shrink-0"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-navy transition-colors">
                          I confirm I am the property owner or have authority to
                          authorise energy upgrades on this property.{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.ownerConfirm && (
                        <p className="mt-1 ml-8 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.ownerConfirm}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="eligibilityConfirm"
                          checked={formData.eligibilityConfirm}
                          onChange={handleChange}
                          className="mt-0.5 w-5 h-5 rounded border-gray-300 text-green accent-green focus:ring-green/30 shrink-0"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-navy transition-colors">
                          I confirm the property meets rebate eligibility
                          requirements (e.g. existing electric/gas hot water
                          system for heat pump upgrades).{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.eligibilityConfirm && (
                        <p className="mt-1 ml-8 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} />{" "}
                          {errors.eligibilityConfirm}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base mt-8 py-3.5"
                  >
                    <Send size={18} />
                    Request Free Assessment
                  </button>

                  <p className="mt-4 text-xs text-gray-400 text-center">
                    By submitting this form you agree to our{" "}
                    <a
                      href="/privacy"
                      className="underline hover:text-navy transition-colors"
                    >
                      Privacy Policy
                    </a>
                    . We&apos;ll never share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
