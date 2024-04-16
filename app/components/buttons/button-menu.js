import IconCross from '@/app/components/icons/icon-cross';
import IconLines from '@/app/components/icons/icon-lines';

export default function ButtonMenu({ status, toggle, open, className }) {
	className = className
		? `o-box c-sq-btn :bg-ghost :brd-none u-fnt-3xl ${className}`
		: 'o-box c-sq-btn :bg-ghost :brd-none u-fnt-3xl';

	return (
		<button
			className={className}
			type='button'
			aria-label={status ? 'menu open' : 'menu close'}
			aria-controls='sidebar'
			aria-expanded={open ? 'true' : 'false'}
			onClick={toggle}
		>
			{status ? <IconLines className='o-icon' /> : <IconCross className='o-icon' />}
		</button>
	);
}
