export const UserRole = {
	STUDENT: 'STUDENT',
	CURATOR: 'CURATOR',
	ADMIN: 'ADMIN',
	SUPER_ADMIN: 'SUPER_ADMIN',
} as const

export type TUserRole = (typeof UserRole)[keyof typeof UserRole]

export interface IStudent {
	id: string
	name: string
	email: string
	phone: string
	avatarUrl: string
	role: TUserRole
	favorites: any[]
}

export interface IStudentEditInput extends Pick<
	IStudent,
	'name' | 'email' | 'phone' | 'role'
> {}
