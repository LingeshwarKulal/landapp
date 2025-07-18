import { HiLightningBolt, HiWifi, HiShieldCheck, HiTruck } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card, FeatureCard } from '../ui/Card'
import { Button } from '../ui/Button'
import { Image } from '../ui/Image'

const infrastructureFeatures = [
  {
    title: 'Power Supply',
    description: '33 kV substation with backup generator ensuring uninterrupted power supply for your operations.',
    icon: HiLightningBolt,
  },
  {
    title: 'Water Supply',
    description: 'Underground water mains with 500 KL/day capacity, meeting all industrial requirements.',
    icon: HiWifi,
  },
  {
    title: 'Security Systems',
    description: '24×7 gated entry with CCTV monitoring and trained on-site security teams.',
    icon: HiShieldCheck,
  },
  {
    title: 'Internal Roads',
    description: '12-metre wide internal roads designed for 40-ft trailers with concrete paving for heavy loads.',
    icon: HiTruck,
  },
]

const detailedFeatures = [
  {
    title: 'State-of-the-Art Power Infrastructure',
    description: 'Our dedicated 33 kV substation ensures reliable power supply with backup generators for uninterrupted operations. The infrastructure is designed to handle heavy industrial loads with built-in redundancy.',
    image: 'power-substation',
    imageAlt: '33 kV power substation',
  },
  {
    title: 'Robust Water Management',
    description: 'Advanced underground water distribution system with 500 KL/day capacity. The network includes dedicated industrial and potable water lines, along with comprehensive water treatment facilities.',
    image: 'water-system',
    imageAlt: 'Water treatment and distribution system',
    reverse: true,
  },
  {
    title: 'Advanced Security Infrastructure',
    description: 'Comprehensive security system featuring 24/7 CCTV surveillance, automated entry gates, and trained security personnel. The entire premises is monitored from a central security command center.',
    image: 'security-system',
    imageAlt: 'Security monitoring system',
  },
]

export function Infrastructure() {
  return (
    <>
      {/* Hero Section */}
      <Section
        noPadding
        fullWidth
        className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100 to-white pt-14"
      >
        <div className="absolute inset-0">
          <Image
            src="hero-infrastructure"
            alt="Infrastructure overview"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/80 to-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl font-display">
              Infrastructure & Utilities
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              World-class infrastructure and utilities designed to support your industrial operations
              with maximum efficiency and reliability.
            </p>
          </div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section>
        <SectionHeading
          title="Complete Infrastructure Solution"
          subtitle="Our industrial park features comprehensive infrastructure designed to meet the demands of modern industrial operations."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {infrastructureFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 0.2}
              />
            ))}
          </dl>
        </div>
      </Section>

      {/* Detailed Features */}
      <Section bgColor="bg-secondary-50">
        <div className="space-y-24">
          {detailedFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imageAlt={feature.imageAlt}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </Section>

      {/* Maintenance Section */}
      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Professional Maintenance"
                subtitle="Our dedicated maintenance team ensures all infrastructure remains in optimal condition, minimizing downtime and maximizing efficiency."
              />
              <div className="mt-8">
                <Button to="/contact" size="lg">
                  Contact Support Team
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-lg font-semibold text-secondary-900">
                  24/7 Technical Support
                </h3>
                <p className="mt-2 text-secondary-600">
                  Round-the-clock technical support team available for emergency repairs and maintenance.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-lg font-semibold text-secondary-900">
                  Preventive Maintenance
                </h3>
                <p className="mt-2 text-secondary-600">
                  Regular inspections and maintenance schedules to prevent infrastructure issues.
                </p>
              </div>
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-lg font-semibold text-secondary-900">
                  Quick Response Time
                </h3>
                <p className="mt-2 text-secondary-600">
                  Dedicated team ensures rapid response to any infrastructure-related concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section noPadding fullWidth className="relative isolate overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="hero-infrastructure"
            alt="Industrial park infrastructure"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/95 via-secondary-900/90 to-secondary-900/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-6">
              Ready to Experience Our Infrastructure?
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-8 text-secondary-200 mb-10">
              Schedule a site visit to see our world-class infrastructure and utilities in action.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-secondary-900 hover:bg-secondary-50 min-w-[160px]"
              >
                Book Site Visit
              </Button>
              <Button
                to="/industries"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 min-w-[160px]"
              >
                View Industries
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 