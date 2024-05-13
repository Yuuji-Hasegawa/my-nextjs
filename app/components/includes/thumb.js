export default function Thumb({ srcPath, alt = '' }) {
	const imgPath =
		!srcPath || srcPath.trim() === '' ? '/images/thumb.png'.replace(/\.\w+$/, '') : srcPath.replace(/\.\w+$/, '');

	return (
		<picture className='o-frame'>
			<source type='image/avif' srcSet={`${imgPath}.avif`} />
			<source type='image/webp' srcSet={`${imgPath}.webp`} />
			<img
				src={`${imgPath}.png`}
				width='100%'
				height='100%'
				loading='lazy'
				decoding='async'
				fetchPriority='low'
				alt={alt}
			/>
		</picture>
	);
}
