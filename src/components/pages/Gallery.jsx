import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeading } from '../ui/Section'
import { Button } from '../ui/Button'
import { Image, Video } from '../ui/Image'

const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'aerial', name: 'Aerial Views' },
  { id: 'infrastructure', name: 'Infrastructure' },
  { id: 'facilities', name: 'Facilities' },
]

const galleryImages = [
  {
    id: 1,
    src: 'gallery-aerial1',
    alt: 'Aerial view of the industrial park',
    category: 'aerial',
    width: 'lg:col-span-2',
    height: 'lg:row-span-2',
  },
  {
    id: 2,
    src: 'gallery-infrastructure1',
    alt: 'Power substation',
    category: 'infrastructure',
  },
  {
    id: 3,
    src: 'gallery-infrastructure2',
    alt: 'Internal roads',
    category: 'infrastructure',
  },
  {
    id: 4,
    src: 'gallery-aerial2',
    alt: 'Bird\'s eye view of the development',
    category: 'aerial',
    width: 'lg:col-span-2',
  },
  {
    id: 5,
    src: 'gallery-facilities1',
    alt: 'Security gate',
    category: 'facilities',
  },
  {
    id: 6,
    src: 'gallery-facilities2',
    alt: 'Water treatment plant',
    category: 'facilities',
  },
]

const virtualTourSpots = [
  {
    title: 'Main Entrance',
    description: 'Experience our grand entrance with 24/7 security and modern access control.',
    image: 'tour-entrance',
  },
  {
    title: 'Internal Roads',
    description: '12-metre wide roads designed for heavy vehicles and smooth logistics operations.',
    image: 'tour-roads',
  },
  {
    title: 'Utility Infrastructure',
    description: 'State-of-the-art power and water infrastructure ready for industrial use.',
    image: 'tour-utilities',
  },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory)

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
              Gallery
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Explore our industrial park through high-quality images and virtual tours.
            </p>
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl ${image.width || ''} ${
                image.height || ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                aspectRatio="4/3"
                className="rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Virtual Tour Section */}
      <Section bgColor="bg-secondary-50">
        <SectionHeading
          title="Virtual Tour"
          subtitle="Take a virtual walkthrough of our industrial park facilities."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {virtualTourSpots.map((spot, index) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <Image
                src={spot.image}
                alt={spot.title}
                aspectRatio="4/3"
                className="rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary-900">{spot.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{spot.description}</p>
                <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700">
                  View 360° Tour
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Drone Footage Section */}
      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Aerial Drone Footage"
                subtitle="Get a bird's eye view of our expansive industrial park and its world-class infrastructure."
              />
              <div className="mt-8">
                <Button size="lg">
                  Watch Video
                </Button>
              </div>
            </div>
            <div>
              <Video
                src="aerial-drone"
                poster="video-aerial"
                title="Aerial drone footage of industrial park"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary-700" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="gallery-aerial1"
            alt="Industrial park aerial view"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-700/60 mix-blend-multiply" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Ready to See It in Person?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Schedule a site visit to explore our industrial park facilities firsthand.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Book Site Visit
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-primary-600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
} 