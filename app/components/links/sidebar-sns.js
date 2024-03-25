import { FacebookLink, TwitterLink, InstagramLink } from './sns-links';

const SidebarSNS = ({ className }) => (
	<div className={className}>
		<h2 className='c-follow-heading u-font-family-en u-font-size-xl u-font-weight-b u-letter-spacing-m u-mb-s'>
			Follow Me
		</h2>
		<div className='o-cluster'>
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
	</div>
);

export default SidebarSNS;
