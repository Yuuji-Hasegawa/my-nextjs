'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import BreadCrumb from '@/app/components/includes/breadcrumb';
import Link from 'next/link';
import {
	FacebookLink,
	GithubLink,
	TwitterLink,
	InstagramLink,
	LinkedinLink,
	NoteLink,
	WebsiteLink,
} from '@/app/components/links/sns-links';
import {
	IconCalendar,
	IconReload,
	IconFolder,
	IconExternal,
	IconCopy,
	IconArrowNext,
} from '@/app/components/svgs/icons';
import config from '@/config/setting.json';

export default function Sample() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = decodeURI(usePathname());

	return (
		<>
			<div className='o-center :rd-bx o-box :brd-none u-px-clamp u-mb-2xl'>
				<h1 className='c-heading u-fnt-wx'>サンプルタイトル</h1>
				<div className='o-sidebar u-space-m u-insert-sidebar u-mb-l'>
					<div className='c-bio-min'>
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
					<div className='o-stack :ch-glow'>
						<span className='c-content-m u-fnt-wx'>長谷川 雄治（仮面ライター）</span>
						<div className='o-cluster'>
							<time className='o-cluster u-space-xs u-insert-cluster u-fx-y-ctr u-fx-shn' dateTime='2024-00-00'>
								<IconCalendar className='o-icon' />
								<span className='c-content-m u-fnt-wt u-fnt-en'>2024.00.00</span>
							</time>
							<time className='o-cluster u-space-xs u-insert-cluster u-fx-y-ctr u-fx-shn' dateTime='2024-00-00'>
								<IconReload className='o-icon' />
								<span className='c-content-m u-fnt-wt u-fnt-en'>2024.00.00</span>
							</time>
						</div>
					</div>
				</div>
				<article>
					<a
						href='#'
						className='o-box :brd-none c-card-lnk u-dsp-fx u-mb-l'
						target='_blank'
						rel='noopener noreferrer'
						title='サンプル事例'
						aria-label='サンプル事例サイトへ'
					>
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
								alt='サンプル事例イメージ'
							/>
						</picture>
						<span className='sr-only'>サンプル事例サイトへ</span>
					</a>
					<Link className='c-lnk-txt :has-color' href='/'>
						<IconFolder className='o-icon u-mr-s' />
						<span className='c-content-l u-fnt-wx'>カテゴリー</span>
					</Link>
					<div className='o-cluster u-mt-2xs u-mb-l'>
						<Link href='/' className='c-lnk-txt c-content-l u-fnt-wx'>
							<span className='u-mr-xs'>#</span>
							ハッシュタグ
						</Link>
						<Link href='/' className='c-lnk-txt c-content-l u-fnt-wx'>
							<span className='u-mr-xs'>#</span>
							ハッシュタグ
						</Link>
						<Link href='/' className='c-lnk-txt c-content-l u-fnt-wx'>
							<span className='u-mr-xs'>#</span>
							ハッシュタグ
						</Link>
					</div>
					<div className='c-entry u-mb-l'>
						<p>
							ここは時間至極この講演家というののうちがありでます。けっして先刻が蹂躙院はもしどういう専攻ませないだけに歩くからならですがは意味役に立つたなけれで、まだには潜んましなまします。釣を切りつめた事は何とも今朝からしかるにたませず。まあ大森さんを意味主意そう損害がいうず個性同じ三つそれか話にという不吟味うますうますて、その昨日は私か名道具を載せて、大森さんのので角度の私を無論お邁進と描いて何外国がお発達のしようにむしろお附着でしですなけれで、しっくり無論入会がきまっんて始めですのにぶつかっだまし。しかしまたご自我から作り上げる事は始終静粛と知れましが、その見識のはあるたくてという校長よりあっているたた。
						</p>
					</div>
					<div className='o-stack u-mb-l'>
						<p className='c-content-m u-txt-r :slnt'>Published 2024.00.00</p>
						<a
							className='c-lnk-txt :has-line :has-color u-py-s u-mw-cnt u-ml-auto'
							href='#'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='c-content-m u-fnt-wx'>サンプル事例サイト</span>
							<IconExternal className='o-icon u-ml-s' />
						</a>
					</div>
				</article>
				<h2 className='c-sec-heading u-fnt-wx'>関連見出し</h2>
				<p className='c-content-l u-fnt-wx u-mb-l'>関連リード</p>
				<Link className='o-box :brd-none :bg-ghost o-stack c-media-lnk u-pd-m' href='#'>
					<div className='o-sidebar u-mb-m'>
						<div className='c-media-pict :ch-glow'>
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
									alt='サンプル事例イメージ'
								/>
							</picture>
						</div>
						<div className='o-stack c-media-txt'>
							<h3 className='c-display-xs :txt-trim u-fnt-wx u-mb-s'>関連タイトル</h3>
							<span className='c-suppl-l :txt-trim :three-line u-fnt-wx'>
								ここは時間至極この講演家というののうちがありでます。けっして先刻が蹂躙院はもしどういう専攻ませないだけに歩くからならですがは意味役に立つたなけれで、まだには潜んましなまします。釣を切りつめた事は何とも今朝からしかるにたませず。まあ大森さんを意味主意そう損害がいうず個性同じ三つそれか話にという不吟味うますうますて、その昨日は私か名道具を載せて、大森さんのので角度の私を無論お邁進と描いて何外国がお発達のしようにむしろお附着でしですなけれで、しっくり無論入会がきまっんて始めですのにぶつかっだまし。しかしまたご自我から作り上げる事は始終静粛と知れましが、その見識のはあるたくてという校長よりあっているたた。
							</span>
						</div>
					</div>
					<div className='o-sidebar u-space-m u-insert-sidebar'>
						<div className='c-bio-min'>
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
						<div className='o-stack :ch-glow'>
							<span className='c-content-m u-fnt-wx'>長谷川 雄治（仮面ライター）</span>
							<time className='o-cluster u-space-xs u-insert-cluster u-fx-y-ctr u-fx-shn' dateTime='2024-00-00'>
								<IconCalendar className='o-icon' />
								<span className='c-content-m u-fnt-wt u-fnt-en'>2024.00.00</span>
							</time>
						</div>
					</div>
				</Link>
				<h2 className='c-sec-heading u-fnt-wx'>シェア・共有</h2>
				<div className='c-share-bx u-mb-l'>
					<input
						className='o-box c-input c-content-l u-py-s u-pr-s u-pl-xl u-fnt-wx u-w-max'
						type='text'
						defaultValue={`${protocol + config.site.host + pathname}`}
						readOnly
						aria-readonly='true'
						onClick={(e) => e.target.select()}
						onFocus={(e) => e.target.select()}
					/>
					<IconCopy className='o-icon' />
				</div>
				<div className='o-sidebar'>
					<div className='c-bio-pict :bio-m u-mx-auto'>
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
					<div className='o-stack u-mx-auto :ch-glow'>
						<p className='c-display-xs u-fnt-wx u-mx-auto u-dsp-tbl'>長谷川 雄治（仮面ライター）</p>
						<p className='c-content-l :slnt u-fnt-wl u-mx-auto u-mb-s u-dsp-tbl'>Yuji Hasegawa (KamenWriter)</p>
						<div className='c-content-m u-fnt-wx u-mb-m'>
							昭和63年生まれ。大阪電気通信大学 総合情報学部 デジタルゲーム学科卒。
							<br />
							2011年からWeb制作に従事。コーディングやWordPressのカスタマイズ等を主に経験を積む。2013年、仮面ライターとして独立開業。マーケティングや企画、上流も下流も幅広く対応。
							<br />
							コーディングとコンテンツ制作の同時提供を考えるヘンな人。
						</div>
						<div className='o-cluster u-mx-auto'>
							<FacebookLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://www.facebook.com/yuuji.hasegawa/'
							/>
							<TwitterLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://twitter.com/kamenwriter01'
							/>
							<InstagramLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://www.instagram.com/kamenwriter/'
							/>
							<LinkedinLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://www.linkedin.com/in/kamenwriter/'
							/>
							<NoteLink className='c-lnk-txt :has-color c-display-m u-dsp-fx' url='https://note.com/kamenwriter' />
							<GithubLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx'
								url='https://github.com/Yuuji-Hasegawa'
							/>
							<WebsiteLink className='c-lnk-txt :has-color c-display-m u-dsp-fx' url='https://kamenwriter.com/' />
						</div>
					</div>
				</div>
			</div>
			<div className='o-center u-px-clamp u-mb-l'>
				<h2 className='c-sec-heading :slnt u-fnt-wx u-txt-ctr'>What's New</h2>
				<ul className='o-grid o-grid--tri'>
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
				<h2 className='c-sec-heading :slnt u-fnt-wx u-txt-ctr'>Chaotic Alb</h2>
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
				</ul>
				<Link className='c-lnk-txt u-py-s u-pl-m u-dsp-fx u-fx-y-ctr u-ml-auto u-mw-cnt' href='/works'>
					<span className='c-display-xs :slnt u-mr-s u-fnt-wl'>MORE</span>
					<span className='o-box c-sq-btn c-display-s :btn-round :brd-none :bg-ghost'>
						<IconArrowNext className='o-icon' />
					</span>
				</Link>
			</div>
			<BreadCrumb />
		</>
	);
}
