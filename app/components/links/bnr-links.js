import Link from 'next/link';
import { IconBbns, IconKw, IconNxz, IconLogo } from '@/app/components/svgs/brands';

export const LogoLink = ({ className }) => {
	className = className
		? `c-lnk-txt :logo c-display-m u-dsp-fx u-fx-y-ctr ${className}`
		: 'c-lnk-txt :logo c-display-m u-dsp-fx u-fx-y-ctr';
	return (
		<Link className={className} href='/' title='シン・仮面ライター' aria-label='シン・仮面ライターのトップページへ'>
			<IconLogo className='o-icon' />
			<span className='sr-only'>シン・仮面ライターのトップページへ</span>
		</Link>
	);
};

export const KwLink = ({ className, url = 'https://kamenwriter.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='kamenwriter.com'
			aria-label='kamenwriter.comへ'
		>
			<IconKw className='o-icon' />
			<span className='sr-only'>kamenwriter.comへ</span>
		</a>
	);
};

export const BbnLink = ({ className, url = 'https://bbns.jp/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='BLUE B NOSE'
			aria-label='BLUE B NOSEへ'
		>
			<IconBbns className='o-icon' />
			<span className='sr-only'>BLUE B NOSEへ</span>
		</a>
	);
};

export const NxzLink = ({ className, url = 'https://nxz.kamenwriter.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='NXZ'
			aria-label='nxz.kamenwriter.comへ'
		>
			<IconNxz className='o-icon' />
			<span className='sr-only'>nxz.kamenwriter.comへ</span>
		</a>
	);
};
