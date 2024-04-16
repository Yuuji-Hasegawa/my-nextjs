'use client';
import { useState, useCallback } from 'react';
import ButtonMenu from '@/app/components/buttons/button-menu';
import Sidebar from '@/app/components/includes/sidebar';
import LogoLink from '@/app/components/links/logo-link';
import WarpLink from '@/app/components/links/warp-link';

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
				<WarpLink className='u-ml-auto' />
			</header>
			<Sidebar open={open} toggle={toggle} />
			<div className='c-sidebar-bg u-transition' onClick={toggle}></div>
		</>
	);
}
