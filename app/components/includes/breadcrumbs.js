'use client';
import Link from 'next/link';
import { IconHome } from '@/app/components/svgs/icons';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';

export default function BreadCrumbs({ pageTitle }) {
	const segments = useSelectedLayoutSegments();
	const pathname = decodeURI(usePathname());

	if (segments.length === 0) {
		return null;
	}

	const breadcrumbSegments = segments.map((segment, index) => {
		let title;
		switch (segment) {
			case '__DEFAULT__':
				title = 'お探しのページは見つかりませんでした';
				break;
			case 'aboutus':
				title = 'このサイトについて';
				break;
			case 'works':
				title = 'リスト';
				break;
			case 'inquiry':
				title = 'お問い合わせ';
				break;
			case 'terms':
				title = 'サイト規約';
				break;
			case 'privacy-policy':
				title = 'プライバシーポリシー';
				break;
			default:
				title = segment;
		}
		let uri = segment == '__DEFAULT__' ? pathname : '/' + segments.slice(0, index + 1).join('/');
		return { title, uri };
	});

	return (
		<nav className='o-center u-px-clamp u-pb-xl' aria-label='Breadcrumb'>
			<ol className='o-reel'>
				<li className='c-breadcrumb-item'>
					<Link className='c-content-l c-lnk-txt' href='/'>
						<IconHome className='o-icon u-mr-s' />
						<span className='u-fnt-wx u-fx-shn'>トップページ</span>
					</Link>
				</li>
				{breadcrumbSegments.map((breadcrumb, index) => {
					const isLast = index === breadcrumbSegments.length - 1;
					return (
						<li className='c-breadcrumb-item' key={index}>
							{isLast ? (
								<Link className='c-content-l c-lnk-txt' href={breadcrumb.uri} aria-current='page'>
									{pageTitle || breadcrumb.title}
								</Link>
							) : (
								<Link className='c-content-l c-lnk-txt' href={breadcrumb.uri}>
									{breadcrumb.title}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
