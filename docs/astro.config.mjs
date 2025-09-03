// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
  site: 'https://graf-theory-games.github.io/giin/',
  base: '/giin/',
	integrations: [
		starlight({
      plugins: [starlightThemeFlexoki(), starlightBlog({
        title: "GIIN devblog",
        postCount: 7,
        recentPostCount: 1,
        authors: {
          urbanpidgeon: {
            name: "urbanpidgeon",
            //picture: "",
            url: "https://github.com/urbanpidgeon",
            //title: "",
          }
        },
      }),
      ],
			title: 'GIIN docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				//{
				//	label: 'Guides',
				//	items: [
				//		// Each item here is one entry in the navigation menu.
				//		{ label: 'Example Guide', slug: 'guides/example' },
				//	],
				//},
				//{
				//	label: 'Reference',
				//	autogenerate: { directory: 'reference' },
				//},
			],
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
		}),
	],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});
