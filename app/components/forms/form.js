'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import config from '@/config/setting.json';

export default function Form() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		acceptance: false,
		nameError: '',
		emailError: '',
	});

	const handleAccept = useCallback(
		(e) => {
			setFormData({
				...formData,
				acceptance: !formData.acceptance,
			});
		},
		[formData],
	);

	const handleBlur = useCallback(
		(e) => {
			const { name, value } = e.target;
			if (name === 'name') {
				if (value.trim() === '') {
					setFormData({
						...formData,
						nameError: '必須項目です',
					});
				} else {
					setFormData({
						...formData,
						nameError: '',
					});
				}
			} else if (name === 'email') {
				const emailRegex =
					/^[a-zA-Z0-9_\+\-]+(\.[a-zA-Z0-9_\+\-]+)*@([a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
				if (value.trim() === '') {
					setFormData({
						...formData,
						emailError: '必須項目です',
					});
				} else if (!emailRegex.test(value)) {
					setFormData({
						...formData,
						emailError: 'メールアドレスの形式が正しくありません',
					});
				} else {
					setFormData({
						...formData,
						emailError: '',
					});
				}
			}
		},
		[formData],
	);
	return (
		<form className='u-mb-xl' method='post' aria-label='Inquiry Form'>
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
						value={formData.name}
						onChange={(e) => {
							setFormData({
								...formData,
								name: e.target.value,
							});
						}}
						onBlur={handleBlur}
					/>
					{formData.nameError && (
						<span className='c-form-error c-suppl-l :txt-alert u-fnt-wl'>{formData.nameError}</span>
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
						value={formData.email}
						onChange={(e) => {
							setFormData({
								...formData,
								email: e.target.value,
							});
						}}
						onBlur={handleBlur}
					/>
					{formData.emailError && (
						<span className='c-form-error c-suppl-l :txt-alert u-fnt-wl'>{formData.emailError}</span>
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
						value={formData.message}
						onChange={(e) => {
							setFormData({
								...formData,
								message: e.target.value,
							});
						}}
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
					onChange={handleAccept}
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
			<button
				className='o-box c-rect-btn :primary c-content-l u-px-m u-py-s'
				disabled={!formData.acceptance}
				aria-disabled={!formData.acceptance}
				type='submit'
			>
				送信する
			</button>
		</form>
	);
}
