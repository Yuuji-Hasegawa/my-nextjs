'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHome } from '@/app/components/svgs/icons';
import { slugToLabel, labelToSlug } from '@/app/utils/sluglabel';

export default function BreadCrumbs({ pageTitle, pageType }) {
	const pathname = decodeURI(usePathname());
	let segments = pathname
		.split('/')
		.slice(1)
		.map((segment) => ({
			label: segment,
			path: `/${segment}`,
		}));
	if (pageType === 'notfound') {
		segments[0].path = segments.reduce((accumulator, currentValue) => accumulator + currentValue.path, '');
		segments[0].label = 'お探しのページは見つかりませんでした';
		segments.splice(1);
	} else if (segments.length == 1) {
		segments[0].label = pageTitle;
	} else if (segments.length > 1) {
		segments[0].label = 'リスト';
		if (segments.length == 2) {
			if (pageType === 'category') {
				segments[1].label = 'カテゴリー';
			} else {
				segments[1].label = 'タグ';
			}
			segments[1].path = segments[0].path + segments[1].path;
		} else {
			if (pageType === 'category' || pageType === 'tag') {
				segments.splice(1, 1);
				segments[1].label = pageType === 'tag' ? `# ${slugToLabel(segments[1].label)}` : slugToLabel(segments[1].label);
				segments[1].path = `${segments[0].path}/${pageType}${segments[1].path}`;
				segments.splice(2);
			} else if (pageType === 'paged') {
				segments.splice(1);
			} else {
				segments[1].label = slugToLabel(segments[1].label);
				segments[1].path = `${segments[0].path}/category${segments[1].path}`;
				segments[2].label = pageTitle;
				segments[2].path = `${segments[0].path}/${labelToSlug(segments[1].label)}${segments[2].path}`;
			}
		}
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
				{segments.map((segment, index) => (
					<li className='c-breadcrumb-item' key={index}>
						<span className='u-fnt-wx u-fx-shn'>
							<Link
								className='c-content-l c-lnk-txt'
								href={segment.path}
								aria-current={index === segments.length - 1 ? 'page' : undefined}
							>
								{segment.label}
							</Link>
						</span>
					</li>
				))}
			</ol>
		</nav>
	);
}
