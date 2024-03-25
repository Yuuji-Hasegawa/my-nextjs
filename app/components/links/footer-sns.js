import { FacebookLink, TwitterLink, InstagramLink } from './sns-links';

const FooterSNS = () => (
	<div className='o-cluster u-space-s u-flex-shrink-none'>
		<FacebookLink
			className='c-text-link u-font-size-2xl u-display-block u-line-height-none'
			url='https://www.facebook.com/kamenwriter01'
		/>
		<TwitterLink
			className='c-text-link u-font-size-2xl u-display-block u-line-height-none'
			url='https://twitter.com/kamenwriter02'
		/>
		<InstagramLink
			className='c-text-link u-font-size-2xl u-display-block u-line-height-none'
			url='https://www.instagram.com/kamenwriter02/'
		/>
	</div>
);

export default FooterSNS;
