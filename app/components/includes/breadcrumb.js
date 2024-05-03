'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import config from '@/config/setting.json';
import { IconHome } from '@/app/components/svgs/icons';

export default function BreadCrumb() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = decodeURI(usePathname());
	const searchparams = decodeURI(useSearchParams());
	const host = config.site.host;

	let uri = protocol + host + pathname;
	if (searchparams.toString() !== '') {
		uri += `?${searchparams.toString()}`;
	}

	return (
		<nav className='o-center u-px-clamp u-pb-xl' aria-label='Breadcrumb'>
			<ol className='o-reel'>
				<li className='c-breadcrumb-item'>
					<Link className='c-content-l c-lnk-txt' href='/'>
						<IconHome className='o-icon u-mr-s' />
						<span className='u-fnt-wx u-fx-shn'>トップページ</span>
					</Link>
				</li>
				<li className='c-breadcrumb-item'>
					<Link className='c-content-l c-lnk-txt' href={uri} aria-current='page'>
						お探しのページは見つかりませんでした
					</Link>
				</li>
			</ol>
		</nav>
	);
}
