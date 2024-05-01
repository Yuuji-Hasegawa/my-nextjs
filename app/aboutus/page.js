import BreadCrumb from '@/app/components/includes/breadcrumb';
import config from '@/config/setting.json';

export const metadata = {
	title: "このサイトについて",
	description: "this is contact",
}

export default function AboutUs() {
	return (
		<>
			<section className='o-center u-pb-2xl u-px-clamp'>
				<h1 className='c-heading u-fnt-wt'>このサイトについて</h1>
			</section>
			<section id="profile" className='o-center u-pb-2xl u-px-clamp'>
				<h2 className='c-sec-heading u-fnt-wt'>プロフィール</h2>
				<div className='o-sidebar'>
					<div className='c-bio-pict :bio-l u-mx-auto'>
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
					<div className="o-stack u-mg-auto :ch-glow">
						<p className="c-display-xs u-fnt-wx u-mx-auto">長谷川 雄治（仮面ライター）</p>
						<p className="c-display-2xs :slnt u-fnt-wl u-mx-auto u-mb-l">Yuji Hasegawa (KamenWriter)</p>
						<p className="c-content-l u-fnt-wx">
							<span className='u-dsp-b :rd-bx'>
								1988年2月3日生まれ。2010年3月、大阪電気通信大学 総合情報学部 デジタルゲーム学科を卒業後、1年間のアルバイトを経た後、2011年からWeb制作業に従事。<br />
								HTML/CSSコーディングやWordPressのカスタマイズ等を主に経験を積み、2013年4月から「仮面ライター」の屋号を掲げて独立開業。<br />
								内部SEOやコーディングスキルを踏まえたパフォーマンス改善や、原稿上の表記揺れならびに表現チェックといった下流から、自身の自営業者としての経験も踏まえたマーケティングや企画、サイト設計やページごとの情報設計、情報発信のポイントといった上流工程まで口を挟みたがる。<br />
								サイト制作とコンテンツ制作、情報伝達のラストワンマイルまで同時に考えるヘンな人。
							</span>
						</p>
					</div>
				</div>
			</section>
			<section id="information" className='o-center u-pb-xl u-px-clamp'>
				<h2 className='c-sec-heading u-fnt-wt'>運営者情報</h2>
				<dl className="o-sidebar u-space-none u-insert-sidebar c-content-l">
					<dt className="o-box :bg-secondary :th-bx u-py-s u-px-m">屋号</dt>
					<dd className="o-box :td-bx u-py-s u-px-m">
						{config.company.name}
					</dd>
					<dt className="o-box :bg-secondary :th-bx u-py-s u-px-m">代表者</dt>
					<dd className="o-box :td-bx u-py-s u-px-m">
						{config.company.owner}
					</dd>
					<dt className="o-box :bg-secondary :th-bx u-py-s u-px-m">所在地</dt>
					<dd className="o-box :td-bx u-py-s u-px-m">
						〒{config.company.zip}<br />{config.company.address}
					</dd>
					<dt className="o-box :bg-secondary :th-bx u-py-s u-px-m">設立</dt>
					<dd className="o-box :td-bx u-py-s u-px-m">
						{config.company.birth}
					</dd>
					<dt className="o-box :bg-secondary :th-bx u-py-s u-px-m">URL</dt>
					<dd className="o-box :td-bx u-py-s u-px-m">
						<a className="c-lnk-txt :has-line :has-color u-dsp-b"
							href={config.company.url}
							target="_blank" rel="noopener noreferrer"><span
							className="u-fnt-wl :slnt">{config.company.url}</span></a>
					</dd>
					<dt className="o-box :bg-secondary :th-bx u-py-s u-px-m">事業内容</dt>
					<dd className="o-box :td-bx u-py-s u-px-m">
						<ul className='c-dsc-list'>
							{config.company.service.map((item, index) =>
								<li key={index}>{item}</li>
							)}
							<li key="other">その他、上記に関わる業務</li>
						</ul>
					</dd>
				</dl>
			</section>
			<BreadCrumb />
		</>
	)
}