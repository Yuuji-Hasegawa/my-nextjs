import { KwLink, BbnLink, NxzLink } from '@/app/components/links/bnr-links';

export default function BnrList({ className }) {
	const baseClassName = 'o-stack';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;

	return (
		<ul className={setClassName}>
			<li>
				<KwLink className='c-text-link u-font-size-3xl u-display-flex u-align-items-center u-line-height-l u-pt-s u-pb-s' />
			</li>
			<li>
				<BbnLink className='c-text-link u-font-size-3xl u-display-flex u-align-items-center u-line-height-l u-pt-s u-pb-s' />
			</li>
			<li>
				<NxzLink className='c-text-link u-font-size-3xl u-display-flex u-align-items-center u-line-height-l u-pt-s u-pb-s' />
			</li>
		</ul>
	);
}
