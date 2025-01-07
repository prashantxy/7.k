'use client'

import { useState, FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

// Type for menu items
type MenuItem = {
  label: string;
  href: string;
};

// DropdownMenu component props type
type DropdownMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

const DropdownMenu: FC<DropdownMenuProps> = ({ items, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10"
      role="menu"
      aria-hidden={!isOpen}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

type NavItemProps = {
  label: string;
  href: string;
  submenu?: MenuItem[];
};

const NavItem: FC<NavItemProps> = ({ label, href, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        className={`px-3 py-2 text-sm font-medium ${isActive ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {submenu && <ChevronDown className="w-4 h-4 ml-1" />}
      </Button>
      {submenu && <DropdownMenu items={submenu} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

type MobileNavItemProps = {
  label: string;
  href: string;
  submenu?: MenuItem[];
  onClose: () => void;
};

const MobileNavItem: FC<MobileNavItemProps> = ({ label, href, submenu, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        className="w-full text-left flex items-center justify-between px-4 py-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {submenu && <ChevronDown className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''}`} />}
      </Button>
      {isOpen && submenu && (
        <div className="pl-4">
          {submenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const navigationConfig = {
  stays: {
    label: 'Stays',
    href: '/stays',
    submenu: [
      { label: 'Hotels', href: '/stays/hotels' },
      { label: 'Apartments', href: '/stays/apartments' },
      { label: 'Resorts', href: '/stays/resorts' },
    ]
  },
  transport: {
    label: 'Transport',
    submenu: [
      { label: 'Flights', href: '/flights' },
      { label: 'Car Rentals', href: '/cars' },
      { label: 'Airport Taxis', href: '/taxis' },
    ]
  },
  activities: {
    label: 'Activities',
    submenu: [
      { label: 'Attractions', href: '/attractions' },
      { label: 'Tours', href: '/tours' },
      { label: 'Experiences', href: '/experiences' },
    ]
  }
};

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            TIG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {Object.values(navigationConfig).map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="text-white"
              >
                <Globe className="w-4 h-4 mr-2" />
                EN
              </Button>
              <DropdownMenu
                items={[
                  { label: 'English', href: '#' },
                  { label: 'Español', href: '#' },
                  { label: 'Français', href: '#' }
                ]}
                isOpen={isLanguageOpen}
                onClose={() => setIsLanguageOpen(false)}
              />
            </div>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm">Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            {Object.values(navigationConfig).map((item) => (
              <MobileNavItem
                key={item.label}
                {...item}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            ))}
            <div className="border-t border-blue-500 mt-4 pt-4 space-y-2">
              <Button variant="ghost" className="w-full text-left">
                <Globe className="w-4 h-4 mr-2" />
                Language
              </Button>
              <Button variant="ghost" className="w-full">Sign in</Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
