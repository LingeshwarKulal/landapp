import { HiCube, HiOfficeBuilding, HiSun, HiBeaker } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card, FeatureCard } from '../ui/Card'
import { Button } from '../ui/Button'

const industries = [
  {
    title: 'Manufacturing',
    description: 'Perfect for light and medium manufacturing operations including auto components, packaging, and assembly lines.',
    icon: HiCube,
    features: [
      'High power capacity for machinery',
      'Loading/unloading bays',
      'Waste management systems',
      'Storage facilities',
    ],
  },
  {
    title: 'Warehousing & Logistics',
    description: 'Ideal for 3PL providers, e-commerce fulfillment centers, and distribution hubs with excellent connectivity.',
    icon: HiOfficeBuilding,
    features: [
      'Wide internal roads',
      'Multiple entry/exit points',
      'High ceiling clearance',
      'Security systems',
    ],
  },
  {
    title: 'Renewable Energy',
    description: 'Large open spaces perfect for solar farms and renewable energy projects with grid connectivity.',
    icon: HiSun,
    features: [
      'Unobstructed sunlight',
      'Grid connection ready',
      'Environmental clearance',
      'Technical support',
    ],
  },
  {
    title: 'Food Processing',
    description: 'Specialized zones for food processing units with necessary certifications and infrastructure.',
    icon: HiBeaker,
    features: [
      'Water treatment plants',
      'Cold storage facility',
      'Quality testing labs',
      'Waste management',
    ],
  },
]

const successStories = [
  {
    title: 'Major E-commerce Fulfillment Center',
    description: 'One of India\'s largest e-commerce players established their 30-acre fulfillment center, leveraging our strategic location and infrastructure to serve millions of customers across western India.',
    image: '/images/ecommerce-center.jpg',
    imageAlt: 'E-commerce fulfillment center',
  },
  {
    title: 'Automotive Components Manufacturing',
    description: 'A leading auto components manufacturer set up their state-of-the-art facility, benefiting from our power infrastructure and skilled labor availability.',
    image: '/images/auto-manufacturing.jpg',
    imageAlt: 'Automotive manufacturing facility',
    reverse: true,
  },
]

export function Industries() {
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
              Industries We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Our industrial park is designed to support diverse industries with specialized
              infrastructure and facilities tailored to your needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section>
        <SectionHeading
          title="Suitable for Multiple Industries"
          subtitle="Our versatile infrastructure and strategic location make us the perfect choice for various industrial operations."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="relative rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm"
              >
                <Card
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                  delay={index * 0.2}
                />
                <ul className="mt-8 space-y-3">
                  {industry.features.map((feature) => (
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

      {/* Success Stories */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Success Stories"
          subtitle="Learn how businesses are thriving in our industrial park."
          centered
          className="mb-16"
        />
        <div className="space-y-24">
          {successStories.map((story) => (
            <FeatureCard
              key={story.title}
              title={story.title}
              description={story.description}
              image={story.image}
              imageAlt={story.imageAlt}
              reverse={story.reverse}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary-700" className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Ready to Join Our Industrial Community?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Discover how our industrial park can support your business growth.
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
                to="/lease-models"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-primary-600"
              >
                View Lease Models
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 