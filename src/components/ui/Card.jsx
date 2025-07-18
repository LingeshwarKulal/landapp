import { motion } from 'framer-motion'

export function Card({ title, description, icon: Icon, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-x-4">
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
            <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
          </div>
        )}
        <h3 className="text-lg font-semibold leading-8 text-secondary-900">{title}</h3>
      </div>
      <p className="mt-4 text-base leading-7 text-secondary-600">{description}</p>
    </motion.div>
  )
}

export function FeatureCard({ title, description, image, imageAlt, className = '', reverse = false }) {
  return (
    <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col justify-center ${reverse ? 'lg:order-first' : ''}`}
      >
        <h3 className="text-2xl font-bold tracking-tight text-secondary-900 sm:text-3xl font-display">
          {title}
        </h3>
        <p className="mt-6 text-lg leading-8 text-secondary-600">{description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={reverse ? 'lg:order-last' : ''}
      >
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[5/3] w-full rounded-2xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  )
}

export function StatCard({ value, label, icon: Icon, className = '' }) {
  return (
    <div className={`relative rounded-lg border border-secondary-200 bg-white p-6 ${className}`}>
      <div className="flex items-center gap-x-4">
        {Icon && <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />}
        <div>
          <div className="text-3xl font-semibold tracking-tight text-secondary-900">{value}</div>
          <div className="text-sm text-secondary-600">{label}</div>
        </div>
      </div>
    </div>
  )
} 