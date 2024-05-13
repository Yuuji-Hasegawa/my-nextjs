import Link from 'next/link';
import ShareUrl from '@/app/components/forms/share-url';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import { CatLink, Tags, CatCard, CatLabel } from '@/app/components/includes/category';
import { PubDate, UpdateDate } from '@/app/components/includes/date';
import JsonLd from '@/app/components/includes/jsonld';
import Thumb from '@/app/components/includes/thumb';
import {
	FacebookLink,
	GithubLink,
	TwitterLink,
	InstagramLink,
	LinkedinLink,
	NoteLink,
	WebsiteLink,
} from '@/app/components/links/sns-links';
import { IconExternal, IconArrowNext } from '@/app/components/svgs/icons';

import { metadata as defaultMetadata } from '@/app/layout';
import { getAllWorks, getSingleWork, getRelatedWork } from '@/app/utils/mdQueries';
import { labelToSlug } from '@/app/utils/sluglabel';
import config from '@/config/setting.json';

function nl2br(str) {
	return str.replace(/(\r\n|\n|\r)/gm, '<br>');
}

export async function generateMetadata(props) {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = '/works';
	const uri = protocol + config.site.host + pathname + `/${props.params.category}` + `/${props.params.slug}`;
	const { singleWork } = await getSingleWork(props);

	const ogpImg = singleWork.data.image
		? `${protocol}${config.site.host}${singleWork.data.image}`
		: `${protocol}${config.site.host}/ogp.png`;
	const ogpImgW = singleWork.data.image ? 1920 : 1200;
	const ogpImgH = singleWork.data.image ? 1080 : 630;

	return {
		...defaultMetadata,
		title: singleWork.data.title,
		description: singleWork.data.description,
		keywords: config.site.keywords + `,${singleWork.data.keywords}`,
		alternates: {
			canonical: uri,
		},
		openGraph: {
			...defaultMetadata.openGraph,
			title: singleWork.data.title,
			url: uri,
			type: 'article',
			publishedTime: singleWork.data.date,
			modifiedTime: singleWork.data.update,
			images: [
				{
					url: ogpImg,
					width: ogpImgW,
					height: ogpImgH,
				},
			],
		},
		twitter: {
			...defaultMetadata.twitter,
			title: singleWork.data.title,
			images: [
				{
					url: ogpImg,
					width: 1200,
					height: 1200,
				},
			],
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

const SingleWork = async (props) => {
	const categorySlug = props.params.category;
	const pageSlug = props.params.slug;
	const { singleWork } = await getSingleWork(props);
	const id = singleWork.data.id;
	let lastWorks = await getAllWorks();
	lastWorks = lastWorks.works.slice(0, 3);
	let randomWorks = await getAllWorks({ orderby: 'random', exclude: id });
	randomWorks = randomWorks.works.slice(0, 4);
	const { relatedWork } = await getRelatedWork(singleWork.data.relatedSlug);

	return (
		<>
			<div className='o-center :rd-bx o-box :brd-none u-px-clamp u-mb-2xl'>
				<h1 className='c-heading u-fnt-wx'>{singleWork.data.title}</h1>
				<div className='o-sidebar u-space-m u-insert-sidebar u-mb-l'>
					<div className='c-bio-min'>
						<picture className='o-frame :sq :round'>
							<source type='image/avif' srcSet='/images/profile_img.avif' />
							<source type='image/webp' srcSet='/images/profile_img.webp' />
							<img
								src='/images/profile_img.jpg'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
					</div>
					<div className='o-stack :ch-glow'>
						<span className='c-content-m u-fnt-wx'>長谷川 雄治（仮面ライター）</span>
						<div className='o-cluster'>
							<PubDate date={singleWork.data.date} />
							<UpdateDate date={singleWork.data.update} />
						</div>
					</div>
				</div>
				<article>
					{singleWork.data.targetUri ? (
						<a
							href={singleWork.data.targetUri}
							className='o-box :brd-none c-card-lnk u-dsp-fx u-mb-l'
							target='_blank'
							rel='noopener noreferrer'
							title={singleWork.data.targetName}
							aria-label={`${singleWork.data.targetName}へ`}
						>
							<Thumb
								srcPath={singleWork.data.image}
								alt={singleWork.data.targetName ? singleWork.data.targetName : ''}
							/>
							<span className='sr-only'>{`${singleWork.data.targetName}へ`}</span>
						</a>
					) : (
						<div className='o-box :brd-none u-dsp-fx u-mb-l'>
							<Thumb srcPath={singleWork.data.image} />
						</div>
					)}
					<CatLink pageSlug={pageSlug} categorySlug={categorySlug} />
					<Tags categorySlug={categorySlug} pageSlug={pageSlug} tags={singleWork.data.tags} />
					<div className='c-entry u-my-l'>
						<p dangerouslySetInnerHTML={{ __html: nl2br(singleWork.content) }} />
					</div>
					<div className='o-stack u-mb-l'>
						<p className='c-content-m u-txt-r :slnt'>{singleWork.data.credit}</p>
						{singleWork.data.targetUri && (
							<a
								className='c-lnk-txt :has-line :has-color u-py-s u-mw-cnt u-ml-auto'
								href={singleWork.data.targetUri}
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='c-content-m u-fnt-wx'>{singleWork.data.targetName}</span>
								<IconExternal className='o-icon u-ml-s' />
							</a>
						)}
					</div>
				</article>
				{relatedWork && (
					<>
						<h2 className='c-sec-heading u-fnt-wx'>{singleWork.data.relatedHeading || 'Related Work'}</h2>
						<p className='c-content-l u-fnt-wx u-mb-l'>
							{singleWork.data.relatedLead || 'もしよろしければ、こちらも合わせてご覧ください。'}
						</p>
						<Link
							className='o-box :brd-none :bg-ghost o-stack c-media-lnk u-pd-m'
							href={`/work/${labelToSlug(relatedWork.data.category)}/${singleWork.data.relatedSlug}`}
						>
							<div className='o-sidebar u-mb-m'>
								<div className='c-media-pict :ch-glow'>
									<Thumb srcPath={relatedWork.data.image} alt={relatedWork.data.title ? relatedWork.data.title : ''} />
								</div>
								<div className='o-stack c-media-txt'>
									<h3 className='c-display-xs :txt-trim u-fnt-wx u-mb-s'>{relatedWork.data.title}</h3>
									<span className='c-suppl-l :txt-trim :three-line u-fnt-wx'>{relatedWork.data.description}</span>
								</div>
							</div>
							<div className='o-sidebar u-space-m u-insert-sidebar'>
								<div className='c-bio-min'>
									<picture className='o-frame :sq :round'>
										<source type='image/avif' srcSet='/images/profile_img.avif' />
										<source type='image/webp' srcSet='/images/profile_img.webp' />
										<img
											src='/images/profile_img.jpg'
											width='100%'
											height='100%'
											loading='lazy'
											decoding='async'
											fetchPriority='low'
											alt=''
										/>
									</picture>
								</div>
								<div className='o-stack :ch-glow'>
									<span className='c-content-m u-fnt-wx'>長谷川 雄治（仮面ライター）</span>
									<PubDate date={relatedWork.data.date} />
								</div>
							</div>
						</Link>
					</>
				)}
				<h2 className='c-sec-heading u-fnt-wx'>シェア・共有</h2>
				<ShareUrl />
				<div className='o-sidebar'>
					<div className='c-bio-pict :bio-m u-mx-auto'>
						<picture className='o-frame :sq :round'>
							<source type='image/avif' srcSet='/images/profile_img.avif' />
							<source type='image/webp' srcSet='/images/profile_img.webp' />
							<img
								src='/images/profile_img.jpg'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
					</div>
					<div className='o-stack u-mx-auto :ch-glow'>
						<p className='c-display-xs u-fnt-wx u-mx-auto u-dsp-tbl'>長谷川 雄治（仮面ライター）</p>
						<p className='c-content-l :slnt u-fnt-wl u-mx-auto u-mb-s u-dsp-tbl'>Yuji Hasegawa (KamenWriter)</p>
						<div className='c-content-m u-fnt-wx u-mb-m'>
							昭和63年生まれ。大阪電気通信大学 総合情報学部 デジタルゲーム学科卒。
							<br />
							2011年からWeb制作に従事。コーディングやWordPressのカスタマイズ等を主に経験を積む。2013年、仮面ライターとして独立開業。マーケティングや企画、上流も下流も幅広く対応。
							<br />
							コーディングとコンテンツ制作の同時提供を考えるヘンな人。
						</div>
						<div className='o-cluster u-mx-auto'>
							<FacebookLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://www.facebook.com/yuuji.hasegawa/'
							/>
							<TwitterLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://twitter.com/kamenwriter01'
							/>
							<InstagramLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://www.instagram.com/kamenwriter/'
							/>
							<LinkedinLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://www.linkedin.com/in/kamenwriter/'
							/>
							<NoteLink className='c-lnk-txt :has-color c-display-m u-dsp-fx' url='https://note.com/kamenwriter' />
							<GithubLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://github.com/Yuuji-Hasegawa'
							/>
							<WebsiteLink className='c-lnk-txt :has-color c-display-m u-dsp-fx' url='https://kamenwriter.com/' />
						</div>
					</div>
				</div>
			</div>
			<div className='o-center u-px-clamp u-mb-l'>
				<h2 className='c-sec-heading :slnt u-fnt-wx u-txt-ctr'>{`What's New`}</h2>
				<ul className='o-grid o-grid--tri'>
					{lastWorks.map((work, index) => (
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
				<h2 className='c-sec-heading :slnt u-fnt-wx u-txt-ctr'>Chaotic Alb</h2>
				<ul className='o-grid o-grid--quart u-mb-m'>
					{randomWorks.map((work, index) => (
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
				<Link className='c-lnk-txt u-py-s u-pl-m u-dsp-fx u-fx-y-ctr u-ml-auto u-mw-cnt' href='/works'>
					<span className='c-display-xs :slnt u-mr-s u-fnt-wl'>MORE</span>
					<span className='o-box c-sq-btn c-display-s :btn-round :brd-none :bg-ghost'>
						<IconArrowNext className='o-icon' />
					</span>
				</Link>
			</div>
			<BreadCrumbs pageTitle={singleWork.data.title} pageType='article' />
			<JsonLd
				pageTitle={singleWork.data.title}
				pageType='article'
				pageImage={singleWork.data.image}
				catLabel={categorySlug}
				pubDate={singleWork.data.date}
				updateDate={singleWork.data.update}
				description={singleWork.data.description}
			/>
		</>
	);
};

export default SingleWork;

export async function generateStaticParams() {
	const { works } = await getAllWorks();

	return works.map((work) => ({
		slug: work.slug,
    category: labelToSlug(work.category),
  }));
}