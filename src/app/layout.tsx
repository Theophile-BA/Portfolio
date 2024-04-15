import '@/app/css/reset.css'
import '@/app/css/globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'
import { montserrat } from '@/font/font'

export const metadata: Metadata = {
    title: 'Portfolio Théophile BONIFACE-ACHILLE',
    description: 'DEVELOPPER AVEC AMOUR',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="bg-slate-900 text-slate-100">
            <body className={montserrat.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
