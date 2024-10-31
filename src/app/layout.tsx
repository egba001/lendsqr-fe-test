import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
    title: 'Lendsqr Frontend Engineering Assessment Test',
    description:
        'Live demo of the lendsqr frontend engineering assessment test solution',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${worksans}`}>{children}</body>
        </html>
    )
}
