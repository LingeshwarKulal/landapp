import { HiShieldCheck, HiLightBulb, HiGlobe, HiUsers } from 'react-icons/hi'
import { Section, SectionHeading } from '../ui/Section'
import { Card, FeatureCard } from '../ui/Card'
import { Button } from '../ui/Button'
import { Image } from '../ui/Image'

const values = [
  {
    title: 'Trust & Transparency',
    description: 'We believe in building long-term relationships through clear communication and honest business practices.',
    icon: HiShieldCheck,
  },
  {
    title: 'Innovation',
    description: 'Continuously improving our infrastructure and services to meet evolving business needs.',
    icon: HiLightBulb,
  },
  {
    title: 'Sustainability',
    description: 'Committed to environmentally responsible development and sustainable business practices.',
    icon: HiGlobe,
  },
  {
    title: 'Partnership',
    description: 'Working closely with our clients to support their growth and success.',
    icon: HiUsers,
  },
]

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to create world-class industrial infrastructure.',
  },
  {
    year: '2017',
    title: 'Land Acquisition',
    description: 'Acquired 500 acres of prime industrial land near Pune.',
  },
  {
    year: '2019',
    title: 'Infrastructure Development',
    description: 'Completed phase 1 of infrastructure development.',
  },
  {
    year: '2021',
    title: 'First Clients',
    description: 'Successfully onboarded our first major industrial clients.',
  },
  {
    year: '2023',
    title: 'Expansion',
    description: 'Initiated phase 2 development with enhanced sustainability features.',
  },
]

const leadership = [
  {
    name: 'Rajesh Kumar',
    role: 'Chief Executive Officer',
    image: 'team-ceo',
    bio: 'Over 25 years of experience in industrial real estate and infrastructure development.',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Operating Officer',
    image: 'team-coo',
    bio: 'Expert in operations management and client relations with 15+ years of experience.',
  },
  {
    name: 'Amit Patel',
    role: 'Chief Technical Officer',
    image: 'team-cto',
    bio: 'Technical expert with extensive experience in industrial infrastructure planning.',
  },
]

const certifications = [
  {
    title: 'Environmental Clearance',
    description: 'All necessary environmental clearances obtained for industrial development.',
    image: 'certifications-ec',
    imageAlt: 'Environmental clearance certification',
  },
  {
    title: 'MIDC Compliance',
    description: 'Fully compliant with Maharashtra Industrial Development Corporation regulations.',
    image: 'certifications-midc',
    imageAlt: 'MIDC compliance certification',
    reverse: true,
  },
]

export function About() {
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
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Building world-class industrial infrastructure for sustainable business growth.
            </p>
          </div>
        </div>
      </Section>

      {/* Company Overview */}
      <Section>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="From vision to reality: Creating Maharashtra's premier industrial park."
            />
            <div className="mt-8 space-y-6 text-secondary-600">
              <p>
                Founded in 2015, we embarked on a mission to create world-class industrial
                infrastructure that enables businesses to thrive. Our journey began with the
                acquisition of strategically located land near Pune.
              </p>
              <p>
                Today, we're proud to host numerous successful businesses in our industrial park,
                providing them with the infrastructure and support they need to grow and succeed.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/contact" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="about-facility"
              alt="Our industrial park facility"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Our Values"
          subtitle="The principles that guide our business and relationships."
          centered
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value, index) => (
              <Card
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                delay={index * 0.2}
              />
            ))}
          </dl>
        </div>
      </Section>

      {/* Milestones Section */}
      <Section>
        <SectionHeading
          title="Our Journey"
          subtitle="Key milestones in our growth story."
          centered
        />

        <div className="mt-16 space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="relative flex items-start space-x-6 lg:space-x-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 font-bold">
                {milestone.year}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-secondary-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Leadership Team"
          subtitle="Meet the experienced professionals leading our organization."
          centered
        />

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {leadership.map((person) => (
            <div key={person.name} className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-secondary-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-primary-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-secondary-600">{person.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionHeading
          title="Certifications & Compliance"
          subtitle="Our commitment to maintaining the highest standards."
          centered
          className="mb-16"
        />
        <div className="space-y-24">
          {certifications.map((certification) => (
            <FeatureCard
              key={certification.title}
              title={certification.title}
              description={certification.description}
              image={certification.image}
              imageAlt={certification.imageAlt}
              reverse={certification.reverse}
            />
          ))}
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
              Partner with Us
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-8 text-secondary-200 mb-10">
              Join our growing community of successful businesses. Let's build the future together.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-secondary-900 hover:bg-secondary-50 min-w-[160px]"
              >
                Contact Us
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