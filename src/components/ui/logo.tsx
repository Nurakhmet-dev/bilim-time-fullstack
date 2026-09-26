import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

import { cn } from '@/utils/tw-merge'

interface ILogoProps {
	className?: string
}

export const Logo: FC<ILogoProps> = ({ className }): ReactNode => (
	<Link href='/' className={cn('flex h-8', className)}>
		<img src='/images/logo.svg' alt='Bilim Time' />
	</Link>
)
