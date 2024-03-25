import ButtonMenu from '@/app/components/buttons/button-menu';
import LogoLink from '@/app/components/links/logo-link';
import MainNav from '@/app/components/links/main-nav';
import SubNav from '@/app/components/links/sub-nav';
import SidebarSNS from '@/app/components/links/sidebar-sns';
import BnrList from '@/app/components/links/bnr-list';

export default function Sidebar({ toggle, open }) {
	return (
		<div
			id='sidebar'
			className='u-space-outer u-bg-primary u-transition'
			aria-hidden={!open}
			tabIndex={open ? '-1' : 'false'}
		>
			<div className='u-pt-s u-pb-s u-display-flex'>
				<ButtonMenu open={open} toggle={toggle} label='close' className='u-mr-m' />
				<LogoLink className='c-logo-link--header u-font-size-3xl u-position-relative' />
			</div>
			<div className='c-sidebar-bottom'>
				<MainNav className='o-box c-sidebar-box u-pt-m u-pb-m' />
				<SubNav className='o-box c-sidebar-box u-pt-m u-pb-m u-mb-l' />
				<SidebarSNS className='u-mb-l' />
				<BnrList className='u-space-s u-mb-m' />
				<p className='u-pb-2xl u-font-family-en u-font-size-2xs u-font-weight-m u-line-height-l u-letter-spacing-s c-side-copy-right'>
					©︎ kamenwriter.com
				</p>
			</div>
		</div>
	);
}
