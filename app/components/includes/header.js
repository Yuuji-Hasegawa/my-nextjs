'use client';
import { useState, useCallback } from 'react';
import ButtonMenu from '@/app/components/buttons/button-menu';
import LogoLink from '@/app/components/links/logo-link';
import WarpLink from '@/app/components/links/warp-link';
import Sidebar from '@/app/components/includes/sidebar';

export default function Header() {
	const [open, setOpen] = useState(false);
	const toggle = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<>
			<header className='o-center u-pt-s u-pb-s u-space-outer u-display-flex'>
				<ButtonMenu status='open' open={open} toggle={toggle} className='u-mr-m' />
				<LogoLink className='c-logo-link--header u-font-size-3xl u-position-relative' />
				<WarpLink className='u-block-right' />
			</header>
			<Sidebar open={open} toggle={toggle} />
			<div className='c-sidebar-bg u-transition' onClick={toggle}></div>
		</>
	);
}
