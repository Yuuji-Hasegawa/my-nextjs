export default function ButtonMenu({ status = 'close', toggle, open, className }) {
	const baseClassName =
		'o-box c-btn c-menu-btn u-display-flex u-align-items-center u-justify-content-center u-border-radius-s u-transition';
	const fullClassName = className ? `${baseClassName} ${className}` : baseClassName;
	status === 'close' || status === 'open' ? status : 'close';
	const ariaLabel = `menu ${status}`;

	return (
		<button
			className={fullClassName}
			type='button'
			aria-label={ariaLabel}
			aria-controls='sidebar'
			aria-expanded={open ? 'true' : 'false'}
			onClick={toggle}
		>
			<span className='c-menu-bars u-position-relative'></span>
		</button>
	);
}
