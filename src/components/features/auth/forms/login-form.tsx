'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { redirect } from 'next/navigation'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel
} from '@/components/common/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useLoginMutation } from '@/graphql/generated/output'

import { loginSchema, TypeLoginSchema } from '@/schemas/auth/login.schema'

import { AuthWrapper } from '../auth-wrapper'

import { PUBLIC_URL } from '@/config/url.config'

interface ILoginFormProps {}

const regiterPage = PUBLIC_URL.auth('register')

export const LoginForm: FC<ILoginFormProps> = () => {
	const t = useTranslations('auth.login')

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const { isValid } = form.formState

	const [create, { loading: isLoading }] = useLoginMutation({
		onCompleted() {
			toast.success('Success login')
		},
		onError(err) {
			toast.error('Error login')
		}
	})

	function onSubmit(data: TypeLoginSchema) {
		create({ variables: { data } })
	}

	return (
		<AuthWrapper
			heading={t('heading')}
			backButtonLabel='Парақшаңыз жоқ па? Тіркелу'
			onClick={() => redirect(regiterPage)}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('email.label')}</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder={t('email.placeholder')}
										disabled={isLoading}
									/>
								</FormControl>
								{/*<FormDescription></FormDescription>*/}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('password.label')}</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='password'
										placeholder={t('password.placeholder')}
										disabled={isLoading}
									/>
								</FormControl>
								<FormDescription></FormDescription>
							</FormItem>
						)}
					/>
					<Button
						className='mt-2 w-full'
						disabled={!isValid || isLoading}
					>
						{isLoading ? 'Logging in...' : 'Login'}
					</Button>
				</form>
			</Form>
			{/*onClick={() => setIsLogin(false)}*/}
			{/*Парақшаңыз барма? Кіру*/}
			{/*Парақшаңыз жоқ па? Тіркелу*/}
		</AuthWrapper>
	)
}
