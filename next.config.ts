import 'dotenv/config'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
	env: {
		SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
		APP_URL: process.env.NEXT_PUBLIC_APP_URL
	},
	reactStrictMode: true
}

export default withNextIntl(nextConfig)
