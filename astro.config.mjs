// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Veloera Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Veloera/Veloera' }],
			sidebar: [
				{
					label: '指南',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '参考',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
