import { InMemoryCache } from '@apollo/client'
import { ApolloClient, HttpLink } from '@apollo/client'

export const client = new ApolloClient({
	link: new HttpLink({ uri: process.env.NEXT_PUBLIC_SERVER_URL }),
	cache: new InMemoryCache()
})
