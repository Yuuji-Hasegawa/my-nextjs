'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import config from '@/config/setting.json';
import { IconHome } from '@/app/components/svgs/icons';

export default function NotFound() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	let uri = protocol + config.site.host + decodeURI(usePathname());

	return (
		<div className='o-center :rd-bx u-px-clamp u-pb-xl'>
			<h1 className='c-heading u-fnt-wt'>お探しのページは見つかりませんでした</h1>
			<p className='c-content-l u-fnt-wx u-mb-l'>
				大変申し訳ございませんが、お探しのページ(URL:{uri})は見つかりませんでした。
				<br />
				アドレスバーに直接URLを入力された場合は、アドレスが正しく入力されているか、もう一度ご確認下さい。{' '}
			</p>
			<p className='c-content-l u-fnt-wx u-mb-l'>
				正しいアドレスを入力しても表示されない場合は、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。
				<br />
				その場合お手数ですがトップページからお求めのページを再度お探しください。{' '}
			</p>
			<Link className='o-box c-rect-btn :bg-ghost :brd-none c-content-l u-px-m u-py-s' href='/'>
				<IconHome className='o-icon u-mr-s' />
				<span className='u-fnt-wx u-fx-shn'>トップページへ戻る</span>
			</Link>
		</div>
	);
}
