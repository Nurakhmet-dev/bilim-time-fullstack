import { redirect } from 'next/navigation'

import VerifyEmailFormPage from '@/components/features/auth/forms/verify-email.form'

export default async function VerifyEmailPage(props: {
	seachParams: Promise<{ token: string }>
}) {
	const seachParams = await props.seachParams

	if (!seachParams) return redirect('/auth')

	return <VerifyEmailFormPage />
}
