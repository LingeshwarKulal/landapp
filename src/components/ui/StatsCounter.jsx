import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    let startTime
    let animationFrame

    if (inView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime

        if (progress < duration) {
          setCount(Math.min(end, Math.floor((progress / duration) * end)))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, inView])

  return <span ref={ref}>{count}</span>
}

export function StatsCounter() {
  const stats = [
    { id: 1, name: 'Acres of Land', value: 500, suffix: '+' },
    { id: 2, name: 'Happy Clients', value: 50, suffix: '+' },
    { id: 3, name: 'Years Experience', value: 15, suffix: '+' },
    { id: 4, name: 'Success Rate', value: 98, suffix: '%' },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl font-display">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our track record speaks for itself with successful industrial developments
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-secondary-50 p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-secondary-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary-600">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 