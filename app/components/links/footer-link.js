import Link from 'next/link';

const FooterLink = () => (
	<ul className='o-cluster u-fx-ctr u-space-s u-insert-cluster u-mb-s'>
		<li>
			<Link className='c-lnk-txt c-content-m u-dsp-b u-pd-s u-fnt-wl' href='/aboutus'>
				運営者情報
			</Link>
		</li>
		<li>
			<Link className='c-lnk-txt c-content-m u-dsp-b u-pd-s u-fnt-wl' href='/terms'>
				サイト規約
			</Link>
		</li>
		<li>
			<Link className='c-lnk-txt c-content-m u-dsp-b u-pd-s u-fnt-wl' href='/privacy-policy'>
				プライバシーポリシー
			</Link>
		</li>
		<li>
			<Link className='c-lnk-txt c-content-m u-dsp-b u-pd-s u-fnt-wl' href='/inquiry'>
				お問い合わせ
			</Link>
		</li>
	</ul>
);

export default FooterLink;
