import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'First Aid Network Australia | Professional First Aid Training',
  description: 'First Aid Network Australia delivers high-quality health and safety training across workplaces, schools, community organisations and healthcare settings throughout Australia.',
  keywords: 'first aid training, CPR training, workplace safety, emergency response, Australia, HLTAID009, HLTAID011, HLTAID012',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
