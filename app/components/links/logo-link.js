import Link from 'next/link';
import IconLogo from '@/app/components/icons/icon-logo';

export default function LogoLink({ className }) {
	const baseClassName = 'c-logo-link u-display-inline-flex u-align-items-center u-flex-shrink-none u-transition';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;

	return (
		<Link className={setClassName} href='/' title='シン・仮面ライター' aria-label='シン・仮面ライターのトップページへ'>
			<IconLogo className='o-icon' />
			<span className='sr-only'>シン・仮面ライターのトップページへ</span>
		</Link>
	);
}
