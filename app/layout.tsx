import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
          >
        <ToasterProvider />
        <ModalProvider />
        {children}
        </ThemeProvider>
        <SpeedInsights />
        </body>
    </html>
    </ClerkProvider>
  )
}
