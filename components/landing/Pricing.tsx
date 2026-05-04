const plans = [
  {
    name: 'STARTER',
    for: 'Solo freelancers',
    price: '49',
    features: [
      '100 leads per month',
      'AI outreach writer',
      'Pipeline tracker',
      'Email sequences',
      'Basic analytics',
    ],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    name: 'PRO',
    for: 'Growing freelancers',
    price: '99',
    features: [
      'Unlimited leads',
      'AI proposal generator',
      'Advanced follow-ups',
      'Revenue forecasting',
      'Weekly AI report',
    ],
    cta: 'START FREE TRIAL',
    featured: true,
  },
  {
    name: 'AGENCY',
    for: 'Small agencies',
    price: '199',
    features: [
      'Team of 5 seats',
      'White-label proposals',
      'Client dashboards',
      'Priority support',
      'Custom branding',
    ],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    name: 'SCALE',
    for: 'Large agencies',
    price: '399',
    features: [
      'Unlimited team seats',
      'Full analytics suite',
      'API access',
      'Dedicated manager',
      'Custom integrations',
    ],
    cta: 'CONTACT SALES',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0a0a0a] border-t border-[#1c1c1c] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-4">PRICING</div>
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-4">
          ONE CLOSED DEAL PAYS<br />
          <span className="text-gold">FOR THE WHOLE YEAR</span>
        </h2>
        <p className="text-[#555] text-lg mb-16 max-w-xl">
          Cancel anytime. No contracts. No setup fees. One closed client pays for 12 months.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-[#070707] rounded-2xl p-7 card-hover ${
                plan.featured
                  ? 'border-2 border-gold gold-glow'
                  : 'border border-[#1c1c1c]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-black tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <div className="font-bebas text-2xl tracking-widest text-white mb-1">{plan.name}</div>
              <div className="text-[#555] text-xs mb-5">{plan.for}</div>

              <div className="mb-6">
                <span className="font-bebas text-5xl text-gold tracking-wide">${plan.price}</span>
                <span className="text-[#555] text-sm">/mo</span>
              </div>

              <div className="border-t border-[#1c1c1c] pt-5 mb-6 space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="text-green-400 text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#888] text-xs leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
                  plan.featured
                    ? 'btn-gold'
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-[#555] text-sm">
            🔒 14-day free trial · Cancel anytime · No credit card required to start
          </p>
        </div>
      </div>
    </section>
  )
}
