import Link from 'next/link';
import IconBars from '@/app/components/icons/icon-bars';
import IconEnvelope from '@/app/components/icons/icon-envelope';
import IconHome from '@/app/components/icons/icon-home';
import IconInfo from '@/app/components/icons/icon-info';
import IconUser from '@/app/components/icons/icon-user';

const MainNav = ({ className }) => (
	<nav className={className}>
		<ul className='o-stack'>
			<li>
				<Link className='u-dsp-fx u-fx-y-ctr :bg-ghost' href='/'>
					<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
						<IconHome className='o-icon' />
					</span>
					<span className='c-content-l u-fx-shn'>ホーム</span>
				</Link>
			</li>
			<li>
				<Link className='u-dsp-fx u-fx-y-ctr :bg-ghost' href='/'>
					<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
						<IconInfo className='o-icon' />
					</span>
					<span className='c-content-l u-fx-shn'>このサイトについて</span>
				</Link>
			</li>
			<li>
				<Link className='u-dsp-fx u-fx-y-ctr :bg-ghost' href='/'>
					<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
						<IconBars className='o-icon' />
					</span>
					<span className='c-content-l u-fx-shn'>リスト</span>
				</Link>
			</li>
			<li>
				<Link className='u-dsp-fx u-fx-y-ctr :bg-ghost' href='/'>
					<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
						<IconUser className='o-icon' />
					</span>
					<span className='c-content-l u-fx-shn'>プロフィール</span>
				</Link>
			</li>
			<li>
				<Link className='u-dsp-fx u-fx-y-ctr :bg-ghost' href='/'>
					<span className='o-box c-sq-btn :brd-none u-fnt-2xl u-mr-m'>
						<IconEnvelope className='o-icon' />
					</span>
					<span className='c-content-l u-fx-shn'>お問い合わせ</span>
				</Link>
			</li>
		</ul>
	</nav>
);

export default MainNav;
