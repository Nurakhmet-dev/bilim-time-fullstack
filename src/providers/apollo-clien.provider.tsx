'use client'
import { ApolloProvider } from '@apollo/client/react'
import { PropsWithChildren, ReactNode } from 'react'

import { client } from '@/libs/apollo-client'

export const ApolloClientProvider = ({
	children
}: PropsWithChildren<unknown>) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
