import FooterLink from '@/app/components/links/footer-link';
import FooterSNS from '@/app/components/links/footer-sns';
import LogoLink from '@/app/components/links/logo-link';
import IconContinue from '@/app/components/icons/icon-continue';

export default function Footer() {
	return (
		<footer className='o-center c-footer u-space-outer u-pt-2xl u-pb-2xl'>
			<FooterLink />
			<div className='o-cluster u-mt-l u-align-items-center'>
				<LogoLink className='c-logo-link--footer u-font-size-3xl u-position-relative' />
				<FooterSNS />
				<p className='u-font-family-en u-block-right u-flex-shrink-none u-font-size-2xs u-font-weight-m u-line-height-l u-letter-spacing-s u-display-inline-flex u-align-items-center u-position-relative u-transition c-copy-right'>
					<span className='u-mr-s u-flex-shrink-none'>To Be Continued...</span>
					<IconContinue className='o-icon u-mr-s u-transition' />
					<span className='u-mr-2xs'>©︎</span>
					<a
						className='c-text-link c-text-link--copyright u-transition'
						href='https://kamenwriter.com'
						target='_blank'
						rel='noopener noreferrer'
						title='仮面ライター'
						aria-label='kamenwriter.comへ'
					>
						kamenwriter.com
					</a>
				</p>
			</div>
		</footer>
	);
}
