'use client';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import ButtonMenu from '@/app/components/buttons/button-menu';
import { LogoLink, KwLink, BbnLink, NxzLink } from '@/app/components/links/bnr-links';
import { FacebookLink, TwitterLink, InstagramLink } from '@/app/components/links/sns-links';
import { IconBars, IconEnvelope, IconHome, IconInfo, IconUser } from '@/app/components/svgs/icons';

export default function Sidebar({ toggle, open }) {
	const pathname = usePathname();
	const segments = useSelectedLayoutSegments();

	const isActive = (path) => {
		if (path === '/' && pathname === '/') {
			return true;
		}
		return Object.values(segments).includes(path);
	};

	return (
		<div id='sidebar' className=':bg-primary u-transition' aria-hidden={!open} tabIndex={open ? '-1' : 'false'}>
			<div className='u-dsp-fx u-py-s'>
				<ButtonMenu open={open} toggle={toggle} label='close' className='u-mr-m' />
				<LogoLink />
			</div>
			<div className='c-sidebar-bottom'>
				<nav className='o-box :brd-b u-py-m'>
					<ul className='o-stack'>
						<li>
							<Link
								className='u-dsp-fx u-fx-y-ctr :bg-ghost'
								href='/'
								aria-current={isActive('/') ? 'page' : undefined}
							>
								<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
									<IconHome className='o-icon' />
								</span>
								<span className='c-content-l u-fx-shn'>ホーム</span>
							</Link>
						</li>
						<li>
							<Link
								className='u-dsp-fx u-fx-y-ctr :bg-ghost'
								href='/aboutus'
								aria-current={isActive('aboutus') ? 'page' : undefined}
							>
								<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
									<IconInfo className='o-icon' />
								</span>
								<span className='c-content-l u-fx-shn'>このサイトについて</span>
							</Link>
						</li>
						<li>
							<Link
								className='u-dsp-fx u-fx-y-ctr :bg-ghost'
								href='/works'
								aria-current={isActive('works') ? 'page' : undefined}
							>
								<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
									<IconBars className='o-icon' />
								</span>
								<span className='c-content-l u-fx-shn'>リスト</span>
							</Link>
						</li>
						<li>
							<Link className='u-dsp-fx u-fx-y-ctr :bg-ghost' href='/aboutus#profile'>
								<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
									<IconUser className='o-icon' />
								</span>
								<span className='c-content-l u-fx-shn'>プロフィール</span>
							</Link>
						</li>
						<li>
							<Link
								className='u-dsp-fx u-fx-y-ctr :bg-ghost'
								href='/inquiry'
								aria-current={isActive('inquiry') ? 'page' : undefined}
							>
								<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
									<IconEnvelope className='o-icon' />
								</span>
								<span className='c-content-l u-fx-shn'>お問い合わせ</span>
							</Link>
						</li>
					</ul>
				</nav>
				<div className='o-box :brd-b u-py-m'>
					<h2 className='c-display-2xs u-fnt-wx u-px-s u-mb-s'>関連サイト</h2>
					<ul className='o-stack'>
						<li>
							<KwLink className='c-display-m :bg-ghost u-pd-s u-dsp-b u-lnh-n' />
						</li>
						<li>
							<BbnLink className='c-display-m :bg-ghost u-pd-s u-dsp-b u-lnh-n' />
						</li>
						<li>
							<NxzLink className='c-display-m :bg-ghost u-pd-s u-dsp-b u-lnh-n' />
						</li>
					</ul>
				</div>
				<div className='o-cluster u-space-2xs u-insert-cluster u-pt-m u-mb-s'>
					<Link href='/aboutus#information' className='c-lnk-txt c-content-m u-dsp-b u-py-s u-fnt-wl'>
						運営者情報
					</Link>
					<Link href='/terms' className='c-lnk-txt c-content-m u-dsp-b u-py-s u-fnt-wl'>
						サイト規約
					</Link>
					<Link href='/privacy-policy' className='c-lnk-txt c-content-m u-dsp-b u-py-s u-fnt-wl'>
						プライバシーポリシー
					</Link>
				</div>
				<div className='o-cluster u-space-2xs u-insert-cluster u-mb-s'>
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
				<p className='c-suppl-m :slnt u-pb-2xl u-fnt-wx'>©︎ kamenwriter.com</p>
			</div>
		</div>
	);
}
