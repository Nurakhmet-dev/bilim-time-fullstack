import { IStudent } from "./user.types"

export interface IAuthForm {
	name?: string
	email: string
	password: string
}

export interface IAuthRsponse {
    user:IStudent
}
