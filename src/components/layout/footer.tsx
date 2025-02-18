// components/layout/footer.tsx
import Link from 'next/link';

const navigation = {
  shop: [
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Special Offers', href: '/offers' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  social: [
    { name: 'Facebook', icon: 'fa fa-brands fa-facebook', href: '#' },
    { name: 'Twitter', icon: 'fa fa-brands fa-twitter', href: '#' },
    { name: 'Instagram', icon: 'fa fa-brands fa-instagram', href: '#' },
    { name: 'Email', icon: 'fa fa-regular fa-envelope', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className='border-t bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-12 md:py-16'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            <div>
              <h3 className='text-sm font-semibold text-gray-900'>Shop</h3>
              <ul role='list' className='mt-4 space-y-4'>
                {navigation.shop.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-900'>Support</h3>
              <ul role='list' className='mt-4 space-y-4'>
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-900'>Company</h3>
              <ul role='list' className='mt-4 space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-900'>Follow Us</h3>
              <ul role='list' className='mt-4 space-y-4'>
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='flex items-center text-sm text-gray-600 hover:text-gray-900'
                    >
                      <i className={`mr-2 h-5 w-5 ${item.icon}`} />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-200 py-8'>
          <p className='text-center text-sm text-gray-600'>
            © {new Date().getFullYear()} FV Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
