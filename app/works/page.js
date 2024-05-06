import Link from 'next/link';
import { IconArrowPrev, IconArrowNext } from '@/app/components/svgs/icons';

export const metadata = {
	title: 'リスト',
	description: 'this is contact',
};

export default function Works() {
	return (
		<div className='o-center u-pb-xl u-px-clamp'>
			<h1 className='c-heading u-fnt-wt'>リスト</h1>
			<ul className='o-grid o-grid--quart'>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
				<li>
					<Link className='o-box o-stack :brd-none c-card-lnk' href='/'>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/thumb.avif' />
							<source type='image/webp' srcSet='/images/thumb.webp' />
							<img
								src='/images/thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
						<span className='o-stack :bg-ghost u-py-s u-px-m'>
							<span className='c-content-l :txt-trim :two-line u-fnt-wl'>サンプル事例</span>
							<span className='c-label-l :txt-sec u-fnt-wx'>カテゴリー</span>
						</span>
					</Link>
				</li>
			</ul>
			<nav className='u-mt-xl' aria-label='Pagination'>
				<ol className='o-cluster u-space-s u-insert-cluster u-fx-ctr'>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-display-xs'
							title='前のページ'
							aria-label='前のページへ'
						>
							<IconArrowPrev className='o-icon' />
							<span className='sr-only'>前のページへ</span>
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title='1ページ'
							aria-label='1ページ目へ'
						>
							1
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title='2ページ'
							aria-label='2ページ目へ'
						>
							2
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							aria-label='現在のページ'
							aria-current='true'
							title='3ページ'
						>
							3
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title='4ページ'
							aria-label='4ページ目へ'
						>
							4
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-content-l u-fnt-wl'
							title='5ページ'
							aria-label='5ページ目へ'
						>
							5
						</Link>
					</li>
					<li>
						<Link
							href='#'
							className='o-box :brd-none :bg-secondary c-sq-btn c-display-xs'
							title='次のページ'
							aria-label='次のページへ'
						>
							<IconArrowNext className='o-icon' />
							<span className='sr-only'>次のページへ</span>
						</Link>
					</li>
				</ol>
			</nav>
		</div>
	);
}
