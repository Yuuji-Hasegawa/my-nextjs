import { KwLink, BbnLink, NxzLink } from '@/app/components/links/bnr-links';

export default function BnrList({ className }) {
	return (
		<div className={className}>
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
	);
}
