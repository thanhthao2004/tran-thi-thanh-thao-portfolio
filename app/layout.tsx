import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next'
import { cn } from "@/lib/utils"
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Tran Thi Thanh Thao | Data Engineer & Business Analyst',
  description: 'Portfolio of Tran Thi Thanh Thao - Data Engineer, Business Analyst and Data Analyst specializing in building intelligent data systems that drive business transformation.',
  keywords: ['Data Engineer', 'Business Analyst', 'Data Analyst', 'Apache Spark', 'Data Lakehouse', 'ETL', 'Python'],
  authors: [{ name: 'Tran Thi Thanh Thao' }],
  icons: {
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f36',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", geist.variable, geistMono.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
