import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import { CatLabel, CatCard } from '@/app/components/includes/category';
import JsonLd from '@/app/components/includes/jsonld';
import Pagination from '@/app/components/includes/pagination';
import Thumb from '@/app/components/includes/thumb';
import { metadata as defaultMetadata } from '@/app/layout';
import { getTagsWorks, worksPerPage, getAllWorks } from '@/app/utils/mdQueries';
import { slugToLabel, labelToSlug } from '@/app/utils/sluglabel';

import config from '@/config/setting.json';

export async function generateMetadata(props) {
	const params = await props.params;
	const slug = params.tag;
	const label = slugToLabel(slug);
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = '/works/tag';
	const uri = protocol + config.site.host + pathname + `/${slug}` + '/' + params.num;

	return {
		...defaultMetadata,
		title: `#${label}`,
		alternates: {
			canonical: uri,
		},
		openGraph: {
			...defaultMetadata.openGraph,
			title: `#${label}`,
			url: uri,
		},
		twitter: {
			...defaultMetadata.twitter,
			title: `#${label}`,
		},
		robots: {
			index: false,
			follow: true,
		},
	};
}

const TagPaginationWorks = async (props) => {
	const params = await props.params;
	const tagSlug = params.tag;
	const tagLabel = slugToLabel(tagSlug);

	const { works, numberPages } = await getTagsWorks({ tag: tagLabel });
	const currentPage = params.num;
	const limitedWorks = works.slice((currentPage - 1) * worksPerPage, currentPage * worksPerPage);

	return (
		<>
			<div className='o-center u-pb-xl u-px-clamp'>
				<h1 className='c-heading u-fnt-wt'>{`# ${tagLabel}`}</h1>
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
			<BreadCrumbs pageTitle={`# ${tagLabel}`} pageType='tag' />
			<JsonLd pageTitle={`#${tagLabel}`} pageType='tag' />
		</>
	);
};

export default TagPaginationWorks;

export async function generateStaticParams() {
	const { works, numberPages } = await getAllWorks();

	let paths = [];

	works.forEach((work) => {
		work.tags.forEach((tag) => {
			const tagSlug = labelToSlug(tag);
			for (let i = 1; i <= numberPages; i++) {
				paths.push({
					tag: tagSlug,
					num: `${i}`,
				});
			}
		});
	});

	return paths;
}
