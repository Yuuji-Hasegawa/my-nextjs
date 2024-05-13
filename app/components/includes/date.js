import { IconCalendar, IconReload } from '@/app/components/svgs/icons';

export const PubDate = ({ date }) => {
	if (!date || isNaN(new Date(date).getTime())) {
		return null;
	}
	const pubDate = new Date(date);
	const dateTime = `${pubDate.getFullYear()}-${String(pubDate.getMonth() + 1).padStart(2, '0')}-${String(pubDate.getDate()).padStart(2, '0')}`;
	const spanDate = `${pubDate.getFullYear()}.${String(pubDate.getMonth() + 1).padStart(2, '0')}.${String(pubDate.getDate()).padStart(2, '0')}`;

	return (
		<time className='o-cluster u-space-xs u-insert-cluster u-fx-y-ctr u-fx-shn' dateTime={dateTime}>
			<IconCalendar className='o-icon' />
			<span className='c-content-m u-fnt-wt u-fnt-en'>{spanDate}</span>
		</time>
	);
};

export const UpdateDate = ({ update }) => {
	if (!update || isNaN(new Date(update).getTime())) {
		return null;
	}
	const updateDate = new Date(update);
	const dateTime = `${updateDate.getFullYear()}-${String(updateDate.getMonth() + 1).padStart(2, '0')}-${String(updateDate.getDate()).padStart(2, '0')}`;
	const spanDate = `${updateDate.getFullYear()}.${String(updateDate.getMonth() + 1).padStart(2, '0')}.${String(updateDate.getDate()).padStart(2, '0')}`;

	return (
		<time className='o-cluster u-space-xs u-insert-cluster u-fx-y-ctr u-fx-shn' dateTime={dateTime}>
			<IconReload className='o-icon' />
			<span className='c-content-m u-fnt-wt u-fnt-en'>{spanDate}</span>
		</time>
	);
};
