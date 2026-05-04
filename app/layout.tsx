import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DealFlow AI — Close More Clients On Autopilot',
  description: 'The AI-powered CRM built exclusively for freelancers and agencies. Find leads, write outreach, follow up, and generate proposals automatically.',
  keywords: 'CRM for freelancers, AI outreach, cold email automation, proposal generator, freelancer tools, agency CRM',
  openGraph: {
    title: 'DealFlow AI — Close More Clients On Autopilot',
    description: 'The AI-powered CRM built exclusively for freelancers and agencies.',
    type: 'website',
    url: 'https://dealflow-ai.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DealFlow AI — Close More Clients On Autopilot',
    description: 'The AI-powered CRM built exclusively for freelancers and agencies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-gray-200 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
