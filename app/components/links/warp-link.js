import IconTransPort from '@/app/components/icons/icon-transport';

export default function WarpLink({ className }) {
	const baseClassName = 'o-box c-sq-btn :bg-ghost :brd-none u-fnt-3xl';
	const setClassName = className ? `${baseClassName} ${className}` : baseClassName;

	return (
		<a
			className={setClassName}
			href='https://kamenwriter.com/'
			target='_blank'
			rel='noopener noreferrer'
			title='仮面ライター'
			aria-label='kamenwriter.comへ'
		>
			<IconTransPort className='o-icon' />
			<span className='sr-only'>kamenwriter.comへ</span>
		</a>
	);
}
