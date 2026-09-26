import { PropsWithChildren } from 'react'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/elemets/card'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

interface IAuthWrapperProps {
	heading: string
	backButtonLabel?: string
	onClick?: () => void
}

export function AuthWrapper({
	children,
	heading,
	onClick,
	backButtonLabel
}: PropsWithChildren<IAuthWrapperProps>) {
	return (
		<Card className='w-lg'>
			<CardHeader className='flex flex-row items-center justify-center gap-x-4'>
				<CardTitle>
					<h4 className='text-2xl'>{heading}</h4>
				</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className='mt-2'>
				<Button variant={'ghost'} className='w-full' onClick={onClick}>
					{backButtonLabel}
				</Button>
			</CardFooter>
		</Card>
	)
}
