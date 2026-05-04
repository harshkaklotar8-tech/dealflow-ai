const features = [
  {
    num: '01',
    title: 'AI Lead Profiler',
    desc: 'Paste any LinkedIn URL or website. Get a complete prospect profile in seconds — pain points, company size, best pitch angle, and a personalized opening line.',
    tag: 'POWERED BY CLAUDE AI',
  },
  {
    num: '02',
    title: 'Personalized Outreach Writer',
    desc: 'Not templates. Real personalized cold emails and DMs written by AI — referencing their actual business, recent activity, and specific pain points.',
    tag: '10 SECONDS PER MESSAGE',
  },
  {
    num: '03',
    title: 'Automated Follow-Up Sequences',
    desc: 'Set it once. AI follows up at Day 2, Day 5, and Day 10 with different angles. Stops the moment they reply. You wake up to booked calls.',
    tag: 'FULLY AUTOMATED',
  },
  {
    num: '04',
    title: 'Visual Pipeline Board',
    desc: 'Drag-and-drop pipeline showing every deal in real time. Know exactly who to call today, who is about to go cold, and where your next revenue is coming from.',
    tag: 'NEVER LOSE A DEAL',
  },
  {
    num: '05',
    title: 'Instant Proposal Generator',
    desc: 'Click one button. AI generates a fully branded PDF proposal with timeline, pricing, case studies, and ROI projections. Tracks when the client opens it.',
    tag: '8 SECONDS TO GENERATE',
  },
  {
    num: '06',
    title: 'Revenue Forecasting',
    desc: 'Know your projected monthly revenue based on your live pipeline. Weekly AI audit that tells you exactly what to do to hit your target.',
    tag: 'NEVER GUESS AGAIN',
  },
]

export default function Features() {
  return (
    <section className="bg-[#0a0a0a] border-y border-[#1c1c1c] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-4">THE SOLUTION</div>
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-16">
          EVERYTHING YOU NEED.<br />
          <span className="text-gold">NOTHING YOU DON'T.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1c1c1c] border border-[#1c1c1c] rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors duration-200"
            >
              <div className="feature-num mb-4">{f.num}</div>
              <h3 className="text-white font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed mb-4">{f.desc}</p>
              <span className="inline-block bg-[#1a1500] text-gold text-[10px] font-bold tracking-widest px-3 py-1.5 rounded">
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
