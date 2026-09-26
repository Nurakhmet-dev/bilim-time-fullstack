import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_SERVER_URL,
	documents: ['./src/graphql/**/*.graphql'],
	importExtension: '.ts',
	generates: {
		'./src/graphql/generated/output.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			]
		}
	},
	ignoreNoDocuments: true
}

export default config
