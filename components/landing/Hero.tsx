'use client'

import { useState } from 'react'

const stats = [
  { num: '50M+', label: 'FREELANCERS WORLDWIDE' },
  { num: '$84', label: 'AVERAGE MONTHLY SUB' },
  { num: '3.2X', label: 'AVG CLOSE RATE LIFT' },
  { num: '8 SEC', label: 'TO GENERATE PROPOSAL' },
]

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#f5c842 1px, transparent 1px), linear-gradient(90deg, #f5c842 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Badge */}
      <div className="relative flex items-center gap-2 bg-[#1a1500] border border-[#3a2e00] rounded-full px-4 py-2 mb-8 inline-flex">
        <div className="pulse-dot" />
        <span className="text-gold text-xs font-bold tracking-widest">
          NOW IN BETA — LIMITED SPOTS
        </span>
      </div>

      {/* Headline */}
      <h1 className="relative font-bebas text-[72px] sm:text-[96px] lg:text-[120px] leading-none tracking-wide text-white mb-6 max-w-5xl">
        CLOSE MORE<br />
        CLIENTS ON{' '}
        <span className="gold-gradient">AUTOPILOT</span>
      </h1>

      {/* Subheading */}
      <p className="relative text-lg sm:text-xl text-[#555] max-w-xl leading-relaxed mb-10">
        The AI-powered CRM built exclusively for freelancers and agencies.
        Find leads, write outreach, follow up, and generate proposals —
        <span className="text-[#888]"> automatically.</span>
      </p>

      {/* CTA Buttons */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col sm:flex-row gap-3 w-full max-w-md mb-4"
        >
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-[#0f0f0f] border border-[#1c1c1c] rounded-lg px-4 py-3.5 text-sm text-white placeholder-[#444] focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="btn-gold px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide whitespace-nowrap"
          >
            START FREE →
          </button>
        </form>
      ) : (
        <div className="relative bg-[#0f2010] border border-[#1a3a20] rounded-lg px-6 py-4 mb-4 text-green-400 text-sm font-medium">
          ✓ You are on the waitlist. We will email you shortly.
        </div>
      )}

      {/* Trust line */}
      <p className="relative text-xs text-[#444] mb-16 tracking-wide">
        14-day free trial · No credit card needed · Setup in 5 minutes
      </p>

      {/* Stats */}
      <div className="relative w-full max-w-3xl border-t border-[#1c1c1c] pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-bebas text-4xl sm:text-5xl text-gold tracking-wide mb-1">
                {stat.num}
              </div>
              <div className="text-[10px] text-[#555] tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold" />
        <span className="text-[10px] text-[#555] tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}
