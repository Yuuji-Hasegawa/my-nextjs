import IconContinue from '@/app/components/icons/icon-continue';
import FooterLink from '@/app/components/links/footer-link';
import FooterSNS from '@/app/components/links/footer-sns';
import LogoLink from '@/app/components/links/logo-link';

export default function Footer() {
	return (
		<footer className='o-center c-footer u-py-2xl u-px-clamp'>
			<FooterLink />
			<div className='o-cluster u-fx-y-ctr'>
				<LogoLink className='u-py-s' />
				<FooterSNS />
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
