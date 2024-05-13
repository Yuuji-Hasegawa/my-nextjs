import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import { getCategoryWorks, worksPerPage } from '@/app/utils/mdQueries';
import Thumb from '@/app/components/includes/thumb';
import { CatLabel, CatCard } from '@/app/components/includes/category';
import { slugToLabel } from '@/app/utils/sluglabel';
import Pagination from '@/app/components/includes/pagination';
import JsonLd from '@/app/components/includes/jsonld';

import config from '@/config/setting.json';
import { metadata as defaultMetadata } from '@/app/layout';

export async function generateMetadata(props) {
	const slug = props.params.slug;
	const label = slugToLabel(slug);
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = '/works/category';
	const uri = protocol + config.site.host + pathname + `/${slug}`;

	return {
		...defaultMetadata,
		title: label,
		alternates: {
			canonical: uri,
		},
		openGraph: {
			...defaultMetadata.openGraph,
			title: label,
			url: uri,
		},
		twitter: {
			...defaultMetadata.twitter,
			title: label,
		},
		robots: {
			index: false,
			follow: true,
		},
	};
}

const CategoryWorks = async (props) => {
	const categorySlug = props.params.slug;
	const categoryLabel = slugToLabel(categorySlug);

	const { works, numberPages } = await getCategoryWorks({ category: categoryLabel });
	const limitedWorks = works.slice(0, worksPerPage);

	return (
		<>
			<div className='o-center u-pb-xl u-px-clamp'>
				<h1 className='c-heading u-fnt-wt'>{categoryLabel}</h1>
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
			<BreadCrumbs pageTitle={categoryLabel} pageType='category' />
			<JsonLd pageTitle={categoryLabel} pageType='category' />
		</>
	);
};

export default CategoryWorks;
