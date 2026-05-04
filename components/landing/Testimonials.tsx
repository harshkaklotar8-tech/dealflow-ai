const testimonials = [
  {
    stars: 5,
    text: 'I was spending 4 hours a day on outreach. DealFlow AI cut that to 20 minutes. Booked 3 new clients in the first month. The proposal generator alone is worth $99.',
    avatar: '🧑',
    name: 'James R.',
    role: 'Freelance Web Designer · $8,400/mo revenue',
  },
  {
    stars: 5,
    text: 'The AI writes better cold emails than I do. Genuinely. My reply rate went from 4% to 18% in three weeks. That is a 4x improvement. I have never seen anything like this.',
    avatar: '👩',
    name: 'Priya S.',
    role: 'Marketing Consultant · $12k/mo revenue',
  },
  {
    stars: 5,
    text: 'We run a 6-person agency. DealFlow replaced our $800/month HubSpot setup and does more. The white-label proposals are incredible. Clients think we have a dedicated design team.',
    avatar: '🧔',
    name: 'Alex W.',
    role: 'Agency Owner · $45k/mo revenue',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-4">SOCIAL PROOF</div>
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-16">
          FREELANCERS ARE<br />
          <span className="text-gold">CLOSING MORE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-7 card-hover"
            >
              <div className="text-gold text-sm mb-4">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-[#888] text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c1c1c] flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-[#555] text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
