import { HiScale, HiCheckCircle, HiDocumentText, HiOfficeBuilding } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card, StatCard } from '../ui/Card'
import { Button } from '../ui/Button'

const landFeatures = [
  {
    title: 'Parcel Sizes',
    description: 'Choose from 25-acre and 30-acre plots with the option to combine into 60-acre blocks for larger operations.',
    icon: HiScale,
  },
  {
    title: 'Land Readiness',
    description: 'Fully leveled terrain with less than 2% slope, cleared and prepared for immediate construction.',
    icon: HiCheckCircle,
  },
  {
    title: 'Soil & Load-Bearing',
    description: 'Excellent soil bearing capacity of ~180 kN/m², suitable for heavy industrial foundations.',
    icon: HiDocumentText,
  },
  {
    title: 'Zoning & Legal',
    description: 'Categorized under "Industrial Zone I" with MIDC compliance and environmental clearance obtained.',
    icon: HiOfficeBuilding,
  },
]

const landStats = [
  { value: '25-30', label: 'Acres per Plot' },
  { value: '<2%', label: 'Land Slope' },
  { value: '180', label: 'kN/m² Bearing Capacity' },
  { value: '100%', label: 'MIDC Compliant' },
]

export function Land() {
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
              The Land
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Premium industrial land parcels with complete infrastructure and clear titles,
              ready for your business expansion.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="-mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {landStats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className="sm:p-8"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <SectionHeading
          title="Land Features & Specifications"
          subtitle="Our industrial land parcels are meticulously prepared and fully compliant with all regulatory requirements."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {landFeatures.map((feature, index) => (
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

      {/* CTA Section */}
      <Section bgColor="bg-secondary-900" className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Ready to Explore Our Land Parcels?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-300">
              Schedule a site visit to experience the strategic location and infrastructure advantages firsthand.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-secondary-900 hover:bg-secondary-50"
              >
                Book Site Visit
              </Button>
              <Button
                to="/infrastructure"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-secondary-800"
              >
                View Infrastructure
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 