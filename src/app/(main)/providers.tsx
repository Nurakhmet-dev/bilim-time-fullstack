import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { ApolloClientProvider } from '@/providers/apollo-clien.provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ToasterProvider } from '@/providers/toaster-provider'

export const Providers = async ({ children }: { children: ReactNode }) => {
	const messages = await getMessages()
	return (
		<>
			<ApolloClientProvider>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute={'class'}
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<ToasterProvider />
						{children}
					</ThemeProvider>
				</NextIntlClientProvider>
			</ApolloClientProvider>
		</>
	)
}
