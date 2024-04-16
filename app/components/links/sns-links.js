import IconDocument from '@/app/components/icons/icon-document';
import IconFacebook from '@/app/components/icons/icon-facebook';
import IconInstagram from '@/app/components/icons/icon-instagram';
import IconLink from '@/app/components/icons/icon-link';
import IconLinkedin from '@/app/components/icons/icon-linkedin';
import IconTwitter from '@/app/components/icons/icon-twitter';

export const FacebookLink = ({ className, url = 'https://www.facebook.com/' }) => {
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={className}
			href={setUrl}
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

export const TwitterLink = ({ className, url = 'https://twitter.com/' }) => {
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={className}
			href={setUrl}
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
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={className}
			href={setUrl}
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
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={className}
			href={setUrl}
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
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={className}
			href={setUrl}
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
	const setUrl = url && encodeURI(url);

	return (
		<a
			className={className}
			href={setUrl}
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
