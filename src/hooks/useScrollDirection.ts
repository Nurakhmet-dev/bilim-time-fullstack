'use client'
import { useEffect, useRef, useState } from 'react'

// Определяем возможные значения направления
type ScrollDirection = 'up' | 'down' | null

export function useScrollDirection(threshold: number = 30): ScrollDirection {
	const [scrollDirection, setScrollDirection] =
		useState<ScrollDirection>('up')

	// Используем useRef для хранения числовых значений без вызова ререндера
	const lastScrollY = useRef<number>(0)
	const ticking = useRef<boolean>(false)

	useEffect(() => {
		const updateScrollDirection = (): void => {
			const currentScrollY = window.scrollY

			// Проверка порога чувствительности
			if (Math.abs(currentScrollY - lastScrollY.current) < threshold) {
				ticking.current = false
				return
			}

			// Определяем направление
			const direction: ScrollDirection =
				currentScrollY > lastScrollY.current ? 'down' : 'up'

			if (direction !== scrollDirection) {
				setScrollDirection(direction)
			}

			// Обновляем позицию (защита от отрицательного скролла на iOS)
			lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0
			ticking.current = false
		}

		const onScroll = (): void => {
			if (!ticking.current) {
				window.requestAnimationFrame(updateScrollDirection)
				ticking.current = true
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [scrollDirection, threshold])

	return scrollDirection
}
