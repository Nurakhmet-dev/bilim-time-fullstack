import { ReactNode } from 'react'

import { cn } from '@/utils/tw-merge'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IHeadingProps {
	lvl?: HeadingLevel
	children: ReactNode
	className?: string
}

export const Heading = ({
	lvl = 'h1',
	children,
	className = ''
}: IHeadingProps) => {
	const styles: Record<HeadingLevel, string> = {
		h1: 'text-4xl font-bold tracking-tight md:text-5xl',
		h2: 'text-3xl font-semibold tracking-tight md:text-4xl',
		h3: 'text-2xl font-semibold md:text-3xl',
		h4: 'text-xl font-medium md:text-2xl',
		h5: 'text-lg font-medium',
		h6: 'text-base font-medium'
	}

	// Assign the dynamic level to a capitalized Tag constant for JSX
	const Tag = lvl

	return <Tag className={cn(styles[lvl], className)}>{children}</Tag>
}
