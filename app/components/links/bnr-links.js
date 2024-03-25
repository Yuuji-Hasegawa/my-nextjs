import IconKw from '@/app/components/icons/icon-kw';
import IconBbns from '@/app/components/icons/icon-bbns';
import IconNxz from '@/app/components/icons/icon-nxz';

export const KwLink = ({ className, url = 'https://kamenwriter.com/' }) => {
	const baseClassName = 'u-transition';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={setClassName}
			href={setUrl}
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
	const baseClassName = 'u-transition';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={setClassName}
			href={setUrl}
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
	const baseClassName = 'u-transition';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={setClassName}
			href={setUrl}
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
