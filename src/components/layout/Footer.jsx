import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

const navigation = {
  main: [
    { name: 'The Land', href: '/land' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Industries', href: '/industries' },
    { name: 'Lease Models', href: '/lease-models' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Location', href: '/location' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Phone',
      href: 'tel:+1234567890',
      icon: HiPhone,
    },
    {
      name: 'Email',
      href: 'mailto:info@landlease.com',
      icon: HiMail,
    },
    {
      name: 'Location',
      href: 'https://maps.google.com',
      icon: HiLocationMarker,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="text-2xl font-bold text-white font-display">
              LandLease
            </Link>
            <p className="text-sm leading-6 text-secondary-300">
              Premium industrial land leasing solutions for your business growth.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-400 hover:text-secondary-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.slice(0, Math.ceil(navigation.main.length / 2)).map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-secondary-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.slice(Math.ceil(navigation.main.length / 2)).map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-secondary-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Information</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex">
                    <HiPhone className="h-6 w-6 text-secondary-400" aria-hidden="true" />
                    <span className="ml-3 text-sm leading-6 text-secondary-300">+1 (234) 567-890</span>
                  </li>
                  <li className="flex">
                    <HiMail className="h-6 w-6 text-secondary-400" aria-hidden="true" />
                    <span className="ml-3 text-sm leading-6 text-secondary-300">info@landlease.com</span>
                  </li>
                  <li className="flex">
                    <HiLocationMarker className="h-6 w-6 text-secondary-400" aria-hidden="true" />
                    <span className="ml-3 text-sm leading-6 text-secondary-300">
                      Near Pune and NH-48, Maharashtra, India
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-secondary-400">
            &copy; {new Date().getFullYear()} LandLease. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 