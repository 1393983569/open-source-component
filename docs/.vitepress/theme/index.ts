import Theme from 'vitepress/dist/client/theme-default'
import HelloWord from '../../../src/components/HelloWorld.vue'

export default {
    ...Theme,
    // 扩展应用程序实例
    enhaceAppp({ app }) {
        // 注册组件
        app.components('HelloWord', HelloWord)
    }
}