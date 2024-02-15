import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
	manifest: {
		permissions: ['storage']
	},

	vite: () => ({
		plugins: [react()],

		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./', import.meta.url))
			}
		}
	})
});
