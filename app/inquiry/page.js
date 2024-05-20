import config from '@/config/setting.json';

//import FormClient from '@/app/components/forms/formClient';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import JsonLd from '@/app/components/includes/jsonld';
const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
const pathname = '/inquiry';
const uri = protocol + config.site.host + pathname;

import { metadata as defaultMetadata } from '@/app/layout';

export const metadata = {
	...defaultMetadata,
	title: 'お問い合わせ',
	alternates: {
		canonical: uri,
	},
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'お問い合わせ',
		url: uri,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'お問い合わせ',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Inquiry() {
	return (
		<>
			<div className='o-center :rd-bx u-px-clamp u-pb-xl'>
				<h1 className='c-heading u-fnt-wt'>お問い合わせ</h1>
				<p className='c-content-l u-fnt-wx u-mb-l'>
					私たちに興味を持っていただきありがとうございます。
					<br />
					ご相談・ご質問は、こちらからお気軽にお問い合わせください。
				</p>
				{/*<FormClient />*/}
				<ul className='o-stack u-space-xs u-insert-stack'>
					<li className='c-note c-content-m u-fnt-wx'>
						調査等のため、返信にお時間を頂くことがございます。予めご了承ください。
					</li>
					<li className='c-note c-content-m u-fnt-wx'>
						万が一、一週間経っても返信がない場合は大変お手数ですが、
						<a
							className='c-lnk-txt :has-line :has-color'
							href={`mailto:${config.mail.primary}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							{config.mail.primary}
						</a>
						までご連絡ください。
					</li>
				</ul>
			</div>
			<BreadCrumbs pageTitle={metadata.title} pageType='webpage' />
			<JsonLd pageTitle={metadata.title} pageType='webpage' />
		</>
	);
}
