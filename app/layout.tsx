import type { Metadata } from 'next'
import { Inclusive_Sans } from 'next/font/google'
import './globals.css'

const inter = Inclusive_Sans({ subsets: ['vietnamese'], weight: '400' })

export const metadata: Metadata = {
    title: 'Pink Panther',
    description: '',
    icons: {
        icon: '/icon.ico',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                {children}
            </body>
        </html>
    )
}
