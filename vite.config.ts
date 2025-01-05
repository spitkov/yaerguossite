import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		assetsDir: '_app',
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});
