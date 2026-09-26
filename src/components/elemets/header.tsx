'use client'

import Link, { LinkProps } from 'next/link'

import { useScrollDirection } from '@/hooks/useScrollDirection'

import { cn } from '@/utils/tw-merge'

import { Button } from '../ui/button'
import { Logo } from '../ui/logo'
import { ModeToggle } from '../ui/toggle-theme'

import { Navigation } from './navigation'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from './navigation-menu'
import { PUBLIC_URL } from '@/config/url.config'

export const Header = () => {
	const scrollDirection = useScrollDirection()

	return (
		<header
			className={cn(
				scrollDirection === 'down'
					? 'header--hidden'
					: 'header--visible',
				'bg-background border-b-primary border-b-2 py-3'
			)}
			style={{
				position: 'fixed',
				top: 0,
				width: '100%',
				transition: 'transform 0.3s ease-in-out',
				// В 2025 году transform — самый быстрый способ скрыть элемент без пересчета макета (reflow)
				transform:
					scrollDirection === 'down'
						? 'translateY(-100%)'
						: 'translateY(0)'
			}}
		>
			<div className='container flex items-center justify-between'>
				<Logo />
				<div className='flex gap-4'>
					<ModeToggle />
					<Navigation />
				</div>
			</div>
		</header>
	)
}
