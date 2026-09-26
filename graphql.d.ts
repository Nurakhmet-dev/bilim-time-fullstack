declare module '*.graphql' {
	import type { DocumentNode } from 'graphql'

	const scheme: DocumentNode

	export = scheme
}
