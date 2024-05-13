import Link from 'next/link';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import JsonLd from '@/app/components/includes/jsonld';
import { metadata as defaultMetadata } from '@/app/layout';
import { getAllCategories } from '@/app/utils/mdQueries';
import { labelToSlug } from '@/app/utils/sluglabel';

import config from '@/config/setting.json';
const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
const pathname = '/works/category';
const uri = protocol + config.site.host + pathname;

export const metadata = {
	...defaultMetadata,
	title: '全カテゴリー',
	alternates: {
		canonical: uri,
	},
	openGraph: {
		...defaultMetadata.openGraph,
		title: '全カテゴリー',
		url: uri,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: '全カテゴリー',
	},
	robots: {
		index: false,
		follow: true,
	},
};

const Category = async () => {
	const categories = await getAllCategories();
	return (
		<>
			<div className='o-center u-px-clamp u-pb-xl'>
				<h1 className='c-heading u-fnt-wt'>カテゴリー一覧</h1>
				<ul className='o-stack u-insert-stack u-space-s'>
					{categories.map((category) => (
						<li key={category}>
							<Link
								className='c-display-2xs :bg-ghost u-pd-m u-dsp-b u-lnh-n u-fnt-wx'
								href={`/works/category/${labelToSlug(category)}`}
							>
								{category}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<BreadCrumbs pageType='category' />
			<JsonLd pageType='category' />
		</>
	);
};
export default Category;
