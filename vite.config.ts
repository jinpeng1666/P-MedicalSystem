import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 集成element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 集成mock
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // 集成element-plus
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // 集成mock
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
  }
})
