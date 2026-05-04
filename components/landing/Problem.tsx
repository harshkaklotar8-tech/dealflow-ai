const problems = [
  {
    icon: '😤',
    title: 'Manual Outreach Hell',
    desc: 'Copying and pasting the same message to 50 prospects. Generic messages that get ignored every single time.',
    cost: 'COSTS: 3–4 HOURS DAILY',
  },
  {
    icon: '👻',
    title: 'Forgotten Follow-Ups',
    desc: 'Hot leads go cold because you forgot to follow up. Every missed follow-up is a missed invoice.',
    cost: 'COSTS: 2–5 DEALS/MONTH',
  },
  {
    icon: '📄',
    title: 'Proposal Hours',
    desc: 'Building a custom proposal takes 3–5 hours per client. That is unbillable time multiplied by every pitch.',
    cost: 'COSTS: $500–$2000/MONTH',
  },
  {
    icon: '🗂️',
    title: 'Zero Pipeline Visibility',
    desc: 'Spreadsheets and sticky notes. No idea who is at what stage or if you will hit your revenue target.',
    cost: 'COSTS: CONSTANT ANXIETY',
  },
  {
    icon: '💸',
    title: 'Enterprise Tools Too Expensive',
    desc: 'HubSpot is $800/month and built for enterprises. Salesforce requires a dedicated admin. Nothing fits.',
    cost: 'COSTS: $800+/MONTH',
  },
  {
    icon: '📉',
    title: 'No Revenue Forecast',
    desc: 'Waking up every month not knowing if you will make rent. No pipeline data means no financial planning.',
    cost: 'COSTS: BAD DECISIONS',
  },
]

export default function Problem() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-4">THE PROBLEM</div>
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
          FREELANCERS LOSE<br />
          <span className="text-[#333]">THOUSANDS EVERY MONTH</span>
        </h2>
        <p className="text-[#555] text-lg max-w-xl leading-relaxed mb-16">
          Not because they lack skills. Because they have no system.
          Outreach is manual. Follow-ups are forgotten. Proposals take hours. Deals die silently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-7 card-hover"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-white font-semibold text-base mb-3">{p.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="text-red-500 text-xs font-mono font-medium tracking-wide">
                {p.cost}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
