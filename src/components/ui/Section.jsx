import { motion } from 'framer-motion'

export function Section({
  children,
  className = '',
  id,
  fullWidth = false,
  noPadding = false,
  bgColor = 'bg-white',
}) {
  return (
    <section id={id} className={`${bgColor} ${!noPadding ? 'section-padding' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${!fullWidth ? 'container mx-auto container-padding' : ''}`}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeading({ title, subtitle, centered = false, className = '' }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-secondary-600">
          {subtitle}
        </p>
      )}
    </div>
  )
} 