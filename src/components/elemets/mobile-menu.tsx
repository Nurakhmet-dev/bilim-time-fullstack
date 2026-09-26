// components/Navbar/MobileMenu.tsx
'use client'

// Пример из shadcn
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../elemets/sheet'
import { Heading } from '../ui/heading'

export function MobileMenu({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Проверяем, нажата ли клавиша Ctrl + B
			if (e.ctrlKey && e.key === 'b') {
				e.preventDefault() // Чтобы не произошла стандартная реакция (например, выделение текста)
				setOpen(prevState => !prevState) // Тоглим состояние боковой панели
			}
		}

		// Добавляем слушателя на событие нажатия клавиш
		window.addEventListener('keydown', handleKeyDown)

		// Убираем слушателя, когда компонент размонтируется
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<button className='p-2' aria-label='Toggle menu'>
					<Menu className='h-6 w-6' />
				</button>
			</SheetTrigger>
			<SheetContent side='right' className='flex flex-col gap-8'>
				<SheetHeader className='border-b-primary border-b-2'>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				{/* Клонируем дочерние элементы, чтобы закрывать меню при клике */}
				<div
					onClick={() => setOpen(false)}
					className='flex flex-col gap-4 px-4'
				>
					{children}
				</div>
			</SheetContent>
		</Sheet>
	)
}
