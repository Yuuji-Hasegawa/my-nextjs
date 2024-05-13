'use client';
import { usePathname } from 'next/navigation';
import { IconCopy } from '@/app/components/svgs/icons';
import config from '@/config/setting.json';

export default function ShareUrl() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const pathname = decodeURI(usePathname());

	return (
		<div className='c-share-bx u-mb-l'>
			<input
				className='o-box c-input c-content-l u-py-s u-pr-s u-pl-xl u-fnt-wx u-w-max'
				type='text'
				defaultValue={`${protocol + config.site.host + pathname}`}
				readOnly
				aria-readonly='true'
				onClick={(e) => e.target.select()}
				onFocus={(e) => e.target.select()}
			/>
			<IconCopy className='o-icon' />
		</div>
	);
}
