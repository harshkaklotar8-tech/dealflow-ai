export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1c1c1c] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-bebas text-xl tracking-widest text-white">
          DEALFLOW <span className="text-gold">AI</span>
        </div>
        <div className="flex gap-8">
          {['Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
            
              key={item}
              href="#"
              className="text-[#555] text-xs tracking-wide hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="text-[#333] text-xs tracking-wide">
          © 2025 DEALFLOW AI · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  )
}
