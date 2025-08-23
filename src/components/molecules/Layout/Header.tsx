// src/components/Header.tsx
'use client'

import X from '@/components/icons/close-svgrepo-com'
import Logo from '@/components/icons/logo'
import Menu from '@/components/icons/menu-svgrepo-com'
import Profile from '@/components/icons/profile-circle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// import { Search }  from '@/components/icons/search'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navItems = ['Home', 'Mentors']

  // Next.js navigation hooks
  const pathname = usePathname() || ''
  const searchParams = useSearchParams()
  const router = useRouter()

  const showSearch = pathname === '/track'

  const initialSearch = showSearch ? searchParams.get('search') || '' : ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  useEffect(() => {
    if (pathname === '/track') {
      setSearchTerm(searchParams.get('search') || '')
    } else {
      setSearchTerm('')
      setOpen(false)
    }
  }, [pathname, searchParams])

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = searchTerm.trim()
    const base = '/track'
    const target = trimmed ? `${base}?search=${encodeURIComponent(trimmed)}` : base
    router.push(target)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 h-16 border-b-0 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* LEFT GROUP: Logo + Nav */}
        <div className="flex items-center space-x-12">
          <Link
            href="/home"
            className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
          >
            <Logo className="h-8 w-8" />
            <span>FOMO</span>
          </Link>
          <nav className="hidden space-x-6 text-gray-700 md:flex">
            {navItems.map((t) => (
              <Link
                key={t}
                href={t === 'Home' ? '/home' : `/${t.toLowerCase()}`}
                className="hover:text-blue-600"
              >
                {t}
              </Link>
            ))}
          </nav>
        </div>

        {/* MIDDLE/OPTIONAL: Search only on /track */}
        {showSearch && (
          <form onSubmit={onSearchSubmit} className="relative mx-4 hidden flex-shrink-0 md:block">
            {/* <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" size={16} /> */}
            <Input
              type="text"
              placeholder="Search for track..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 py-1 pl-9 pr-3 text-sm"
            />
          </form>
        )}

        {/* RIGHT GROUP: Profile + Mobile Button */}
        <div className="flex items-center space-x-2">
          {/* Desktop profile */}
          <div className="hidden items-center space-x-1 text-gray-700 hover:text-blue-600 md:flex">
            <Link href="/my-profile" className="flex items-center space-x-1">
              <Profile className="h-5 w-5" />
              {/* <span>My Profile</span> */}
              <span>My Profile</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t bg-white md:hidden">
          {showSearch && (
            <form onSubmit={onSearchSubmit} className="relative p-4">
              {/* <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" size={16} /> */}
              <Input
                type="text"
                placeholder="Search for track..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-9 pr-3 text-sm"
              />
            </form>
          )}

          {[...navItems, 'Track', 'My Profile'].map((t) => {
            let href: string
            if (t === 'My Profile') href = '/profile'
            else if (t === 'Home') href = '/'
            else if (t === 'Track') href = '/track'
            else href = `/${t.toLowerCase()}`
            const isActive = pathname === href
            return (
              <Link
                key={t}
                href={href}
                className={`flex items-center space-x-2 border-t p-4 text-gray-700 hover:bg-gray-50 ${
                  isActive ? 'bg-gray-100 font-semibold text-blue-600' : ''
                }`}
                onClick={() => setOpen(false)}
              >
                {t === 'My Profile' && <Profile className="h-5 w-5" />}
                <span>{t}</span>
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
