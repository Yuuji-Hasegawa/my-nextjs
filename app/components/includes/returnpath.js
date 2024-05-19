'use client';
import { usePathname } from 'next/navigation';
import config from '@/config/setting.json';

export default function ReturnPath() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const uri = protocol + config.site.host + decodeURI(usePathname());
	return (
		<p className='c-content-l u-fnt-wx u-mb-l'>
			大変申し訳ございませんが、お探しのページ({uri})は見つかりませんでした。
			<br />
			アドレスバーに直接URLを入力された場合は、アドレスが正しく入力されているか、もう一度ご確認下さい。
		</p>
	);
}
