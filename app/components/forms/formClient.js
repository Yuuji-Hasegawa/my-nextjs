'use client';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
	sendMail,
	validateName,
	validateEmail,
	validateAcceptance,
	validateHoneypot,
} from '@/app/components/forms/formServer';
import Link from 'next/link';
import config from '@/config/setting.json';

function SubmitButton({ isDisabled, isSuccess, isPending, Message }) {
	const status = useFormStatus();
	let boxType;
	let boxMessage;
	const isPolite = status.pending || isPending || Message ? true : false;
	if (status.pending || isPending) {
		boxType = ':sending';
		boxMessage = '送信中...';
	} else {
		boxMessage = Message ? Message : '';
		if (isSuccess) {
			boxType = ':success';
		} else {
			boxType = ':error';
		}
	}
	return (
		<>
			<button
				className='o-box c-rect-btn :primary c-content-l u-px-m u-py-s'
				disabled={isDisabled || status.pending || isPending}
				aria-disabled={isDisabled || status.pending || isPending}
				type='submit'
			>
				送信する
			</button>
			{isPolite && (
				<div className={`o-box c-content-l c-message-box :is-view u-mt-l u-fnt-wx ${boxType}`} aria-live='polite'>
					{boxMessage}
				</div>
			)}
		</>
	);
}

export default function FormClient() {
	const initialFormData = {
		name: '',
		email: '',
		message: '',
		acceptance: false,
		subject: '',
	};
	const [formState, formAction] = useFormState(sendMail, initialFormData);
	const [nameState, nameValidateAction] = useFormState(validateName, { message: '' });
	const [emailState, emailValidateAction] = useFormState(validateEmail, { message: '' });
	const [acceptanceState, acceptanceAction] = useFormState(validateAcceptance, { values: { acceptance: false } });
	const [honeypotState, honeypotValidateAction] = useFormState(validateHoneypot, { message: '' });
	const [isPending, setIsPending] = useState(false);

	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';

	const { executeRecaptcha } = useGoogleReCaptcha();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!executeRecaptcha) {
			return;
		}
		setIsPending(true);
		const token = await executeRecaptcha('inquiry_form');
		const formData = new FormData(e.target);
		formData.append('recaptchaToken', token);
		await formAction(formData);
		setIsPending(false);
	};

	return (
		<form
			className='u-mb-xl'
			aria-label='Inquiry Form'
			action={formAction}
			key={formState?.success}
			onSubmit={handleSubmit}
		>
			<ul className='o-stack u-space-l u-insert-stack u-mb-xl'>
				<li className='c-form-item'>
					<label className='c-input-label u-dsp-ifx u-fx-y-ctr u-mb-s' htmlFor='name'>
						<span className='c-content-l u-fnt-wx u-mr-s'>お名前</span>
						<span className='o-box :brd-none :bg-alert c-required c-suppl-l u-fnt-wl u-px-xs' aria-hidden='true'>
							必須
						</span>
						<span className='c-placeholder'>例）お名前</span>
					</label>
					<input
						className='o-box c-input c-content-l u-pd-s u-fnt-wx u-w-max'
						type='text'
						id='name'
						name='name'
						placeholder=' '
						autoComplete='name'
						autoCorrect='off'
						autoCapitalize='none'
						required
						aria-required='true'
						autoFocus
						defaultValue={formState?.values?.name || ''}
						onBlur={(e) => {
							nameValidateAction(e.target.value);
						}}
						aria-describedby='name-error'
					/>
					{nameState.message && (
						<span className='c-form-error c-suppl-l :txt-alert u-fnt-wl' id='name-error' aria-live='polite'>
							{nameState.message}
						</span>
					)}
				</li>
				<li className='c-form-item'>
					<label className='c-input-label u-dsp-ifx u-fx-y-ctr u-mb-s' htmlFor='email'>
						<span className='c-content-l u-fnt-wx u-mr-s'>メールアドレス</span>
						<span className='o-box :brd-none :bg-alert c-required c-suppl-l u-fnt-wl u-px-xs' aria-hidden='true'>
							必須
						</span>
						<span className='c-placeholder'>例）info@examples.com</span>
					</label>
					<input
						className='o-box c-input c-content-l u-pd-s u-fnt-wx u-w-max'
						type='email'
						id='email'
						name='email'
						pattern='^[a-zA-Z0-9_\+\-]+(\.[a-zA-Z0-9_\+\-]+)*@([a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$'
						placeholder=' '
						autoComplete='email'
						autoCorrect='off'
						autoCapitalize='none'
						inputMode='email'
						required
						aria-required='true'
						defaultValue={formState?.values?.email || ''}
						onBlur={(e) => {
							emailValidateAction(e.target.value);
						}}
						aria-describedby='email-error'
					/>
					{emailState.message && (
						<span className='c-form-error c-suppl-l :txt-alert u-fnt-wl' id='email-error' aria-live='polite'>
							{emailState.message}
						</span>
					)}
				</li>
				<li className='c-form-item'>
					<label className='c-input-label u-dsp-ifx u-fx-y-ctr u-mb-s' htmlFor='message'>
						<span className='c-content-l u-fnt-wx u-mr-s'>お問い合わせ内容</span>
						<span className='c-placeholder'>お気軽にご入力ください</span>
					</label>
					<textarea
						className='o-box c-input c-content-l u-pd-s u-fnt-wx u-w-max'
						cols='30'
						rows='10'
						id='message'
						name='message'
						placeholder=' '
						defaultValue={formState?.values?.message}
					></textarea>
				</li>
			</ul>
			<div className='u-dsp-fx u-fx-y-ctr u-mb-l u-cursor'>
				<input
					className='o-box c-checkbox u-fx-shn u-mr-s'
					type='checkbox'
					id='acceptance'
					name='acceptance'
					value='1'
					required
					aria-required='true'
					defaultChecked={formState.values?.acceptance || false}
					onChange={(e) => {
						acceptanceAction(e.target.checked);
					}}
				/>
				<label htmlFor='acceptance' className='c-content-l u-fnt-wx u-w-max'>
					<Link
						className='c-lnk-txt :has-line :has-color'
						href={`${protocol + config.site.host + '/privacy-policy'}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						プライバシーポリシー
					</Link>
					に同意する
				</label>
			</div>
			<div style={{ display: 'none', visibility: 'hidden' }}>
				<label className='c-input-label u-dsp-ifx u-fx-y-ctr u-mb-s' htmlFor='subject'>
					<span className='c-content-l u-fnt-wx u-mr-s'>お問い合わせ件名（この欄は空のままにしてください）</span>
					<span className='c-placeholder'>例）xxについて</span>
				</label>
				<input
					className='o-box c-input c-content-l u-pd-s u-fnt-wx u-w-max'
					type='text'
					id='subject'
					name='subject'
					placeholder=' '
					autoComplete='off'
					autoCorrect='off'
					tabIndex='-1'
					defaultValue={formState?.values?.subject || ''}
					onBlur={(e) => {
						honeypotValidateAction(e.target.value);
					}}
				/>
			</div>
			<SubmitButton
				isDisabled={!acceptanceState.values?.acceptance || honeypotState?.error}
				isPending={isPending}
				isSuccess={formState.success}
				Message={formState.message}
			/>
		</form>
	);
}
