import { getAllTags } from '@/app/utils/mdQueries';
import { labelToSlug } from '@/app/utils/sluglabel';
import Link from 'next/link';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import JsonLd from '@/app/components/includes/jsonld';

import { headers } from 'next/headers';
import config from '@/config/setting.json';
const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
const pathname = headers().get('x-pathname') || '';
const uri = protocol + config.site.host + pathname;

import { metadata as defaultMetadata } from '@/app/layout';

export const metadata = {
	...defaultMetadata,
	title: '全タグ一覧',
	alternates: {
		canonical: uri,
	},
	openGraph: {
		...defaultMetadata.openGraph,
		title: '全タグ一覧',
		url: uri,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: '全タグ一覧',
	},
	robots: {
		index: false,
		follow: true,
	},
};

const Tag = async () => {
	const tags = await getAllTags();
	return (
		<>
			<div className='o-center u-px-clamp u-pb-xl'>
				<h1 className='c-heading u-fnt-wt'>タグ一覧</h1>
				<ul className='o-cluster'>
					{tags.map((tag) => (
						<li key={tag}>
							<Link
								className='c-content-l :bg-ghost u-pd-m u-dsp-b u-lnh-n u-fnt-wx'
								href={`/works/tag/${labelToSlug(tag)}`}
							>
								<span className='u-mr-xs'>#</span>
								{tag}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<BreadCrumbs pageType='tag' />
			<JsonLd pageType='tag' />
		</>
	);
};
export default Tag;
