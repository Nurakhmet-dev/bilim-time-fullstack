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

import { useRegisterMutation } from '@/graphql/generated/output'

import {
	registerSchema,
	TypeRegisterSchema
} from '@/schemas/auth/register.schema'

import { AuthWrapper } from '../auth-wrapper'

import { PUBLIC_URL } from '@/config/url.config'

interface IRegisterFormProps {}

const loginPage = PUBLIC_URL.auth('login')

export const RegisterForm: FC<IRegisterFormProps> = () => {
	const t = useTranslations('auth.register')

	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
			phone: ''
		}
	})

	const { isValid } = form.formState

	const [create, { loading: isLoading }] = useRegisterMutation({
		onCompleted() {
			toast.success('Success login')
			alert('email verify')
		},
		onError(err) {
			toast.error('Error login')
		}
	})

	function onSubmit(data: TypeRegisterSchema) {
		create({ variables: { data } })
	}

	return (
		<AuthWrapper
			heading={t('heading')}
			backButtonLabel='Парақшаңыз барма? Кіру'
			onClick={() => redirect(loginPage)}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('name.label')}</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='text'
										placeholder={t('name.placeholder')}
										disabled={isLoading}
									/>
								</FormControl>
								{/*<FormDescription></FormDescription>*/}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('phone.label')}</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='tel'
										placeholder={t('phone.placeholder')}
										disabled={isLoading}
									/>
								</FormControl>
								{/*<FormDescription></FormDescription>*/}
							</FormItem>
						)}
					/>
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
						{isLoading ? 'Logging in...' : t('submit')}
					</Button>
				</form>
			</Form>
			{/*onClick={() => setIsLogin(false)}*/}
			{/*Парақшаңыз барма? Кіру*/}
			{/*Парақшаңыз жоқ па? Тіркелу*/}
		</AuthWrapper>
	)
}
