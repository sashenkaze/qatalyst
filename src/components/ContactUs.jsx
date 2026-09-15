import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const highlights = [
  'Fast response from an expert team, not an automated bot',
  'Free initial consultation with no commitment',
  'Your business data and information remain confidential',
];

const contactChannels = [
  { icon: Phone, label: 'Phone', value: '+62 21 27893347' },
  { icon: Mail, label: 'Email', value: 'sales@hbm.co.id' },
  {
    icon: MapPin,
    label: 'Office',
    value:
      'Soho Podomoro City 16th Floor Suite 1629, Jl. Letjend. S. Parman Kav.28 Jakarta Barat 11470',
  },
];

const subjects = [
  'General inquiry',
  'Request a demo',
  'Product & solution info',
  'Technical support',
  'Partnership',
  'Other',
];

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-ink-950 outline-none transition placeholder:text-gray-400 focus:border-cyan-400';

const labelClass = 'mb-1 block text-sm font-medium text-mist-200';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-us" className="bg-[#F8FAFC] pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-10 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left column: intro + contact channels */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Get in Touch</p>
          <h2 className="mt-5 text-4xl font-semibold text-violet-600">Let's Start a Conversation</h2>
          <p className="mt-4 text-lg leading-8 text-mist-300">
            Have questions about QAtalyst, need technical consultation, or want to see the platform in
            action? Our team is ready to respond within 1 business day.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10">
                  <Check className="h-3.5 w-3.5 text-violet-400" />
                </span>
                <span className="text-mist-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            {contactChannels.map(({ icon: Icon, label, value }, idx) => (
              <React.Fragment key={label}>
                {idx > 0 && <div className="my-6 border-t border-gray-200" />}
                <div className="flex items-start gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-cyan-400" />
                  <div className="min-w-0">
                    <p className="text-sm text-mist-400">{label}</p>
                    <p className="break-all text-lg text-ink-950">{value}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right column: message form */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <h2 className="mb-1 text-2xl font-bold text-ink-950">Send a Message</h2>
          <p className="mb-5 text-sm text-mist-300">
            Fill in the form below and our team will contact you shortly.
          </p>

          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10">
                <Check className="h-7 w-7 text-violet-400" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink-950">Message sent!</h3>
              <p className="mt-2 max-w-sm text-sm text-mist-300">
                Thanks for reaching out — our team will get back to you within 1 business day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-cyan-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cu-first-name" className={labelClass}>
                    First Name <span className="text-cyan-400">*</span>
                  </label>
                  <input id="cu-first-name" required name="firstName" placeholder="John" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="cu-last-name" className={labelClass}>
                    Last Name <span className="text-cyan-400">*</span>
                  </label>
                  <input id="cu-last-name" required name="lastName" placeholder="Doe" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="cu-email" className={labelClass}>
                  Business Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="cu-email"
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cu-phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input id="cu-phone" name="phone" placeholder="+62..." className={inputClass} />
                </div>
                <div>
                  <label htmlFor="cu-company" className={labelClass}>
                    Company <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="cu-company"
                    required
                    name="company"
                    placeholder="Company name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cu-subject" className={labelClass}>
                  Subject
                </label>
                <select id="cu-subject" name="subject" className={inputClass}>
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="cu-message" className={labelClass}>
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="cu-message"
                  required
                  name="message"
                  rows="4"
                  placeholder="Tell us about your needs or questions..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send Message
              </button>

              <p className="px-4 text-center text-xs text-mist-400">
                By submitting this form, you agree to our Privacy Policy. Your data will be kept
                confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

