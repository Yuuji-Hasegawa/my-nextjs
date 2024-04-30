'use client';

import Link from 'next/link';
import Footer from '@/app/components/includes/footer';
import Header from '@/app/components/includes/header';
import Hero from '@/app/components/includes/hero';
import { KwLink, BbnLink, NxzLink } from '@/app/components/links/bnr-links';
import {
	FacebookLink,
	TwitterLink,
	InstagramLink,
	LinkedinLink,
	NoteLink,
	WebsiteLink,
} from '@/app/components/links/sns-links';
import { IconArrowNext } from '@/app/components/svgs/icons';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<div className='o-switcher u-pt-2xl u-pb-l'>
					<div>
						<picture className='o-frame'>
							<source type='image/avif' srcSet='/images/kw-thumb.avif' />
							<source type='image/webp' srcSet='/images/kw-thumb.webp' />
							<img
								src='/images/kw-thumb.png'
								width='100%'
								height='100%'
								loading='lazy'
								decoding='async'
								fetchPriority='low'
								alt=''
							/>
						</picture>
					</div>
					<div className='o-cover'>
						<div className='o-stack u-my-auto u-px-m'>
							<h2 className='c-display-l :slnt u-fnt-wx u-mb-m'>ABOUT</h2>
							<p className='c-display-s u-fnt-wx u-mb-s'>仮面ライターのサテライトサイトです</p>
							<p className='c-content-l :rd-bx u-fnt-wl'>
								このWebサイトは、
								<a
									className='c-lnk-txt :has-line :has-color'
									href='https://kamenwriter.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									仮面ライター
								</a>
								からポートフォリオ要素を分離集約し、Next.js、AWS環境の手習も目的としたWebサイトです。
							</p>
							<Link className='c-lnk-txt u-py-s u-pl-m u-dsp-fx u-fx-y-ctr u-ml-auto' href='/'>
								<span className='c-display-xs :slnt u-mr-s u-fnt-wl'>ABOUT</span>
								<span className='o-box c-sq-btn c-display-s :btn-round :brd-none :bg-ghost'>
									<IconArrowNext className='o-icon' />
								</span>
							</Link>
							<h3 className='c-display-s :slnt u-fnt-wl u-mb-s'>OWNER</h3>
							<div className='o-sidebar u-space-m u-insert-sidebar u-mb-s'>
								<div className='c-bio-pict u-mx-auto'>
									<picture className='o-frame :sq :round'>
										<source type='image/avif' srcSet='/images/profile_img.avif' />
										<source type='image/webp' srcSet='/images/profile_img.webp' />
										<img
											src='/images/profile_img.jpg'
											width='100%'
											height='100%'
											loading='lazy'
											decoding='async'
											fetchPriority='low'
											alt=''
										/>
									</picture>
								</div>
								<div className='o-stack u-mg-auto :ch-glow'>
									<p className='c-content-l u-fnt-wx u-mx-auto'>長谷川 雄治（仮面ライター）</p>
									<p className='c-content-m :slnt u-fnt-wl u-mx-auto'>Yuji Hasegawa (KamenWriter)</p>
									<div className='o-cluster u-space-s u-insert-cluster u-mx-auto'>
										<FacebookLink
											className='c-lnk-txt :has-color c-display-s u-dsp-fx u-pd-xs'
											url='https://www.facebook.com/yuuji.hasegawa/'
										/>
										<TwitterLink
											className='c-lnk-txt :has-color c-display-s u-dsp-fx u-pd-xs'
											url='https://twitter.com/kamenwriter01'
										/>
										<InstagramLink
											className='c-lnk-txt :has-color c-display-s u-dsp-fx u-pd-xs'
											url='https://www.instagram.com/kamenwriter/'
										/>
										<LinkedinLink
											className='c-lnk-txt :has-color c-display-s u-dsp-fx u-pd-xs'
											url='https://www.linkedin.com/in/kamenwriter/'
										/>
										<NoteLink
											className='c-lnk-txt :has-color c-display-s u-dsp-fx u-pd-xs'
											url='https://note.com/kamenwriter'
										/>
										<WebsiteLink
											className='c-lnk-txt :has-color c-display-s u-dsp-fx u-pd-xs'
											url='https://kamenwriter.com/'
										/>
									</div>
								</div>
							</div>
							<div className='o-stack u-space-xs u-insert-stack'>
								<Link className='c-lnk-txt u-py-s u-pl-m u-dsp-fx u-fx-y-ctr u-ml-auto' href='/'>
									<span className='c-display-xs :slnt u-mr-s u-fnt-wl'>PROFILE</span>
									<span className='o-box c-sq-btn c-display-s :btn-round :brd-none :bg-ghost'>
										<IconArrowNext className='o-icon' />
									</span>
								</Link>
								<Link className='c-lnk-txt u-py-s u-pl-m u-dsp-fx u-fx-y-ctr u-ml-auto' href='/'>
									<span className='c-display-xs :slnt u-mr-s u-fnt-wl'>INFORMATION</span>
									<span className='o-box c-sq-btn c-display-s :btn-round :brd-none :bg-ghost'>
										<IconArrowNext className='o-icon' />
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='o-center u-pt-l u-pb-xl u-px-clamp'>
					<h2 className='c-display-l :slnt u-fnt-wx u-mb-l u-txt-ctr'>WORKS</h2>
					<ul className='o-grid o-grid--quart u-mb-m'>
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
					<Link className='c-lnk-txt u-py-s u-pl-m u-dsp-fx u-fx-y-ctr u-ml-auto u-mw-cnt' href='/'>
						<span className='c-display-xs :slnt u-mr-s u-fnt-wl'>MORE</span>
						<span className='o-box c-sq-btn c-display-s :btn-round :brd-none :bg-ghost'>
							<IconArrowNext className='o-icon' />
						</span>
					</Link>
				</div>
			</main>
			<div className='o-box o-center :brd-h u-py-l u-px-clamp'>
				<ul className='o-switcher'>
					<li>
						<KwLink className='c-display-xl :bg-ghost u-dsp-fx u-fx-ctr u-py-l' />
					</li>
					<li>
						<BbnLink className='c-display-xl :bg-ghost u-dsp-fx u-fx-ctr u-py-l' />
					</li>
					<li>
						<NxzLink className='c-display-xl :bg-ghost u-dsp-fx u-fx-ctr u-py-l' />
					</li>
				</ul>
			</div>
			<Footer />
		</>
	);
}
