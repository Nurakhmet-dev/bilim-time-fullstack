export const APP_URL = process.env.NEXT_PUBLIC_APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}` as string,

	home: () => PUBLIC_URL.root('/'),
	auth: (url: 'login' | 'register') => PUBLIC_URL.root(`/auth/${url}`),
	courses: () => PUBLIC_URL.root('/courses'),

	course: (slug = '') => PUBLIC_URL.root(`/course/${slug}`),
	courseByOneLesson: (slug = '') =>
		PUBLIC_URL.root(`/course-by-one-lesson/${slug}`)
	//courseByOneLesson: (slug = '') => PUBLIC_URL.root(`/course-by-one-lesson/${slug}`),
}

export const STUDENT_URL = {
	root: (url = '') => `/student${url ? url : ''}` as string,

	dashboard: () => STUDENT_URL.root('/dashboard'),
	favorites: () => STUDENT_URL.root('/favorites')
}

export const CURATOR_URL = {
	root: (url = '') => `/curator${url ? url : ''}` as string,

	dashboard: () => STUDENT_URL.root('/dashboard'),

	groups: () => STUDENT_URL.root('/groups'),
	group: (slug = '') => STUDENT_URL.root(`/group/${slug}`),
	groupStatistics: (slug = '') =>
		STUDENT_URL.root(`/group-statistics/${slug}`),

	student: (id = '') => STUDENT_URL.root(`/students/${id}`),
	studentReset: (id = '') => STUDENT_URL.root(`/students/reset/${id}`)
}

export const ADMIN_URL = {
	root: (url = '') => `/admin${url ? url : ''}` as string,

	dashboard: () => ADMIN_URL.root('/dashboard'),

	courses: () => ADMIN_URL.root('/courses'),
	courseCreate: () => ADMIN_URL.root(`/course/new`),
	courseEdit: (id = '') => ADMIN_URL.root(`/course/${id}`),

	lessons: () => ADMIN_URL.root('/lessons'),
	LessonEdit: (id = '') => ADMIN_URL.root(`/Lesson/${id}`),

	tests: () => ADMIN_URL.root('/tests'),
	testEdit: (id = '') => ADMIN_URL.root(`/test/${id}`)
}

export const SUPER_ADMIN_URL = {
	root: (url = '') => `/super-admin${url ? url : ''}` as string,

	dashboard: () => SUPER_ADMIN_URL.root('/dashboard')
}
