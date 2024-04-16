import Link from 'next/link';
import IconLogo from '@/app/components/icons/icon-logo';

export default function LogoLink({ className }) {
	className = className
		? `c-lnk-txt :logo c-display-m u-dsp-fx u-fx-y-ctr ${className}`
		: 'c-lnk-txt :logo c-display-m u-dsp-fx u-fx-y-ctr';

	return (
		<Link className={className} href='/' title='シン・仮面ライター' aria-label='シン・仮面ライターのトップページへ'>
			<IconLogo className='o-icon' />
			<span className='sr-only'>シン・仮面ライターのトップページへ</span>
		</Link>
	);
}
