import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import { CatLabel, CatCard } from '@/app/components/includes/category';
import JsonLd from '@/app/components/includes/jsonld';
import Pagination from '@/app/components/includes/pagination';
import Thumb from '@/app/components/includes/thumb';
import { metadata as defaultMetadata } from '@/app/layout';
import { getCategoryWorks, worksPerPage, getAllWorks } from '@/app/utils/mdQueries';
import { slugToLabel, labelToSlug } from '@/app/utils/sluglabel';

import config from '@/config/setting.json';

export async function generateMetadata(props) {
	const params = await props.params;
	const slug = params.category;
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
	const params = await props.params;
	const categorySlug = params.category;
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

export async function generateStaticParams() {
	const { works } = await getAllWorks();

	return works.map((work) => ({
		category: labelToSlug(work.category),
	}));
}
