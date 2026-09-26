import type { Metadata } from 'next'

import { LoginForm } from '@/components/features/auth/forms/login-form'

export const metadata: Metadata = {
	//title: async () => 'await '
}

export default function AuthPage() {
	return (
		<section className='flex h-screen w-full items-center justify-center'>
			<LoginForm />
		</section>
	)
}
