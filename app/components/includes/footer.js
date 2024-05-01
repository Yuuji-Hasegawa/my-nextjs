import Link from 'next/link';
import { LogoLink } from '@/app/components/links/bnr-links';
import { FacebookLink, TwitterLink, InstagramLink } from '@/app/components/links/sns-links';
import { IconContinue } from '@/app/components/svgs/icons';

export default function Footer() {
	return (
		<footer className='o-center c-footer u-pt-l u-pb-2xl u-px-clamp'>
			<ul className='o-cluster u-fx-ctr u-space-s u-insert-cluster u-mb-s'>
				<li>
					<Link className='c-lnk-txt c-content-m u-dsp-b u-pd-s u-fnt-wl' href='/aboutus#information'>
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
			<div className='o-cluster u-fx-y-ctr'>
				<LogoLink className='u-py-s' />
				<div className='o-cluster u-space-2xs u-insert-cluster'>
					<FacebookLink
						className='c-lnk-txt c-display-s u-dsp-fx u-pd-s'
						url='https://www.facebook.com/kamenwriter01'
					/>
					<TwitterLink className='c-lnk-txt c-display-s u-dsp-fx u-pd-s' url='https://twitter.com/kamenwriter02' />
					<InstagramLink
						className='c-lnk-txt c-display-s u-dsp-fx u-pd-s'
						url='https://www.instagram.com/kamenwriter02/'
					/>
				</div>
				<p className='c-suppl-m :slnt :lnk-p u-fnt-wx u-ml-auto c-copy-right'>
					<span className='u-mr-s'>To Be Continued...</span>
					<IconContinue className='o-icon u-mr-s' />
					<a
						className='c-lnk-txt :has-cover'
						href='https://kamenwriter.com'
						target='_blank'
						rel='noopener noreferrer'
						title='仮面ライター'
						aria-label='kamenwriter.comへ'
					>
						©︎ kamenwriter.com
					</a>
				</p>
			</div>
		</footer>
	);
}
