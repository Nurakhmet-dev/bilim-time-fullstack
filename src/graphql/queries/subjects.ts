import { gql } from '@apollo/client'
import { SubjectModel } from '../generated/output'

export const GET_SUBJECTS = gql`
	query {
		getSubjects {
			id
			price
			title
		}
	}
`
