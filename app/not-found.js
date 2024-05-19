import Link from 'next/link';
import BreadCrumbs from '@/app/components/includes/breadcrumbs';
import JsonLd from '@/app/components/includes/jsonld';
import { IconHome } from '@/app/components/svgs/icons';
import { metadata as defaultMetadata } from '@/app/layout';
import ReturnPath from '@/app/components/includes/returnpath';

export const metadata = {
	...defaultMetadata,
	title: 'お探しのページは見つかりませんでした',
	description: '',
	openGraph: {
		...defaultMetadata.openGraph,
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
				<ReturnPath />
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
