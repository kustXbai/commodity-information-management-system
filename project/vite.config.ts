// https://vitejs.dev/config/
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(({ command,mode })=>{
  //获取各种环境下的环境变量
  //loadEnv(mode,process.cwd())含义是我要加载的哪个环境的文件，以及这个文件在哪一个位置，获取到就会生成环境对象
  let env = loadEnv(mode,process.cwd());
  return {
        plugins: [vue(),
        createSvgIconsPlugin({
          // Specify the icon folder to be cached
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          // Specify symbolId format
          symbolId: 'icon-[dir]-[name]',
        }),
        viteMockServe({
          // localEnabled:true
          localEnabled: command === 'serve',
        })
      ],
        resolve: {
          alias: {
              "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
          }
      },
      //scss全局变量的一个配置
      css: {
        preprocessorOptions: {
          scss: {
            javascriptEnabled: true,
            additionalData: '@import "./src/styles/variable.scss";',
          },
        },
      },
      //代理跨域
      server:{
        proxy:{
          [env.VITE_APP_BASE_API]:{
            //获取数据的服务器地址设置
            target: env.VITE_SERVE,
            //需要代理跨域
            changeOrigin: true,
            //路径重写
            rewrite: (path) => path.replace(/^\/api/, ''),
          }
        }
      }
  }
})
