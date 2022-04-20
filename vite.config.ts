import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [vue(), WindiCSS({
    scan: {
      dirs: ['.'], // all files in the cwd
      fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
    },
  }),
  AutoImport({
    imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
    dts: 'src/auto-imports.d.ts',
  }),
  Components({
    // relative paths to the directory to search for components
    dirs: ['src/**/components'],
    // allow auto load markdown components under `./src/components/`
    extensions: ['vue'],
    // search for subdirectories
    deep: true,
    dts: 'src/components.d.ts',
    // allow auto import and register components used in markdown
    include: [/\.vue$/, /\.vue\?vue/],
    // custom resolvers

  }),
  ]
})
