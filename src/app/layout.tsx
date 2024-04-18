import '@/app/css/reset.css'
import '@/app/css/globals.css'

import clsx from 'clsx'
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
            <body
                className={clsx(montserrat.className, 'relative min-h-screen')}
            >
                <Header />
                {children}
                <Footer />
                <div className="background-gradient absolute inset-0 -z-50 max-h-screen"></div>
                <div
                    className="absolute pointer-events-none inset-0 -z-40 h-full 
                               bg-[url('/spaceimg.jpg')] opacity-20 mix-blend-soft-light"
                ></div>
            </body>
        </html>
    )
}
