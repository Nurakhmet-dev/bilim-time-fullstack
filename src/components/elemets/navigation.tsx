import Link from 'next/link'
import { FC } from 'react'

import { cn } from '@/utils/tw-merge'

import { Button } from '../ui/button'

import { MobileMenu } from './mobile-menu'
import { PUBLIC_URL } from '@/config/url.config'

interface NavigationProps {}

type TLinkVariant = 'link' | 'button'

interface INavLink {
	name: string
	href: string
	variant: TLinkVariant
}

const navLinks: INavLink[] = [
	{ name: 'Home', href: PUBLIC_URL.home(), variant: 'link' },
	{ name: 'login', href: PUBLIC_URL.auth('login'), variant: 'button' }
]

const NavLinks = () =>
	navLinks.map(({ href, name, variant }: INavLink) =>
		variant === 'link' ? (
			<Link
				key={href}
				href={href}
				className={cn(
					'relative flex items-center justify-center transition',
					'before:bg-accent before:absolute before:-bottom-0.5 before:m-auto before:h-0.5 before:w-0 before:transition-all',
					'hover:text-primary hover:before:w-full'
				)}
			>
				{name}
			</Link>
		) : (
			<Link key={href} href={href} className='block'>
				<Button
					variant='default'
					className='h-full w-full cursor-pointer'
				>
					{name}
				</Button>
			</Link>
		)
	)

export const Navigation: FC<NavigationProps> = ({}) => {
	return (
		<>
			<nav>
				<div className='hidden items-center justify-center gap-4 md:flex md:gap-x-8'>
					<NavLinks />
				</div>

				<div className='flex md:hidden'>
					<MobileMenu>
						<NavLinks />
					</MobileMenu>
				</div>
			</nav>
		</>
	)
}
