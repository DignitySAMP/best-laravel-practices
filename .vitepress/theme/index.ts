
// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
import { Theme } from 'vitepress'
import Layout from './Layout.vue'

import './styles/tailwind.css'

export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        // ...
    }
} satisfies Theme