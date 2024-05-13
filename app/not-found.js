import Link from 'next/link';
import { IconHome } from '@/app/components/svgs/icons';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import { headers } from 'next/headers';
import config from '@/config/setting.json';
import { metadata as defaultMetadata } from '@/app/layout';
import JsonLd from '@/app/components/includes/jsonld';

const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
const pathname = headers().get('x-pathname') || '';
const uri = protocol + config.site.host + pathname;

export const metadata = {
	...defaultMetadata,
	alternates: {
		canonical: uri,
	},
	title: 'お探しのページは見つかりませんでした',
	description: '',
	openGraph: {
		...defaultMetadata.openGraph,
		url: uri,
		description: '',
		title: 'お探しのページは見つかりませんでした',
	},
	twitter: {
		...defaultMetadata.twitter,
		description: '',
		title: 'お探しのページは見つかりませんでした',
	},
};

export default function NotFound() {
	return (
		<>
			<div className='o-center :rd-bx u-px-clamp u-pb-xl'>
				<h1 className='c-heading u-fnt-wt'>お探しのページは見つかりませんでした</h1>
				<p className='c-content-l u-fnt-wx u-mb-l'>
					大変申し訳ございませんが、お探しのページ(URL:{uri})は見つかりませんでした。
					<br />
					アドレスバーに直接URLを入力された場合は、アドレスが正しく入力されているか、もう一度ご確認下さい。
				</p>
				<p className='c-content-l u-fnt-wx u-mb-l'>
					正しいアドレスを入力しても表示されない場合は、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。
					<br />
					その場合お手数ですがトップページからお求めのページを再度お探しください。
				</p>
				<Link className='o-box c-rect-btn :bg-ghost :brd-none c-content-l u-px-m u-py-s' href='/'>
					<IconHome className='o-icon u-mr-s' />
					<span className='u-fnt-wx u-fx-shn'>トップページへ戻る</span>
				</Link>
			</div>
			<BreadCrumbs pageType='notfound' />
			<JsonLd pageType='notfound' />
		</>
	);
}
