import Link from 'next/link';
import IconHome from '../icons/icon-home';
import IconInfo from '../icons/icon-info';
import IconBars from '../icons/icon-bars';
import IconUser from '../icons/icon-user';
import IconEnvelope from '../icons/icon-envelope';

const MainNav = ({ className }) => (
	<nav className={className}>
		<ul className='o-stack'>
			<li>
				<Link className='c-nav-link u-display-flex u-align-items-center u-transition' href='/'>
					<span className='o-box c-btn c-nav-icon u-display-inline-flex u-align-items-center u-justify-content-center u-font-size-2xl u-mr-m'>
						<IconHome className='o-icon' />
					</span>
					<span className='u-font-size-m u-letter-spacing-m u-flex-shrink-none'>ホーム</span>
				</Link>
			</li>
			<li>
				<Link className='c-nav-link u-display-flex u-align-items-center u-transition' href='/'>
					<span className='o-box c-btn  c-nav-icon u-display-inline-flex u-align-items-center u-justify-content-center u-font-size-2xl u-mr-m'>
						<IconInfo className='o-icon' />
					</span>
					<span className='u-font-size-m u-letter-spacing-m u-flex-shrink-none'>このサイトについて</span>
				</Link>
			</li>
			<li>
				<Link className='c-nav-link u-display-flex u-align-items-center u-transition' href='/'>
					<span className='o-box c-btn  c-nav-icon u-display-inline-flex u-align-items-center u-justify-content-center u-font-size-2xl u-mr-m'>
						<IconBars className='o-icon' />
					</span>
					<span className='u-font-size-m u-letter-spacing-m u-flex-shrink-none'>リスト</span>
				</Link>
			</li>
			<li>
				<Link className='c-nav-link u-display-flex u-align-items-center u-transition' href='/'>
					<span className='o-box c-btn  c-nav-icon u-display-inline-flex u-align-items-center u-justify-content-center u-font-size-2xl u-mr-m'>
						<IconUser className='o-icon' />
					</span>
					<span className='u-font-size-m u-letter-spacing-m u-flex-shrink-none'>プロフィール</span>
				</Link>
			</li>
			<li>
				<Link className='c-nav-link u-display-flex u-align-items-center u-transition' href='/'>
					<span className='o-box c-btn  c-nav-icon u-display-inline-flex u-align-items-center u-justify-content-center u-font-size-2xl u-mr-m'>
						<IconEnvelope className='o-icon' />
					</span>
					<span className='u-font-size-m u-letter-spacing-m u-flex-shrink-none'>お問い合わせ</span>
				</Link>
			</li>
		</ul>
	</nav>
);

export default MainNav;
