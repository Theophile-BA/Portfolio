import '@/app/css/reset.css'
import '@/app/css/globals.css'
import type { Metadata } from 'next'
import { montserrat } from '@/font/font'

export const metadata: Metadata = {
    title: 'Portfolio Théophile BONIFACE-ACHILLE',
    description: 'DEVELOPPER AVEC AMOUR',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="bg-slate-900 text-slate-100">
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}
