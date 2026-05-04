const leads = [
  { company: 'PixelForge Studio', contact: 'James R.', value: '$2,400/mo', status: 'CALL BOOKED', statusClass: 'badge-booked', action: 'Prep proposal', score: '94%', scoreColor: 'text-green-400' },
  { company: 'Nova Marketing Co', contact: 'Sarah K.', value: '$1,800/mo', status: 'REPLIED', statusClass: 'badge-replied', action: 'Send follow-up', score: '78%', scoreColor: 'text-gold' },
  { company: 'Zenith Real Estate', contact: 'Mike D.', value: '$3,200/mo', status: 'OUTREACH SENT', statusClass: 'badge-sent', action: 'Day 2 follow-up', score: '61%', scoreColor: 'text-gray-400' },
  { company: 'BlueWave Coaches', contact: 'Priya S.', value: '$1,200/mo', status: 'OUTREACH SENT', statusClass: 'badge-sent', action: 'Day 5 follow-up', score: '55%', scoreColor: 'text-gray-400' },
  { company: 'TechNova Agency', contact: 'Alex W.', value: '$4,500/mo', status: 'REPLIED', statusClass: 'badge-replied', action: 'Book discovery call', score: '82%', scoreColor: 'text-gold' },
]

export default function Demo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-4">PRODUCT PREVIEW</div>
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-16">
          WHAT IT LOOKS LIKE<br />
          <span className="text-[#333]">INSIDE</span>
        </h2>

        {/* Browser mockup */}
        <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl overflow-hidden gold-glow">

          {/* Title bar */}
          <div className="bg-[#111] px-5 py-3.5 flex items-center gap-3 border-b border-[#1c1c1c]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-[#1a1a1a] rounded-md px-4 py-1.5 text-xs text-[#555] font-mono">
                app.dealflow.ai/pipeline
              </div>
            </div>
          </div>

          <div className="flex" style={{ height: '480px' }}>

            {/* Sidebar */}
            <div className="w-52 bg-[#0a0a0a] border-r border-[#1c1c1c] py-5 flex-shrink-0">
              {[
                { icon: '📊', label: 'Pipeline', active: true },
                { icon: '🎯', label: 'Leads', active: false },
                { icon: '✉️', label: 'Outreach', active: false },
                { icon: '📄', label: 'Proposals', active: false },
                { icon: '📈', label: 'Analytics', active: false },
                { icon: '⚙️', label: 'Settings', active: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-5 py-3 text-sm cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-[#1a1500] text-gold border-r-2 border-gold'
                      : 'text-[#555] hover:text-[#888]'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="font-bebas text-2xl tracking-wider text-white">ACTIVE PIPELINE</div>
                <button className="btn-gold px-4 py-2 rounded-lg text-xs font-bold tracking-wide">
                  + ADD LEAD
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1c1c1c]">
                      {['COMPANY', 'CONTACT', 'VALUE', 'STATUS', 'NEXT ACTION', 'AI SCORE'].map((h) => (
                        <th key={h} className="text-left text-[10px] text-[#555] tracking-widest font-medium pb-3 pr-4">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead, i) => (
                      <tr key={i} className="border-b border-[#111] hover:bg-[#111] transition-colors">
                        <td className="py-3 pr-4 text-sm font-semibold text-white">{lead.company}</td>
                        <td className="py-3 pr-4 text-sm text-[#888]">{lead.contact}</td>
                        <td className="py-3 pr-4 text-sm text-green-400 font-mono">{lead.value}</td>
                        <td className="py-3 pr-4">
                          <span className={`${lead.statusClass} text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-sm text-[#888]">{lead.action}</td>
                        <td className={`py-3 text-sm font-bold ${lead.scoreColor}`}>{lead.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom stats */}
              <div className="flex gap-4 mt-5 pt-4 border-t border-[#1c1c1c]">
                {[
                  { label: 'PIPELINE VALUE', value: '$13,100/MO', color: 'text-green-400' },
                  { label: 'PROJECTED CLOSE', value: '$7,600/MO', color: 'text-gold' },
                  { label: 'AI TASKS TODAY', value: '3 PENDING', color: 'text-white' },
                ].map((stat, i) => (
                  <div key={i} className="flex-1 bg-[#111] border border-[#1c1c1c] rounded-xl p-4 text-center">
                    <div className="text-[10px] text-[#555] tracking-widest mb-2">{stat.label}</div>
                    <div className={`font-bebas text-xl tracking-wider ${stat.color}`}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
