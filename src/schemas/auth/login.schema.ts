import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().min(3).email(),
	password: z.string().min(8)
})

export type TypeLoginSchema = z.infer<typeof loginSchema>
