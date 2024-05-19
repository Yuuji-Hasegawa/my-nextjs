'use client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { usePathname } from 'next/navigation';

export default function ReCAPTCHA({ children }) {
	const pathname = decodeURI(usePathname());
	const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
	if (pathname != '/inquiry') {
		return children;
	}

	return <GoogleReCaptchaProvider reCaptchaKey={key}>{children}</GoogleReCaptchaProvider>;
}
