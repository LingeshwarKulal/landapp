import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { Image } from './Image'

const slides = [
  {
    id: 1,
    image: 'hero-main',
    title: 'Premium Industrial Land',
    subtitle: '25-30 Acre Ready-Infrastructure Parcels',
    description: 'Strategically located near Pune and NH-48 for seamless connectivity',
  },
  {
    id: 2,
    image: 'feature-infrastructure',
    title: 'World-Class Infrastructure',
    subtitle: 'Ready-to-Use Facilities',
    description: 'Power, water, and connectivity available from day one',
  },
  {
    id: 3,
    image: 'feature-logistics',
    title: 'Strategic Location',
    subtitle: 'Perfect for Logistics',
    description: 'Easy access to major transportation hubs and business centers',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[90vh] overflow-hidden bg-secondary-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/70 to-secondary-900/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white"
              >
                <h2 className="text-lg font-semibold text-primary-400 mb-4">
                  {slides[currentSlide].subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-secondary-200 max-w-2xl mx-auto">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <HiArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary-500' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <HiArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
} 