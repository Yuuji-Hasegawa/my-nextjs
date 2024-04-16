import Link from 'next/link';

export default function SubNav({ className }) {
	className = className ? `o-cluster u-pt-m ${className}` : 'o-cluster u-pt-m';

	return (
		<div className={className}>
			<Link href='/' className='c-lnk-txt c-content-m u-dsp-b u-py-s u-fnt-wl'>
				運営者情報
			</Link>
			<Link href='/' className='c-lnk-txt c-content-m u-dsp-b u-py-s u-fnt-wl'>
				サイト規約
			</Link>
			<Link href='/' className='c-lnk-txt c-content-m u-dsp-b u-py-s u-fnt-wl'>
				プライバシーポリシー
			</Link>
		</div>
	);
}
