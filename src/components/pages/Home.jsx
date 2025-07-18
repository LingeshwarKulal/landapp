import { motion } from 'framer-motion'
import { HiOutlineLocationMarker, HiOutlineLightningBolt, HiOutlineClock } from 'react-icons/hi'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'
import { Image, Video } from '../ui/Image'
import { useEffect, useState } from 'react'

const features = [
  {
    title: 'Prime Location',
    description: 'Strategically located near Pune and NH-48, offering excellent connectivity for your business.',
    icon: HiOutlineLocationMarker,
    image: 'feature-infrastructure',
  },
  {
    title: 'Ready Infrastructure',
    description: 'Immediate access to power, water, and high-speed internet connections for seamless operations.',
    icon: HiOutlineLightningBolt,
    image: 'feature-logistics',
  },
  {
    title: 'Flexible Terms',
    description: 'Choose from flexible lease terms ranging from 3 to 25 years to match your business needs.',
    icon: HiOutlineClock,
    image: 'feature-manufacturing',
  },
]

const stats = [
  { value: '500+', label: 'Acres Developed' },
  { value: '50+', label: 'Business Partners' },
  { value: '24/7', label: 'Security & Support' },
  { value: '100%', label: 'Power Backup' },
]

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section
        noPadding
        fullWidth
        className="relative min-h-[100vh] md:min-h-[90vh] flex items-center bg-secondary-900 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="hero-main"
            alt="Industrial park aerial view"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/20" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white font-display mb-4 sm:mb-6">
              Premium Industrial Land for Your Business Growth
            </h1>
            <p className="text-lg sm:text-xl text-secondary-200 mb-8 sm:mb-10">
              25–30 acre ready-infrastructure parcels with world-class facilities and strategic connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                to="/contact"
                size="lg"
                className="w-full sm:w-auto bg-white text-secondary-900 hover:bg-secondary-50 text-center"
              >
                Book Site Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-center"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <div className="relative z-10 -mt-8 sm:-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <dt className="text-sm font-semibold text-secondary-600">{stat.label}</dt>
                <dd className="mt-2 text-2xl sm:text-3xl font-bold text-primary-600">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <Section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-secondary-900 font-display">
              Everything Your Business Needs
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-secondary-600">
              Premium industrial land with comprehensive infrastructure, perfect for manufacturing,
              logistics, and warehousing operations.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/20 to-transparent" />
                </div>
                <div className="relative mt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <feature.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900">{feature.title}</h3>
                  </div>
                  <p className="mt-4 text-base sm:text-lg text-secondary-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Video Section */}
      <Section className="bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:pr-8"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-secondary-900 font-display mb-4 sm:mb-6">
                Experience Our Industrial Park
              </h2>
              <p className="text-base sm:text-lg text-secondary-600 mb-6 sm:mb-8">
                Take a virtual tour of our world-class facilities and infrastructure. See how
                our strategic location and modern amenities can benefit your business.
              </p>
              <Button to="/gallery" size="lg" className="w-full sm:w-auto text-center">
                View Gallery
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Video
                  src="aerial-drone"
                  poster="video-aerial"
                  title="Aerial drone footage of industrial park"
                  className="w-full aspect-video"
                />
              </div>
            </motion.div>
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mb-4 sm:mb-6">
              Book a site visit today and explore the perfect location for your next business venture
            </h2>
            <p className="mx-auto max-w-xl text-base sm:text-lg leading-8 text-secondary-200 mb-8 sm:mb-10">
              Experience our world-class infrastructure and strategic location firsthand. Our team is ready to show you around and discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button
                to="/contact"
                size="lg"
                className="w-full sm:w-auto bg-white text-secondary-900 hover:bg-secondary-50 min-w-[160px] text-center"
              >
                Contact Us
              </Button>
              <Button
                to="/gallery"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 min-w-[160px] text-center"
              >
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
} 