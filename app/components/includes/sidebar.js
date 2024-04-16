import ButtonMenu from '@/app/components/buttons/button-menu';
import BnrList from '@/app/components/links/bnr-list';
import LogoLink from '@/app/components/links/logo-link';
import MainNav from '@/app/components/links/main-nav';
import SidebarSNS from '@/app/components/links/sidebar-sns';
import SubNav from '@/app/components/links/sub-nav';

export default function Sidebar({ toggle, open }) {
	return (
		<div id='sidebar' className=':bg-primary u-transition' aria-hidden={!open} tabIndex={open ? '-1' : 'false'}>
			<div className='u-dsp-fx u-py-s'>
				<ButtonMenu open={open} toggle={toggle} label='close' className='u-mr-m' />
				<LogoLink />
			</div>
			<div className='c-sidebar-bottom'>
				<MainNav className='o-box :brd-b u-py-m' />
				<BnrList className='o-box :brd-b u-py-m' />
				<SubNav className='u-space-2xs u-insert-cluster u-mb-s' />
				<SidebarSNS />
				<p className='c-suppl-m :slnt u-pb-2xl u-fnt-wx'>©︎ kamenwriter.com</p>
			</div>
		</div>
	);
}
