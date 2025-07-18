import { HiLocationMarker, HiTruck, HiOfficeBuilding, HiUserGroup } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card, FeatureCard, StatCard } from '../ui/Card'
import { Button } from '../ui/Button'
import { Image } from '../ui/Image'

const locationFeatures = [
  {
    title: 'Strategic Connectivity',
    description: 'Direct access to NH-48 and just 45 minutes from Pune city center, offering excellent logistics connectivity.',
    icon: HiLocationMarker,
  },
  {
    title: 'Transport Hub',
    description: 'Proximity to major transport hubs including airports, seaports, and railway stations.',
    icon: HiTruck,
  },
  {
    title: 'Industrial Ecosystem',
    description: 'Part of a thriving industrial corridor with supporting businesses and infrastructure.',
    icon: HiOfficeBuilding,
  },
  {
    title: 'Skilled Workforce',
    description: 'Access to skilled and semi-skilled labor from nearby urban and rural areas.',
    icon: HiUserGroup,
  },
]

const distances = [
  { value: '10', label: 'Minutes to NH-48' },
  { value: '45', label: 'Minutes to Pune' },
  { value: '3.5', label: 'Hours to Mumbai Port' },
  { value: '30', label: 'Minutes to Airport' },
]

const advantages = [
  {
    title: 'Prime Industrial Location',
    description: 'Our industrial park is strategically located in one of Maharashtra\'s fastest-growing industrial corridors. The location offers excellent connectivity to major business hubs and transport infrastructure.',
    image: 'industrial-corridor',
    imageAlt: 'Aerial view of industrial corridor',
  },
  {
    title: 'Logistics Advantage',
    description: 'With direct access to NH-48 and proximity to major ports and airports, our location provides optimal logistics efficiency for your supply chain operations.',
    image: 'logistics-hub',
    imageAlt: 'Logistics and transportation hub',
    reverse: true,
  },
  {
    title: 'Supporting Infrastructure',
    description: 'The surrounding area features well-developed social infrastructure including residential areas, healthcare facilities, and educational institutions to support your workforce.',
    image: 'social-infrastructure',
    imageAlt: 'Social infrastructure and amenities',
  },
]

export function Location() {
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
            src="location-aerial"
            alt="Aerial view of the location"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/80 to-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl font-display">
              Location Advantage
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Strategically located for optimal business connectivity and operational efficiency.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="-mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {distances.map((stat) => (
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

      {/* Features Grid */}
      <Section>
        <SectionHeading
          title="Strategic Location Benefits"
          subtitle="Our location offers multiple advantages for your business operations."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {locationFeatures.map((feature, index) => (
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

      {/* Map Section */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Interactive Location Map"
          subtitle="Explore our strategic location and surrounding infrastructure."
          centered
        />
        <div className="mt-16 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="location-map"
            alt="Interactive location map"
            className="w-full h-full object-cover"
          />
        </div>
      </Section>

      {/* Location Advantages */}
      <Section>
        <div className="space-y-24">
          {advantages.map((advantage) => (
            <FeatureCard
              key={advantage.title}
              title={advantage.title}
              description={advantage.description}
              image={advantage.image}
              imageAlt={advantage.imageAlt}
              reverse={advantage.reverse}
            />
          ))}
        </div>
      </Section>

      {/* Connectivity Details */}
      <Section bgColor="bg-secondary-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Transport Connectivity"
                subtitle="Multiple transport options ensure seamless accessibility:"
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
                    Direct access to National Highway NH-48
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
                    30 minutes from International Airport
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
                    Regular freight train services
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl bg-primary-50 p-8">
                <h3 className="text-lg font-semibold text-primary-900">
                  Local Amenities:
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
                      Hotels and accommodation
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
                      Healthcare facilities
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
                      Educational institutions
                    </span>
                  </li>
                </ul>
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
            src="location-aerial"
            alt="Industrial park aerial view"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/95 via-secondary-900/90 to-secondary-900/95" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-6">
              Visit Our Location
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-8 text-secondary-200 mb-10">
              Schedule a site visit to experience our strategic location advantage firsthand.
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