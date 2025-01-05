import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/yaerguos-website' : '',
			assets: process.env.NODE_ENV === 'production' ? 'https://spitkov.github.io/yaerguos-website' : ''
		},
		appDir: 'app',
		trailingSlash: 'always'
	},
	preprocess: vitePreprocess()
};
