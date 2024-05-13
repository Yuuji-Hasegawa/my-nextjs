import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import { CatLabel, CatCard } from '@/app/components/includes/category';
import JsonLd from '@/app/components/includes/jsonld';
import Pagination from '@/app/components/includes/pagination';
import Thumb from '@/app/components/includes/thumb';
import { metadata as defaultMetadata } from '@/app/layout';
import { getCategoryWorks, worksPerPage, getAllWorks } from '@/app/utils/mdQueries';
import { slugToLabel,labelToSlug } from '@/app/utils/sluglabel';

import config from '@/config/setting.json';

export async function generateMetadata(props) {
	const slug = props.params.category;
	const label = slugToLabel(slug);
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = '/works/category';
	const uri = protocol + config.site.host + pathname + `/${slug}` + '/' + props.params.num;

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

const CategoryPaginationWorks = async (props) => {
	const categorySlug = props.params.category;
	const categoryLabel = slugToLabel(categorySlug);

	const { works, numberPages } = await getCategoryWorks({ category: categoryLabel });
	const currentPage = props.params.num;
	const limitedWorks = works.slice((currentPage - 1) * worksPerPage, currentPage * worksPerPage);

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
				<Pagination numberPages={numberPages} currentPage={currentPage} />
			</div>
			<BreadCrumbs pageTitle={categoryLabel} pageType='category' />
			<JsonLd pageTitle={categoryLabel} pageType='category' />
		</>
	);
};

export default CategoryPaginationWorks;

export async function generateStaticParams() {
	const { works, numberPages } = await getAllWorks();

	let paths = [];

	works.forEach(work => {
		const categorySlug = labelToSlug(work.category);

		for (let i = 1; i <= numberPages; i++) {
			paths.push({
				category: categorySlug,
				num: `${i}`
			});
		}
	});

	return paths;
}