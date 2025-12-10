import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const currentDir = dirname(fileURLToPath(import.meta.url))
const componentsDir = resolve(currentDir, 'theme', 'components')
const layoutsDir = resolve(currentDir, 'theme', 'layouts')
const composablesDir = resolve(currentDir, 'theme', 'composables')
const utilsDir = resolve(currentDir, 'theme', 'utils')

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
          componentsDir, // directory of our components
          layoutsDir // directory of our 'pages' (areas of the application that need a custom template, i.e. blog posts differ from index)
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        // generate a components shim to help our IDE with autocompletion:
        dts: resolve(currentDir, 'components.d.ts'),
      }),
      { // custom plugin to extend the default vite watcher (by default only srcDir) 
        // to watch custom assigned directories
        name: 'watcher',
        configureServer(server) {
          server.watcher.add([componentsDir])
        },
      },
      // auto import composables and utils
      AutoImport({
        imports: ['vue', 'vitepress'],
        dirs: [
          composablesDir,
          utilsDir
        ],
        // generate an auto-imports shim to aid with 
        dts: resolve(currentDir, 'auto-imports.d.ts'),
      }),
      tailwindcss()
    ]
  }
})
