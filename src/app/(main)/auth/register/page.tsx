import type { Metadata } from 'next'

import { RegisterForm } from '@/components/features/auth/forms/register.form'

export const metadata: Metadata = {
	//title: async () => 'await '
}

export default function AuthPage() {
	return (
		<section className='flex h-screen w-full items-center justify-center'>
			<RegisterForm />
		</section>
	)
}
