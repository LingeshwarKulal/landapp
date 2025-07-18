import { HiClock, HiCurrencyRupee, HiOfficeBuilding, HiChartBar } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Image } from '../ui/Image'
import { motion } from 'framer-motion'

const leaseOptions = [
  {
    title: 'Short-Term Lease',
    description: 'Flexible 3-5 year leases perfect for businesses looking to test the market or maintain agility.',
    icon: HiClock,
    features: [
      'Minimum 3-year term',
      'Flexible renewal options',
      'Quick possession',
      'Standard infrastructure',
    ],
  },
  {
    title: 'Long-Term Lease',
    description: 'Extended 10-25 year leases with premium benefits and customization options for established businesses.',
    icon: HiCurrencyRupee,
    features: [
      'Up to 25-year term',
      'Customization allowed',
      'Infrastructure upgrades',
      'Priority maintenance',
    ],
  },
  {
    title: 'Build-to-Suit',
    description: 'Custom development on leased land with specifications tailored to your business requirements.',
    icon: HiOfficeBuilding,
    features: [
      'Custom construction',
      'Technical support',
      'Phased development',
      'Dedicated team',
    ],
  },
  {
    title: 'Revenue Share Model',
    description: 'Innovative partnership model combining fixed rent with revenue sharing for aligned growth.',
    icon: HiChartBar,
    features: [
      'Lower fixed costs',
      'Growth partnership',
      'Flexible terms',
      'Performance linked',
    ],
  },
]

const benefits = [
  {
    title: 'Capital Efficiency',
    description: 'Preserve your capital for core business operations instead of large real estate investments. Our lease models provide the flexibility to scale without heavy upfront costs.',
    image: '/images/capital-efficiency.jpg',
    imageAlt: 'Financial planning and growth',
  },
  {
    title: 'Operational Flexibility',
    description: 'Choose from multiple lease durations and space options. Expand or modify your facility as your business grows, with full support from our infrastructure team.',
    image: '/images/operational-flexibility.jpg',
    imageAlt: 'Flexible operations and scaling',
    reverse: true,
  },
]

export function LeaseModels() {
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
              Lease Models & Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Flexible leasing solutions designed to support your business growth with
              customizable terms and transparent pricing.
            </p>
          </div>
        </div>
      </Section>

      {/* Lease Options */}
      <Section>
        <SectionHeading
          title="Choose Your Lease Model"
          subtitle="We offer various leasing options to match your business requirements and growth plans."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {leaseOptions.map((option, index) => (
              <div
                key={option.title}
                className="relative rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm"
              >
                <Card
                  title={option.title}
                  description={option.description}
                  icon={option.icon}
                  delay={index * 0.2}
                />
                <ul className="mt-8 space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3 text-secondary-600">
                      <svg
                        className="h-5 w-5 flex-none text-primary-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Benefits of Leasing"
          subtitle="Discover why leasing is the smarter choice for your business growth."
          centered
          className="mb-16"
        />
        <div className="space-y-32">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                benefit.reverse ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={benefit.reverse ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold tracking-tight text-secondary-900 font-display mb-6">
                      {benefit.title}
                    </h3>
                    <p className="text-lg leading-8 text-secondary-600">
                      {benefit.description}
                    </p>
                    <div className="mt-8">
                      <Button to="/contact" size="lg">
                        Get Started
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Image */}
              <div className={benefit.reverse ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </motion.div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 -left-4 -bottom-4 rounded-2xl bg-secondary-200/10 -z-10" />
                  <div className="absolute -top-2 -right-2 -left-2 -bottom-2 rounded-2xl bg-secondary-200/10 -z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Guide */}
      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Transparent Pricing"
                subtitle="Our lease rates are competitive and transparent, with no hidden costs. Rates vary based on:"
              />
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-x-3">
                  <svg
                    className="h-5 w-5 flex-none text-primary-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-secondary-600">Lease duration and terms</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <svg
                    className="h-5 w-5 flex-none text-primary-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-secondary-600">Parcel size and location</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <svg
                    className="h-5 w-5 flex-none text-primary-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-secondary-600">Infrastructure requirements</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <svg
                    className="h-5 w-5 flex-none text-primary-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-secondary-600">Customization needs</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button to="/contact" size="lg">
                  Get Custom Quote
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-primary-50 p-8">
                <h3 className="text-lg font-semibold text-primary-900">
                  Included in All Leases:
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary-900">Basic infrastructure access</span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary-900">24/7 security services</span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary-900">Maintenance support</span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-primary-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary-900">Property insurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary-700" className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Ready to Discuss Your Lease Options?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Our team will work with you to find the perfect leasing solution for your business needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Get Custom Quote
              </Button>
              <Button
                to="/sustainability"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-primary-600"
              >
                View Sustainability
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 