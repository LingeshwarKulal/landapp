import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'border-2 border-secondary-300 text-secondary-700 hover:bg-secondary-50 btn',
  text: 'text-primary-600 hover:text-primary-700 font-semibold',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 ${
    variants[variant]
  } ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-5 w-5" aria-hidden="true" />}
    </>
  )

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
  }

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={baseClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={baseClasses} {...props}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  )
} 