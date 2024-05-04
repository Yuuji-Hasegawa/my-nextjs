import BreadCrumb from '@/app/components/includes/breadcrumb';
import config from '@/config/setting.json';
import {
	FacebookLink,
	GithubLink,
	TwitterLink,
	InstagramLink,
	LinkedinLink,
	NoteLink,
	WebsiteLink,
} from '@/app/components/links/sns-links';

export const metadata = {
	title: 'このサイトについて',
	description: 'this is contact',
};

export default function AboutUs() {
	return (
		<>
			<section className='o-center u-pb-xl u-px-clamp'>
				<h1 className='c-heading u-fnt-wt'>このサイトについて</h1>
				<ul className='o-switcher'>
					<li className='o-stack'>
						<h2 className='c-display-m u-fnt-wt u-mb-l'>役割と目的</h2>
						<p className='c-content-l u-fnt-wx u-mb-m'>
							これまでWordPressや純然たるフレームワークなしのHTMLを主な対象としてきたものの、脱WordPress、JamstackによるSSGな環境にも手を出してみたいと指を咥えている間に、盤石な地位にあると思われたNext.jsに挑む有力な対抗馬も乱立し始めたので、この辺りで手を出しておこうかな、というのが最大の理由かつ目的。
						</p>
						<p className='c-content-l u-fnt-wx u-mb-m'>
							また、メインサイトである
							<a
								className='c-lnk-txt :has-line :has-color'
								href='https://kamenwriter.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								仮面ライター
							</a>
							の役割を整理する必要性も生じたため、Next.jsとAmplifyとを組み合わせた手習い、実際の工数やパフォーマンスのチェックも兼ね、ポートフォリオ成分を分離したサテライトサイトとして実装するに至りました。
						</p>
						<p className='c-content-l u-fnt-wx'>
							他のフレームワークも隆盛を極める昨今、ReactやNext.jsを素通りして他所へ行くのも良くないと考え、放置したままになっていたドメイン
							<span className='u-fnt-wl :slnt'>shin-kamenwriter.com</span>
							と「シン・仮面ライター」の名前を再利用することとなりました。
						</p>
					</li>
					<li className='o-stack'>
						<h2 className='c-display-m u-fnt-wt u-mb-l'>掲載物について</h2>
						<p className='c-content-l u-fnt-wx u-mb-m'>
							これまでの制作事例を中心に掲載しています。
							<br />
							データが失われてしまったもの、運用が終了してしまったサイトについては、Wayback Machine(
							<a
								className='c-lnk-txt :has-line :has-color'
								href='https://web.archive.org'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://web.archive.org
							</a>
							)の力も借りてサルベージしています。
						</p>
						<p className='c-content-l u-fnt-wx u-mb-m'>
							なお、こちらに掲載がない事例、サルベージしきれなかった事例もチラホラありますので、気になる方がいらっしゃいましたら、別途お問い合わせください。
							<br />
							記憶や資料がある限り、お答えいたします。
						</p>
						<p className='c-content-l u-fnt-wx'>
							自分のための備忘録という側面もあるため、習作も混在しています。
							<br />
							予め、ご了承ください。
						</p>
					</li>
				</ul>
			</section>
			<section id='profile' className='o-center u-px-clamp'>
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
					<div className='o-stack u-mg-auto :ch-glow'>
						<p className='c-display-xs u-fnt-wx u-mx-auto u-dsp-tbl'>長谷川 雄治（仮面ライター）</p>
						<p className='c-display-2xs :slnt u-fnt-wl u-mx-auto u-mb-l u-dsp-tbl'>Yuji Hasegawa (KamenWriter)</p>
						<p className='c-content-l u-fnt-wx u-dsp-tbl'>
							<span className='u-dsp-b :rd-bx'>
								1988年2月3日生まれ。2010年3月、大阪電気通信大学 総合情報学部
								デジタルゲーム学科を卒業後、1年間のアルバイトを経た後、2011年からWeb制作業に従事。
								<br />
								HTML/CSSコーディングやWordPressのカスタマイズ等を主に経験を積み、2013年4月から「仮面ライター」の屋号を掲げて独立開業。
								<br />
								内部SEOやコーディングスキルを踏まえたパフォーマンス改善や、原稿上の表記揺れならびに表現チェックといった下流から、自身の自営業者としての経験も踏まえたマーケティングや企画、サイト設計やページごとの情報設計、情報発信のポイントといった上流工程まで口を挟みたがる。
								<br />
								サイト制作とコンテンツ制作、情報伝達のラストワンマイルまで同時に考えるヘンな人。
							</span>
						</p>
						<h3 className='c-ter-heading u-fnt-wx'>スペック</h3>
						<div className='c-content-l u-fnt-wx'>
							■身長:174cm
							<br />
							■体重:No Data
							<br />
							■HTML:Living Standard 4.11.1
							<br />
							■CSS:Snapshot 2023
							<br />
							■Javascript:Vanilla ES6
							<br />
							■WordPress:6.3~
							<br />
							■ビルドツール:pnpm + Vite
							<br />
							■CSS設計:Every Layout + カスタムプロパティ + ユーティリティファースト
							<br />
							■デザインツール:Figma
							<br />
							■開発環境:MacBook Air (M1, 2020)
							<br />
							■MBTI:ISTJ(2023年10月 診断)
							<br />
							■主な強み:戦略性、内省、学習欲、収集心、個別化
						</div>
						<h3 className='c-ter-heading u-fnt-wx'>SNS</h3>
						<div className='o-cluster u-space-s u-insert-cluster u-mx-auto'>
							<FacebookLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://www.facebook.com/yuuji.hasegawa/'
							/>
							<TwitterLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://twitter.com/kamenwriter01'
							/>
							<InstagramLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://www.instagram.com/kamenwriter/'
							/>
							<LinkedinLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://www.linkedin.com/in/kamenwriter/'
							/>
							<NoteLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://note.com/kamenwriter'
							/>
							<GithubLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://github.com/Yuuji-Hasegawa'
							/>
							<WebsiteLink
								className='c-lnk-txt :has-color c-display-m u-dsp-fx u-pd-s'
								url='https://kamenwriter.com/'
							/>
						</div>
					</div>
				</div>
			</section>
			<section id='information' className='o-center u-pb-2xl u-px-clamp'>
				<h2 className='c-sec-heading u-fnt-wt'>運営者情報</h2>
				<dl className='o-sidebar u-space-none u-insert-sidebar c-content-l'>
					<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>屋号</dt>
					<dd className='o-box :td-bx u-py-s u-px-m'>{config.company.name}</dd>
					<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>代表者</dt>
					<dd className='o-box :td-bx u-py-s u-px-m'>{config.company.owner}</dd>
					<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>所在地</dt>
					<dd className='o-box :td-bx u-py-s u-px-m'>
						〒{config.company.zip}
						<br />
						{config.company.address}
					</dd>
					<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>設立</dt>
					<dd className='o-box :td-bx u-py-s u-px-m'>{config.company.birth}</dd>
					<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>URL</dt>
					<dd className='o-box :td-bx u-py-s u-px-m'>
						<a
							className='c-lnk-txt :has-line :has-color u-dsp-b'
							href={config.company.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='u-fnt-wl :slnt'>{config.company.url}</span>
						</a>
					</dd>
					<dt className='o-box :bg-secondary :th-bx u-py-s u-px-m'>事業内容</dt>
					<dd className='o-box :td-bx u-py-s u-px-m'>
						<ul className='c-dsc-list'>
							{config.company.service.map((item, index) => (
								<li key={index}>{item}</li>
							))}
							<li key='other'>その他、上記に関わる業務</li>
						</ul>
					</dd>
				</dl>
			</section>
			<BreadCrumb />
		</>
	);
}
