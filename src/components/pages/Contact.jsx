import { useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Button } from '../ui/Button'
import { Image } from '../ui/Image'

const contactMethods = [
  {
    icon: HiPhone,
    name: 'Phone',
    description: 'Monday to Friday, 9AM to 6PM IST',
    value: '+91 (234) 567-8900',
    href: 'tel:+912345678900',
  },
  {
    icon: HiMail,
    name: 'Email',
    description: 'We\'ll respond within 24 hours',
    value: 'info@landlease.com',
    href: 'mailto:info@landlease.com',
  },
  {
    icon: HiLocationMarker,
    name: 'Office',
    description: 'Visit us at our office',
    value: 'Mumbai-Pune Expressway, Maharashtra',
    href: 'https://maps.google.com',
  },
  {
    icon: HiOfficeBuilding,
    name: 'Site Location',
    description: 'Industrial park location',
    value: 'Near NH-48, Pune, Maharashtra',
    href: 'https://maps.google.com',
  },
]

const faqs = [
  {
    question: 'What is the minimum lease tenure?',
    answer: 'Our minimum lease tenure is 3 years, with flexible options up to 25 years depending on your business requirements.',
  },
  {
    question: 'Can I expand later if I need more land?',
    answer: 'Yes, we offer expansion options subject to availability. We can also reserve adjacent plots for future expansion needs.',
  },
  {
    question: 'Are all government approvals already in place?',
    answer: 'Yes, we have obtained all necessary government approvals including environmental clearance and MIDC compliance.',
  },
  {
    question: 'What kind of industries are permitted?',
    answer: 'We accommodate various industries including manufacturing, logistics, warehousing, and food processing. Contact us to discuss your specific requirements.',
  },
  {
    question: 'Can I build a custom facility?',
    answer: 'Yes, we offer build-to-suit options where you can customize the facility according to your specifications.',
  },
  {
    question: 'Is water/power available from day one?',
    answer: 'Yes, all basic infrastructure including power, water, and road connectivity is ready for immediate use.',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic will be added here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {/* Hero Section */}
      <Section
        noPadding
        fullWidth
        className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100 to-white pt-14"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl font-display">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Get in touch to discuss your industrial land leasing requirements.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => (
            <div
              key={method.name}
              className="rounded-2xl border border-secondary-200 p-8 hover:border-primary-200 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                <method.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-secondary-900">{method.name}</h3>
              <p className="mt-2 text-sm text-secondary-600">{method.description}</p>
              <a
                href={method.href}
                className="mt-4 block text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {method.value}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section bgColor="bg-secondary-50">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="Send us a message"
            subtitle="Fill out the form below and we'll get back to you within 24 hours."
            centered
          />

          <form onSubmit={handleSubmit} className="mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-secondary-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-secondary-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-secondary-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium leading-6 text-secondary-900"
                >
                  Company
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium leading-6 text-secondary-900"
                >
                  Industry Type
                </label>
                <div className="mt-2">
                  <select
                    name="industry"
                    id="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="logistics">Logistics & Warehousing</option>
                    <option value="food">Food Processing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-secondary-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-secondary-900 shadow-sm ring-1 ring-inset ring-secondary-300 placeholder:text-secondary-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about our industrial park."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-secondary-200">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-8">
              <h3 className="text-lg font-semibold leading-7 text-secondary-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-secondary-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Map Section */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Our Location"
          subtitle="Visit us at our office or industrial park location."
          centered
        />
        <div className="mt-16 aspect-[16/9] w-full rounded-2xl bg-secondary-100">
          {/* Map component will be added here */}
          <div className="flex h-full items-center justify-center">
            <p className="text-secondary-600">Interactive map coming soon</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section noPadding fullWidth className="relative isolate overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="hero-main"
            alt="Industrial park aerial view"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/95 via-secondary-900/90 to-secondary-900/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-6">
              Ready to Get Started?
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-8 text-secondary-200 mb-10">
              Book a site visit or request a custom quote for your business needs. Our team will get back to you within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-white text-secondary-900 hover:bg-secondary-50 min-w-[160px]"
                onClick={() => document.getElementById('name').focus()}
              >
                Contact Now
              </Button>
              <Button
                to="/gallery"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 min-w-[160px]"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 