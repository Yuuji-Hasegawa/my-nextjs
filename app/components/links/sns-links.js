import {
	IconDocument,
	IconFacebook,
	IconGitHub,
	IconInstagram,
	IconLink,
	IconLinkedin,
	IconTwitter,
} from '@/app/components/svgs/icons';

export const FacebookLink = ({ className, url = 'https://www.facebook.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='Facebook'
			aria-label='Facebookへ'
		>
			<IconFacebook className='o-icon' />
			<span className='sr-only'>Facebookへ</span>
		</a>
	);
};

export const GithubLink = ({ className, url = 'https://github.com/Yuuji-Hasegawa' }) => {
	url = url && encodeURI(url);

	return (
		<a className={className} href={url} target='_blank' rel='noopener noreferrer' title='GitHub' aria-label='Githubへ'>
			<IconGitHub className='o-icon' />
			<span className='sr-only'>GitHubへ</span>
		</a>
	);
};

export const TwitterLink = ({ className, url = 'https://twitter.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='Twitter'
			aria-label='Twitterへ'
		>
			<IconTwitter className='o-icon' />
			<span className='sr-only'>Twitterへ</span>
		</a>
	);
};

export const InstagramLink = ({ className, url = 'https://www.instagram.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='Instagram'
			aria-label='Instagramへ'
		>
			<IconInstagram className='o-icon' />
			<span className='sr-only'>Instagramへ</span>
		</a>
	);
};

export const LinkedinLink = ({ className, url = 'https://www.linkedin.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='Linkedin'
			aria-label='Linkedinへ'
		>
			<IconLinkedin className='o-icon' />
			<span className='sr-only'>Linkedinへ</span>
		</a>
	);
};

export const NoteLink = ({ className, url = 'https://note.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='note.com'
			aria-label='note.comへ'
		>
			<IconDocument className='o-icon' />
			<span className='sr-only'>note.comへ</span>
		</a>
	);
};

export const WebsiteLink = ({ className, url = 'https://kamenwriter.com/' }) => {
	url = url && encodeURI(url);

	return (
		<a
			className={className}
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title='仮面ライター'
			aria-label='kamenwriter.comへ'
		>
			<IconLink className='o-icon' />
			<span className='sr-only'>kamenwriter.comへ</span>
		</a>
	);
};
