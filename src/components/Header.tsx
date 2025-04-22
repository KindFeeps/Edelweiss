import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    name: 'About',
    href: '/about',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Mission & Values', href: '/about#mission-values' },
      { name: 'Culture', href: '/about#culture' },
    ],
  },
  {
    name: 'Our Team',
    href: '/team',
    items: [
      { name: 'Leadership Team', href: '/leadership-team' },
      { name: 'M&A Team', href: '/mergers-acquisitions-team' },
      { name: 'Operations Team', href: '/operations-team' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  {
    name: 'Careers',
    href: '/careers',
    items: [
      { name: 'Open Positions', href: '/careers#positions' },
      { name: 'Life at Edelweiss', href: '/careers#life' },
    ],
  },
  {
    name: 'News',
    href: '/news',
    items: [
      { name: 'Press Releases', href: '/news#press' },
      { name: 'Blog', href: '/news#blog' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'FR', name: 'Français' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#FFFFFF]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-[64px] px-8">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="sr-only">Edelweiss Capital Partners</span>
              <img
                className="h-[288px] w-auto object-contain p-0 m-0"
                src="/edelweiss-logo.png"
                alt="Edelweiss Software Group Logo"
                style={{ maxHeight: '288px', height: '288px', width: 'auto', margin: 0, display: 'block' }}
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex gap-8 text-[15px] font-medium">
              {navigation.filter(item => item.name !== 'Contact').map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={clsx(
                      'flex items-center text-[15px] font-medium tracking-wide px-4',
                      'transition-colors duration-200',
                      isActive(item.href)
                        ? 'text-[#3B586A] bg-[#3B586A]/10 rounded-md'
                        : 'text-[#3B586A]/80 hover:text-[#2F4654]'
                    )}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                    {item.items && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                  {item.items && (
                    <div
                      className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-lg"
                      role="menu"
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={clsx(
                            'block px-4 py-2 text-sm',
                            'transition-colors duration-200',
                            isActive(subItem.href)
                              ? 'bg-gray-100 text-[#0C2E5B]'
                              : 'text-gray-700 hover:bg-gray-50'
                          )}
                          role="menuitem"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="bg-[#3B58FF] text-white font-semibold text-sm rounded-md px-5 py-2 ml-4">Contact</Link>
            <div className="hidden lg:flex items-center gap-2 text-[14px] font-semibold text-[#3B586A]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang.code)}
                  className={clsx(
                    'px-2 py-1 transition-colors',
                    currentLanguage === lang.code ? 'text-[#3B586A]' : 'text-[#3B586A]/60 hover:text-[#2F4654]'
                  )}
                >
                  {lang.code}
                </button>
              ))}
              <span className="text-[#3B586A]/60">|</span>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#3B586A]"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FFFFFF] px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Edelweiss Capital Partners</span>
              <img
                className="h-[288px] w-auto object-contain p-0 m-0"
                src="/edelweiss-logo.png"
                alt="Edelweiss Software Group Logo"
                style={{ maxHeight: '288px', height: '288px', width: 'auto', margin: 0, display: 'block' }}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#3B586A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={clsx(
                        '-mx-3 block rounded-lg px-3 py-2 text-2xl font-bold leading-7',
                        isActive(item.href)
                          ? 'bg-[#3B586A]/10 text-[#3B586A]'
                          : 'text-[#3B586A]/80 hover:bg-[#3B586A]/20 hover:text-[#2F4654]'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.items && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={clsx(
                              'block rounded-lg px-3 py-2 text-lg font-bold leading-6',
                              isActive(subItem.href)
                                ? 'bg-[#3B586A]/10 text-[#3B586A]'
                                : 'text-gray-300 hover:bg-[#3B586A]/20 hover:text-[#2F4654]'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <div className="flex justify-center gap-2 text-[14px] font-semibold text-[#3B586A]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={clsx(
                        'px-2 py-1 transition-colors',
                        currentLanguage === lang.code ? 'text-[#3B586A]' : 'text-[#3B586A]/60 hover:text-[#2F4654]'
                      )}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}