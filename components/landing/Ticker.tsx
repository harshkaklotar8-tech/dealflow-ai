const items = [
  'ZERO SETUP FEES',
  'AI OUTREACH IN 10 SECONDS',
  'AUTO FOLLOW-UPS',
  'PROPOSAL IN 8 SECONDS',
  'NO CODING NEEDED',
  'CANCEL ANYTIME',
  'ZERO SETUP FEES',
  'AI OUTREACH IN 10 SECONDS',
  'AUTO FOLLOW-UPS',
  'PROPOSAL IN 8 SECONDS',
  'NO CODING NEEDED',
  'CANCEL ANYTIME',
]

export default function Ticker() {
  return (
    <div className="bg-[#0f0f0f] border-y border-[#1c1c1c] py-4 overflow-hidden">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            <span className="text-green-400 text-xs">✓</span>
            <span className="text-[#555] text-xs tracking-widest font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
