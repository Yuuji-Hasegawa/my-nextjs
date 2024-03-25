import Link from 'next/link';

const FooterLink = () => (
	<ul className='o-cluster u-justify-content-center'>
		<li>
			<Link
				className='c-text-link u-display-block u-font-size-m u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				href='/aboutus'
			>
				運営者情報
			</Link>
		</li>
		<li>
			<Link
				className='c-text-link u-display-block u-font-size-m u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				href='/terms'
			>
				サイト規約
			</Link>
		</li>
		<li>
			<Link
				className='c-text-link u-display-block u-font-size-m u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				href='/privacy-policy'
			>
				プライバシーポリシー
			</Link>
		</li>
		<li>
			<Link
				className='c-text-link u-display-block u-font-size-m u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				href='/inquiry'
			>
				お問い合わせ
			</Link>
		</li>
	</ul>
);

export default FooterLink;
