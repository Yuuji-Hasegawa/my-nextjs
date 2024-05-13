import Script from 'next/script';
import config from '@/config/setting.json';

export default function InsertSw() {
	const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://';
	const uri = `${protocol}${config.site.host}/sw.js`;
	return (
		<Script
			id='pwa-sw'
			strategy='afterInteractive'
			dangerouslySetInnerHTML={{
				__html: `
				if ('serviceWorker' in navigator) {
					window.addEventListener('load', function() {
							navigator.serviceWorker.register('${uri}').then(function(registration) {
							console.log('My ServiceWorker registed.', registration.scope);
							}, function(err) {
							console.log('My ServiceWorker error.', err);
							});
					});
				}`,
			}}
		/>
	);
}
