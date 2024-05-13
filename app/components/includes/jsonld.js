'use client';
import { usePathname } from 'next/navigation';
import config from '@/config/setting.json';
import Script from 'next/script';
import { slugToLabel } from '@/app/utils/sluglabel';

export default function JsonLd({ pageTitle, pageImage, pageType, catLabel, pubDate, updateDate, description }) {
	const pathName = usePathname();
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const ogpImg = pageImage ? `${protocol}${config.site.host}${pageImage}` : `${protocol}${config.site.host}/ogp.png`;
	const ogpImgW = pageImage ? 1920 : 1200;
	const ogpImgH = pageImage ? 1080 : 630;
	pubDate = pubDate ? pubDate + 'T00:00:00+09:00' : '';
	const modDate = updateDate ? updateDate : pubDate;
	let segments = pathName
		.split('/')
		.slice(1)
		.map((segment) => ({
			label: segment,
			path: `/${segment}`,
		}));

	let breadArray = [
		{
			'@type': 'ListItem',
			position: 1,
			item: {
				'@id': encodeURIComponent(new URL(protocol + config.site.host)),
				name: 'トップページ',
			},
		},
	];

	if (pageType === 'notfound') {
		breadArray.push({
			'@type': 'ListItem',
			position: 2,
			item: {
				'@id': encodeURIComponent(new URL(protocol + config.site.host + pathName)),
				name: 'お探しのページは見つかりませんでした',
			},
		});
	} else if (segments.length == 1) {
		breadArray.push({
			'@type': 'ListItem',
			position: 2,
			item: {
				'@id': encodeURIComponent(new URL(protocol + config.site.host + pathName)),
				name: pageTitle,
			},
		});
	} else if (segments.length > 1) {
		breadArray.push({
			'@type': 'ListItem',
			position: 2,
			item: {
				'@id': encodeURIComponent(new URL(protocol + config.site.host + segments[0].path)),
				name: 'リスト',
			},
		});
		if (segments.length == 2) {
			if (pageType === 'category') {
				breadArray.push({
					'@type': 'ListItem',
					position: 3,
					item: {
						'@id': encodeURIComponent(new URL(protocol + config.site.host + segments[0].path + segments[1].path)),
						name: 'カテゴリー',
					},
				});
			} else {
				breadArray.push({
					'@type': 'ListItem',
					position: 3,
					item: {
						'@id': encodeURIComponent(new URL(protocol + config.site.host + segments[0].path + segments[1].path)),
						name: 'タグ',
					},
				});
			}
		} else {
			if (pageType === 'category' || pageType === 'tag') {
				segments.splice(1, 1);
				breadArray.push({
					'@type': 'ListItem',
					position: 3,
					item: {
						'@id': encodeURIComponent(
							new URL(`${protocol}${config.site.host}${segments[0].path}/${pageType}${segments[1].path}`),
						),
						name: pageTitle,
					},
				});
			} else if (pageType === 'article') {
				breadArray.push(
					{
						'@type': 'ListItem',
						position: 3,
						item: {
							'@id': encodeURIComponent(
								new URL(`${protocol}${config.site.host}${segments[0].path}/category${segments[1].path}`),
							),
							name: slugToLabel(segments[1].label),
						},
					},
					{
						'@type': 'ListItem',
						position: 4,
						item: {
							'@id': encodeURIComponent(
								new URL(`${protocol}${config.site.host}${segments[0].path}${segments[1].path}${segments[2].path}`),
							),
							name: pageTitle,
						},
					},
				);
			}
		}
	}

	let breadJson = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: breadArray,
	};

	const frontJson = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: config.site.title,
		url: encodeURIComponent(new URL(protocol + config.site.host)),
	};

	const contentJson = {
		'@context': 'http://schema.org',
		'@type': 'NewsArticle',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': encodeURIComponent(new URL(protocol + config.site.host + pathName)),
		},
		name: pageTitle,
		headline: pageTitle,
		image: [
			{
				'@type': 'ImageObject',
				url: encodeURIComponent(new URL(ogpImg)),
				width: ogpImgW,
				height: ogpImgH,
			},
		],
		articleSection: catLabel,
		datePublished: pubDate,
		dateModified: modDate,
		author: {
			'@type': 'Person',
			name: config.company.owner,
			url: 'https://kamenwriter.com',
			sameAs: [
				'https://www.facebook.com/yuuji.hasegawa/',
				'https://twitter.com/kamenwriter01',
				'https://www.instagram.com/kamenwriter/',
				'https://www.linkedin.com/in/kamenwriter/',
				'https://note.com/kamenwriter',
				'https://github.com/Yuuji-Hasegawa',
				'https://gravatar.com//kamenwriter01',
			],
		},
		publisher: {
			'@type': 'Organization',
			name: config.company.name,
			url: 'https://kamenwriter.com',
			logo: {
				'@type': 'ImageObject',
				url: encodeURIComponent(new URL(`${protocol}${config.site.host}/images/kw-bnr.svg`)),
				width: 94,
				height: 20,
			},
			sameAs: [
				'https://www.facebook.com/kamenwriter01',
				'https://twitter.com/kamenwriter02',
				'https://www.instagram.com/kamenwriter02/',
				'https://bbns.jp/',
				'https://nxz.kamenwriter.com/',
			],
		},
		description: description,
	};

	let jsonLd = ``;
	if (pathName === '') {
		jsonLd = '[' + JSON.stringify(frontJson) + ',' + JSON.stringify(breadJson) + ']';
	} else if (pageType === 'article') {
		jsonLd = '[' + JSON.stringify(breadJson) + ',' + JSON.stringify(contentJson) + ']';
	} else {
		jsonLd = JSON.stringify(breadJson);
	}

	return (
		<Script
			type='application/ld+json'
			strategy='afterInteractive'
			id='json-ld'
			dangerouslySetInnerHTML={{
				__html: jsonLd,
			}}
		/>
	);
}
