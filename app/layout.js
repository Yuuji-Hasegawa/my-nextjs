import '@/styles/styles.scss';
import Header from '@/app/components/includes/header';
import Footer from '@/app/components/includes/footer';
import { KwLink, BbnLink, NxzLink } from '@/app/components/links/bnr-links';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='ja'>
			<body>
				<Header />
				<main>{children}</main>
				{/* common-cta */}
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
			</body>
		</html>
	);
}
