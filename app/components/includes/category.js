'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconFolder } from '@/app/components/svgs/icons';
import { labelToSlug, slugToLabel } from '@/app/utils/sluglabel';

export const CatLabel = ({ label }) => {
	if (!label || label.trim() === '') {
		return null;
	}

	return <span className='c-label-l :txt-sec u-fnt-wx'>{label}</span>;
};

export const CatCard = ({ children, category, target }) => {
	const Slug = labelToSlug(category);
	let uri = target;
	const match = target.match(/^(.+)\/([^\/]*)$/);
	if (match) {
		if (Slug) {
			uri = `${match[1]}/${Slug}/${match[2]}`;
		}
	}

	return (
		<Link className='o-box o-stack :brd-none c-card-lnk' href={uri}>
			{children}
		</Link>
	);
};

export const CatLink = ({ pageSlug, categorySlug }) => {
	const pathname = usePathname();
	const splitPath = pathname.replace(`/${categorySlug}/${pageSlug}`, '');
	const label = slugToLabel(categorySlug);
	const target = `${splitPath}/category/${categorySlug}`;

	return (
		<Link className='c-lnk-txt :has-color' href={target}>
			<IconFolder className='o-icon u-mr-s' />
			<span className='c-content-l u-fnt-wx'>{label}</span>
		</Link>
	);
};

export const Tags = ({ pageSlug, categorySlug, tags }) => {
	const pathname = usePathname();
	if (tags.length === 0) {
		return null;
	}
	let splitPath;
	if (categorySlug) {
		splitPath = pathname.replace(`/${categorySlug}/${pageSlug}`, '');
	} else {
		splitPath = pathname.replace(`/${pageSlug}`, '');
	}

	return (
		<div className='o-cluster'>
			{tags.map((tag, index) => {
				const slug = labelToSlug(tag);
				return (
					<Link key={index} href={`${splitPath}/tag/${slug}`} className='c-lnk-txt c-content-l u-fnt-wx'>
						<span className='u-mr-xs'>#</span>
						{tag}
					</Link>
				);
			})}
		</div>
	);
};
