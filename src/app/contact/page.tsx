"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Zap,
  MessageSquare,
  Building2,
  User,
} from "lucide-react";

const products = [
  "Heat Pump Hot Water System",
  "Reverse Cycle Air Conditioning",
  "Solar Panel Installation",
  "Battery Storage System",
  "Multiple Products",
  "Not Sure — Need Advice",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
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
    if (!formData.product)
      newErrors.product = "Please select a product of interest.";
    if (!formData.ownerConfirm)
      newErrors.ownerConfirm =
        "You must confirm you are the property owner.";
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
      {/* ── Page Header ── */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 bg-green/10 text-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <MessageSquare size={16} />
            We&apos;re Here to Help
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Ready to start saving? Fill out the form below and our energy
            rebate specialists will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── Contact Info Sidebar ── */}
            <div className="lg:col-span-1 space-y-6">
              {/* Info card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                  <Zap size={20} className="text-green" />
                  Contact Details
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-green" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Email
                      </span>
                      <a
                        href="mailto:info@energyrebatesolutions.com.au"
                        className="text-sm text-navy font-medium hover:text-green transition-colors break-all"
                      >
                        info@energyrebatesolutions.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-green" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Phone
                      </span>
                      <a
                        href="tel:1300000000"
                        className="text-sm text-navy font-medium hover:text-green transition-colors"
                      >
                        1300 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-green" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Business Hours
                      </span>
                      <span className="block text-sm text-navy font-medium">
                        Mon – Fri: 8am – 6pm
                      </span>
                      <span className="block text-sm text-navy font-medium">
                        Sat: 9am – 4pm
                      </span>
                      <span className="block text-xs text-gray-400 mt-0.5">
                        Sun &amp; Public Holidays: Closed
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-green" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Location
                      </span>
                      <span className="text-sm text-navy font-medium">
                        Melbourne, VIC Australia
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick-trust card */}
              <div className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green" />
                  Why Contact Us?
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    "Free, no-obligation energy assessment",
                    "Rebate eligibility check",
                    "Transparent pricing — no hidden fees",
                    "Response within 24 business hours",
                    "Accredited & fully insured installers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <ArrowRight
                        size={14}
                        className="text-green mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                /* Success state */
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">
                    Thank You!
                  </h3>
                  <p className="mt-3 text-gray-500 max-w-md mx-auto">
                    Your enquiry has been received. One of our energy rebate
                    specialists will be in touch within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        propertyType: "",
                        product: "",
                        ownerConfirm: false,
                        eligibilityConfirm: false,
                        message: "",
                      });
                    }}
                    className="btn-primary mt-8"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 md:p-10"
                >
                  <h3 className="text-xl font-bold text-navy mb-1">
                    Request Your Free Assessment
                  </h3>
                  <p className="text-sm text-gray-400 mb-8">
                    Fill in the details below and we&apos;ll check which
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
                        {/* Custom chevron */}
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

                    {/* Product of Interest — full width */}
                    <div className="sm:col-span-2">
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

                    {/* Message — optional, full width */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-navy mb-1.5"
                      >
                        Additional Message{" "}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your property, current energy setup, or any questions…"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm transition-colors outline-none focus:ring-2 focus:ring-green/30 focus:border-green resize-none"
                      />
                    </div>
                  </div>

                  {/* ── Mandatory Checkboxes ── */}
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
                    Submit Enquiry
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
