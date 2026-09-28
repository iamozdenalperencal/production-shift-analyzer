import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Production Shift Analyzer', description: 'Lightweight manufacturing shift analytics.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
