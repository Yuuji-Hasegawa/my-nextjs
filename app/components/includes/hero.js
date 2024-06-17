import { LogoLetter, LogoMark } from '@/app/components/svgs/brands';

const Hero = () => (
	<div className='c-hero-wrapper u-dsp-fx'>
		<div className='o-cover c-hero-title'>
			<h1 className='o-stack c-hero u-my-auto u-px-m u-fx-y-ctr'>
				<span className='u-fnt-wx'>ポートフォリオ分離企画</span>
				<span className='u-dsp-fx'>
					<LogoLetter />
					<span className='sr-only'>シン・仮面ライター</span>
				</span>
				<span className='u-fnt-wx'>当サイトにて随時更新中</span>
			</h1>
		</div>
		<div className='c-hero-mask'>
			<LogoMark className='c-hero-mask__inner' />
		</div>
	</div>
);

export default Hero;
