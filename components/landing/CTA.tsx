export default function CTA() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] cta-glow pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        <div className="section-label mb-6 text-center">GET STARTED TODAY</div>
        <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-6">
          STOP LEAVING<br />
          <span className="gold-gradient">MONEY ON THE TABLE</span>
        </h2>
        <p className="text-[#555] text-lg mb-10 max-w-xl mx-auto">
          Join 2,400+ freelancers and agencies already closing more clients with DealFlow AI
        </p>
        <button className="btn-gold px-10 py-5 rounded-xl text-base font-black tracking-wide">
          START FREE — NO CARD NEEDED →
        </button>
        <p className="mt-5 text-xs text-[#444] tracking-wide">
          14-day free trial · Cancel anytime · Setup in 5 minutes
        </p>
      </div>
    </section>
  )
}
