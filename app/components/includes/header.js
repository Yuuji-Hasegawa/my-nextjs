'use client';
import { useState, useCallback } from 'react';
import ButtonMenu from '@/app/components/buttons/button-menu';
import Sidebar from '@/app/components/includes/sidebar';
import { LogoLink } from '@/app/components/links/bnr-links';
import { IconTransPort } from '@/app/components/svgs/icons';

export default function Header() {
	const [open, setOpen] = useState(false);
	const toggle = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<>
			<header className='o-center u-dsp-fx u-py-s u-px-clamp'>
				<ButtonMenu status='open' open={open} toggle={toggle} className='u-mr-m' />
				<LogoLink />
				<a
					className='o-box c-sq-btn :bg-ghost :brd-none u-fnt-3xl u-ml-auto'
					href='https://kamenwriter.com/'
					target='_blank'
					rel='noopener noreferrer'
					title='仮面ライター'
					aria-label='kamenwriter.comへ'
				>
					<IconTransPort className='o-icon' />
					<span className='sr-only'>kamenwriter.comへ</span>
				</a>
			</header>
			<Sidebar open={open} toggle={toggle} />
			<div className='c-sidebar-bg u-transition' onClick={toggle}></div>
		</>
	);
}
