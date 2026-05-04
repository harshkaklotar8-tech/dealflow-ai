'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur border-b border-[#1c1c1c]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="font-bebas text-2xl tracking-widest text-white">
          DEAL<span className="text-gold">FLOW</span> AI
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {['Features', 'Pricing', 'Integrations', 'Blog'].map((item) => (
            <li key={item}>
              
                href={`#${item.toLowerCase()}`}
                className="text-[#555] text-sm tracking-wide hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          
            href="#pricing"
            className="text-sm text-[#555] hover:text-white transition-colors"
          >
            Log in
          </a>
          <button className="btn-gold px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide">
            START FREE TRIAL
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
