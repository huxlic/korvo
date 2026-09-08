import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		chunkSizeWarningLimit: 1000,
		rolldownOptions: {
			output: {
				codeSplitting: {
					groups: [
						{
							name: 'three-vendor',
							test: /node_modules[\\/](three|@react-three)/,
							priority: 20,
						},
						{
							name: 'gsap-vendor',
							test: /node_modules[\\/]gsap/,
							priority: 20,
						},
						{
							name: 'react-vendor',
							test: /node_modules[\\/](react|react-dom)/,
							priority: 15,
						},
						{
							name: 'vendor',
							test: /node_modules/,
							priority: 10,
						},
					]
				}
			}
		}
	}
})
