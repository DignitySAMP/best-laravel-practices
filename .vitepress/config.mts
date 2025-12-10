import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitepress'
import Components from 'unplugin-vue-components/vite'

const currentDir = dirname(fileURLToPath(import.meta.url))
const componentsDir = resolve(currentDir, 'theme', 'components')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laravel Best Practices",
  description: "A revival of alexeymezenin's laravel-best-practices repository.",
  srcDir: 'src',

  vite: {
    plugins: [
      // components are auto imported with unplugin, see https://github.com/unplugin/unplugin-vue-components
      Components({
        dirs: [
          componentsDir // directory of our components
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        // generate a components shim to help our IDE with autocompletion:
        dts: resolve(currentDir, 'components.d.ts'),
      }),
    ]
  }
})
