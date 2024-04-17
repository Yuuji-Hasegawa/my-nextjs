import LogoLetter from '@/app/components/hero/logo-letter';
import LogoMark from '@/app/components/hero/logo-mark';

const Hero = () => (
	<div className='o-sidebar :hero-gutter'>
		<div className='o-cover :ch-glow :hr-ord-rev'>
			<h1 className='o-stack c-hero u-my-auto u-px-m u-fx-y-ctr'>
				<span className='u-fnt-wx'>ポートフォリオ分離企画</span>
				<span className='u-dsp-fx'>
					<LogoLetter />
					<span className='sr-only'>シン・仮面ライター</span>
				</span>
				<span className='u-fnt-wx'>当サイトにて随時更新中</span>
			</h1>
		</div>
		<div className='u-mx-auto'>
			<LogoMark className='c-hero-mark' />
		</div>
	</div>
)

export default Hero