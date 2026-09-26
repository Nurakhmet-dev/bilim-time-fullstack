'use client'

import { Heading } from '@/components/ui/heading'
import { useTranslations } from 'use-intl'

export default function Home() {
	const t = useTranslations('home')

	return <>
    <Heading>sdc</Heading>
    </>
}
