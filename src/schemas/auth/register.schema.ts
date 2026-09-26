import { z } from 'zod'

export const registerSchema = z.object({
	name: z.string().regex(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/),
	phone: z.string().regex(/^[+0-9\s()-]*$/),
	email: z.string().min(3).email(),
	password: z.string().min(8)
})

export type TypeRegisterSchema = z.infer<typeof registerSchema>
