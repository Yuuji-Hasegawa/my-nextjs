import { FacebookLink, TwitterLink, InstagramLink } from '@/app/components/links/sns-links';

const SidebarSNS = () => (
	<div className='o-cluster u-space-2xs u-insert-cluster u-mb-s'>
		<FacebookLink className='c-lnk-txt c-display-s u-dsp-fx u-pd-s' url='https://www.facebook.com/kamenwriter01' />
		<TwitterLink className='c-lnk-txt c-display-s u-dsp-fx u-pd-s' url='https://twitter.com/kamenwriter02' />
		<InstagramLink className='c-lnk-txt c-display-s u-dsp-fx u-pd-s' url='https://www.instagram.com/kamenwriter02/' />
	</div>
);

export default SidebarSNS;
