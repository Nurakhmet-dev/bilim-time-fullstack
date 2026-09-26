export const COOKIE_NAME = 'language'
export const languages = ['kk', 'ru'] as const
export const defaultLanguage:TLanguage = 'kk'

export type TLanguage = (typeof languages)[number]
