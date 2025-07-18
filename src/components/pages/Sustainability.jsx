import { HiSun, HiCloud, HiLightningBolt, HiOutlineGlobe } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card, FeatureCard } from '../ui/Card'
import { Button } from '../ui/Button'

const sustainabilityFeatures = [
  {
    title: 'Solar-Powered Infrastructure',
    description: 'Our industrial park features solar-powered street lights and common areas, reducing carbon footprint.',
    icon: HiSun,
    metrics: 'Reduces energy consumption by 40%',
  },
  {
    title: 'Rainwater Harvesting',
    description: 'Comprehensive rainwater harvesting systems to conserve water and maintain groundwater levels.',
    icon: HiCloud,
    metrics: '500,000 liters annual water conservation',
  },
  {
    title: 'Energy Efficiency',
    description: 'Smart grid infrastructure and energy-efficient systems throughout the industrial park.',
    icon: HiLightningBolt,
    metrics: '30% lower energy costs',
  },
  {
    title: 'Green Buffer Zones',
    description: 'Dedicated green zones with native trees for dust control and environmental balance.',
    icon: HiOutlineGlobe,
    metrics: '25% area dedicated to green spaces',
  },
]

const initiatives = [
  {
    title: 'Sustainable Infrastructure Design',
    description: 'Our industrial park is designed with sustainability at its core. From energy-efficient building designs to smart resource management systems, every aspect is optimized for minimal environmental impact while maximizing operational efficiency.',
    image: '/images/sustainable-design.jpg',
    imageAlt: 'Sustainable infrastructure design',
  },
  {
    title: 'Zero-Discharge Water Management',
    description: 'Advanced water treatment and recycling systems ensure zero discharge of industrial effluents. Our water management approach includes rainwater harvesting, wastewater treatment, and water recycling facilities.',
    image: '/images/water-management.jpg',
    imageAlt: 'Water treatment facility',
    reverse: true,
  },
  {
    title: 'Renewable Energy Integration',
    description: 'Solar panels and smart grid systems provide clean energy options for our tenants. The infrastructure is designed to be EV-charging ready and supports renewable energy initiatives.',
    image: '/images/renewable-energy.jpg',
    imageAlt: 'Solar panels and renewable energy systems',
  },
]

export function Sustainability() {
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
              Sustainability
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Our commitment to environmental responsibility through sustainable infrastructure
              and eco-friendly practices.
            </p>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section>
        <SectionHeading
          title="Eco-Friendly Features"
          subtitle="Discover how our sustainable infrastructure benefits both the environment and your business."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {sustainabilityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="relative rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm"
              >
                <Card
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 0.2}
                />
                <div className="mt-4 inline-flex rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                  {feature.metrics}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Initiatives Section */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Sustainable Initiatives"
          subtitle="Our comprehensive approach to environmental sustainability."
          centered
          className="mb-16"
        />
        <div className="space-y-24">
          {initiatives.map((initiative) => (
            <FeatureCard
              key={initiative.title}
              title={initiative.title}
              description={initiative.description}
              image={initiative.image}
              imageAlt={initiative.imageAlt}
              reverse={initiative.reverse}
            />
          ))}
        </div>
      </Section>

      {/* Environmental Impact */}
      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Environmental Impact"
                subtitle="Our sustainable practices contribute to significant environmental benefits:"
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
                  <span className="text-secondary-600">
                    40% reduction in carbon emissions
                  </span>
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
                  <span className="text-secondary-600">
                    50% water recycling and reuse
                  </span>
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
                  <span className="text-secondary-600">
                    1000+ trees planted annually
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-primary-50 p-8">
                <h3 className="text-lg font-semibold text-primary-900">
                  Future Initiatives:
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
                    <span className="text-primary-900">
                      100% renewable energy transition
                    </span>
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
                    <span className="text-primary-900">
                      EV charging infrastructure
                    </span>
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
                    <span className="text-primary-900">
                      Waste-to-energy conversion
                    </span>
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
              Join Our Sustainable Future
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Be part of an eco-conscious business community committed to sustainable growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Contact Us
              </Button>
              <Button
                to="/location"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-primary-600"
              >
                View Location
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 