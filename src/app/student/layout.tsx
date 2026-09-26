import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../../assets/styles/globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Bilim Time | Student',
	description: 'ҰБТ - ға дайындалу',
}

export default function StudentLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='kk'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}>
    				{children}
			</body>
		</html>
	)
}
