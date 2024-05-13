export const slugMap = {
	Web制作: 'web',
	文書作成: 'documents',
	講師: 'teacher',
	SNS運用: 'sns',
	コーディング: 'coding',
	PHP: 'php',
	WordPress: 'wordpress',
	プランニング: 'planning',
	カラーミーショップ: 'colorme',
	レスポンシブ: 'responsive',
	ディレクション: 'direction',
	ライティング: 'writing',
	情報設計: 'ia',
	コンテンツマーケティング: 'content-marketing',
	ブログ: 'blog',
	ダークモード: 'darkmode',
	高速表示: 'speedup',
	'Next.js': 'nextjs',
};

export function labelToSlug(label) {
	if (!label || label.trim() === '') {
		return null;
	}

	const decodedLabel = decodeURIComponent(label);
	const slug =
		slugMap[decodedLabel] ||
		decodedLabel
			.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '');
	return slug;
}

export function slugToLabel(slug) {
	const label = Object.keys(slugMap).find((key) => slugMap[key] === slug);
	if (label) {
		return decodeURIComponent(label);
	}
	return label;
}
