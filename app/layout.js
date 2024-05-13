import '@/styles/styles.scss';
import { Suspense } from 'react';
import Gtm from '@/app/components/includes/gtm';
import Header from '@/app/components/includes/header';
import Footer from '@/app/components/includes/footer';
import { KwLink, BbnLink, NxzLink } from '@/app/components/links/bnr-links';
import config from '@/config/setting.json';
import InsertSw from '@/app/components/includes/insertsw';

const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';

export const metadata = {
	metadataBase: new URL(protocol + config.site.host),
	title: {
		template: `%s | ${config.site.title}`,
		default: config.site.title,
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	keywords: config.site.keywords,
	description: config.site.description,
	alternates: {
		canonical: '/',
	},
	authors: [{ name: config.company.owner, url: config.company.url }],
	creator: config.company.owner,
	publisher: config.company.name,
	openGraph: {
		locale: 'ja_JP',
		description: config.site.description,
		type: 'website',
		title: config.site.title,
		url: '/',
		siteName: config.site.title,
		authors: [config.facebook.author],
		publishedTime: '2024-05-01',
		modifiedTime: '2024-05-01',
		images: [
			{
				url: `${protocol}${config.site.host}/ogp.png`,
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: 'summary',
		site: config.twitter.site,
		siteId: config.twitter.siteId,
		description: config.site.description,
		title: config.site.title,
		creator: config.twitter.creator,
		creatorId: config.twitter.creatorId,
		images: [
			{
				url: `${protocol}${config.site.host}/ogp-1x1.png`,
				width: 1200,
				height: 1200,
			},
		],
	},
	icons: {
		icon: [
			{
				url: '/images/favicon.svg',
				sizes: 'any',
			},
			{
				url: '/favicon.ico',
			},
		],
		apple: [{ url: '/pwa/icons/icon-180x180.png', sizes: '180x180', type: 'image/png' }],
		other: [
			{
				rel: 'apple-touch-icon-precomposed',
				url: '/pwa/icons/icon-180x180.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
	},
	manifest: `${protocol}${config.site.host}/manifest.json`,
	appleWebApp: {
		title: config.site.title,
		statusBarStyle: 'default',
		startupImage: [],
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: '1.0',
	viewportFit: 'cover',
	themeColor: config.site.themecolor,
};

export default function RootLayout({ children }) {
	return (
		<html lang='ja'>
			<body>
				<Suspense>
					<Gtm />
				</Suspense>
				<link
					rel='preload'
					href='/fonts/RobotoFlex-VariableFont.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link rel='preload' href='/fonts/YakuHanJP-Thin.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
				<link
					rel='preload'
					href='/fonts/YakuHanJP-DemiLight.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link rel='preload' href='/fonts/YakuHanJP-Light.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
				<link rel='preload' href='/fonts/YakuHanJP-Regular.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
				<link rel='preload' href='/fonts/YakuHanJP-Medium.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
				<link rel='preload' href='/fonts/YakuHanJP-Bold.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
				<Header />
				<main>{children}</main>
				{/* common-cta */}
				<div className='o-box o-center :brd-h u-py-l u-px-clamp'>
					<ul className='o-switcher'>
						<li>
							<KwLink className='c-display-xl :bg-ghost u-dsp-fx u-fx-ctr u-py-l' />
						</li>
						<li>
							<BbnLink className='c-display-xl :bg-ghost u-dsp-fx u-fx-ctr u-py-l' />
						</li>
						<li>
							<NxzLink className='c-display-xl :bg-ghost u-dsp-fx u-fx-ctr u-py-l' />
						</li>
					</ul>
				</div>
				<Footer />
				<InsertSw />
			</body>
		</html>
	);
}
