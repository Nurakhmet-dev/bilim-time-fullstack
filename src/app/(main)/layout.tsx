import type { Metadata, Viewport } from 'next'
import { getLocale } from 'next-intl/server'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/components/elemets/header'

import { cn } from '@/utils/tw-merge'

import { Providers } from './providers'
import '@/assets/styles/globals.css'
import { APP_URL } from '@/config/url.config'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1
	// maximumScale: 1, // Optional: prevents user from zooming
}

export const metadata: Metadata = {
	title: { absolute: SITE_NAME, template: `%s | ${SITE_NAME}` },
	description: SITE_DESCRIPTION,
	metadataBase: APP_URL,
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['nurakhmet.dev@gmail.com']
	}
}

export default async function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	const locale = await getLocale()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={cn(geistSans.variable)}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
