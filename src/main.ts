import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import SButton from './button/src'
// 引入主样式文件
import './index.scss'
const app = createApp(App)

app.mount('#app')
app.use(SButton)
