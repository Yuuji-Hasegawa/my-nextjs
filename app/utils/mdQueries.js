import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export const worksPerPage = 12;

export async function getAllWorks(options = {}) {
	const { orderby = '', exclude = '' } = options;
	const files = fs.readdirSync(path.join('posts'));
	let works = files.map((fileName) => {
		const slug = fileName.replace('.md', '');
		const fileData = fs.readFileSync(path.join('posts', fileName), 'utf-8');
		const { data } = matter(fileData);
		return {
			frontmatter: data,
			id: data.id,
			slug: slug,
			category: data.category,
			tags: data.tags,
		};
	});

	if (exclude) {
		works = works.filter((work) => work.id !== exclude);
	}
	let orderedWorks;
	if (orderby && orderby === 'random') {
		orderedWorks = shuffleArray(works);
	} else {
		orderedWorks = works.sort((a, b) => {
			return b.frontmatter.id - a.frontmatter.id;
		});
	}

	const numberPages = Math.ceil(orderedWorks.length / worksPerPage);

	return {
		works: orderedWorks,
		numberPages: numberPages,
	};
}

export async function getCategoryWorks({ category }) {
	const { works } = await getAllWorks();
	const filteredWorks = works.filter((work) => work.category === category);

	const numberPages = Math.ceil(filteredWorks.length / worksPerPage);

	return {
		works: filteredWorks,
		numberPages: numberPages,
	};
}

export async function getTagsWorks({ tag }) {
	const { works } = await getAllWorks();
	const filteredWorks = works.filter((work) => work.tags.includes(tag));

	const numberPages = Math.ceil(filteredWorks.length / worksPerPage);

	return {
		works: filteredWorks,
		numberPages: numberPages,
	};
}

function shuffleArray(array) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export async function getSingleWork(context) {
	const { slug } = context.params;
	try {
		const data = await import(`@/posts/${slug}.md`);
		const singleWork = matter(data.default);
		return {
			singleWork: singleWork,
		};
	} catch (error) {
		if (error.code === 'MODULE_NOT_FOUND') {
			notFound();
		}
		throw error;
	}
}

export async function getRelatedWork(slug) {
	let relatedWork;
	if (!slug) {
		return {
			relatedWork: null,
		};
	}
	const data = await import(`@/posts/${slug}.md`);
	relatedWork = matter(data.default);
	return {
		relatedWork: relatedWork,
	};
}

export async function getAllCategories() {
	const { works } = await getAllWorks();
	const categories = [...new Set(works.map((work) => work.category).filter(Boolean))];

	return categories;
}

export async function getAllTags() {
	const { works } = await getAllWorks();
	const tags = [...new Set(works.flatMap((work) => work.tags).filter(Boolean))];

	return tags;
}
