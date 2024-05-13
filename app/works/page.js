import { getAllWorks, worksPerPage } from '@/app/utils/mdQueries';
import Thumb from '@/app/components/includes/thumb';
import { CatLabel, CatCard } from '@/app/components/includes/category';
import Pagination from '@/app/components/includes/pagination';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import JsonLd from '@/app/components/includes/jsonld';

import { headers } from 'next/headers';
import config from '@/config/setting.json';
import { metadata as defaultMetadata } from '@/app/layout';

const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
const pathname = headers().get('x-pathname') || '';
const uri = protocol + config.site.host + pathname;

export const metadata = {
	...defaultMetadata,
	title: 'リスト',
	alternates: {
		canonical: uri,
	},
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'リスト',
		url: uri,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'リスト',
	},
	robots: {
		index: false,
		follow: true,
	},
};

const Works = async () => {
	const { works, numberPages } = await getAllWorks();
	const limitedWorks = works.slice(0, worksPerPage);

	return (
		<>
			<div className='o-center u-pb-xl u-px-clamp'>
				<h1 className='c-heading u-fnt-wt'>リスト</h1>
				<ul className='o-grid o-grid--quart'>
					{limitedWorks.map((work, index) => (
						<li key={index}>
							<CatCard target={`/works/${work.slug}`} category={work.category}>
								<Thumb srcPath={work.frontmatter.image} />
								<span className='o-stack :bg-ghost u-py-s u-px-m'>
									<span className='c-content-l :txt-trim :two-line u-fnt-wl'>{work.frontmatter.title}</span>
									<CatLabel label={work.frontmatter.category} />
								</span>
							</CatCard>
						</li>
					))}
				</ul>
				<Pagination numberPages={numberPages} />
			</div>
			<BreadCrumbs pageTitle={metadata.title} pageType='webpage' />
			<JsonLd pageTitle={metadata.title} />
		</>
	);
};

export default Works;
