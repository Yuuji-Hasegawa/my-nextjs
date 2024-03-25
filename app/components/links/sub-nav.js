import Link from 'next/link';

export default function SubNav({ className }) {
	const baseClassName = 'o-stack';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;

	return (
		<ul className={setClassName}>
			<li>
				<Link
					href='/'
					className='c-text-link c-nav-link u-display-block u-pt-s u-pb-s u-pr-s u-pl-s u-font-size-s u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				>
					運営者情報
				</Link>
			</li>
			<li>
				<Link
					href='/'
					className='c-text-link c-nav-link u-display-block u-pt-s u-pb-s u-pr-s u-pl-s u-font-size-s u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				>
					サイト規約
				</Link>
			</li>
			<li>
				<Link
					href='/'
					className='c-text-link c-nav-link u-display-block u-pt-s u-pb-s u-pr-s u-pl-s u-font-size-s u-font-weight-m u-letter-spacing-m u-line-height-l u-transition'
				>
					プライバシーポリシー
				</Link>
			</li>
		</ul>
	);
}
