'use server';

export async function sendMail(prevState, formData) {
	const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL;
	const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

	if (!formData.get('name') || !formData.get('email') || formData.get('subject').trim() !== '') {
		return {
			success: false,
			message: '入力内容に不備があります。入力内容を確認して、もう一度送信してください。',
		};
	}

	const payload = {
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message'),
	};

	try {
		const recaptchaToken = formData.get('recaptchaToken');

		const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
		const recaptchaResponse = await fetch(verifyUrl, {
			method: 'POST',
		});
		const recaptchaData = await recaptchaResponse.json();

		if (!recaptchaData.success) {
			return {
				success: false,
				message: 'reCAPTCHA検証に失敗しました。もう一度お試しください。',
			};
		}

		const response = await fetch(GATEWAY_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});
		if (!response.ok) {
			throw new Error('送信に失敗しました。');
		} else {
			return {
				success: true,
				message: '送信が完了しました。',
			};
		}
	} catch (e) {
		return {
			success: false,
			message: e.message,
		};
	}
}

export async function validateName(prevState, value) {
	try {
		if (!value.trim()) {
			throw new Error('必須項目です。');
		}
		return {
			message: '',
		};
	} catch (e) {
		return {
			message: e.message,
		};
	}
}

export async function validateEmail(prevState, value) {
	const emailRegex = /^[a-zA-Z0-9_\+\-]+(\.[a-zA-Z0-9_\+\-]+)*@([a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
	try {
		if (!value.trim()) {
			throw new Error('必須項目です。');
		} else if (!emailRegex.test(value)) {
			throw new Error('メールアドレスの形式が正しくありません。');
		}
		return {
			message: '',
		};
	} catch (e) {
		return {
			message: e.message,
		};
	}
}

export async function validateAcceptance(prevState, value) {
	return {
		values: {
			...prevState.values,
			acceptance: value,
		},
	};
}

export async function validateHoneypot(prevState, value) {
	try {
		if (value.trim() !== '') {
			throw new Error('入力内容に不備があります。入力内容を確認して、もう一度送信してください。');
		} else {
			return {
				error: false,
				message: '',
			};
		}
	} catch (e) {
		return {
			error: true,
			message: e.message,
		};
	}
}
