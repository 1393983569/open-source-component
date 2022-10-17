import { defineComponent } from 'vue'

// 创建一个组件有以下几种方式

// 1.函数式组件
// export () => <div>xxx</div>

// 2.defineComponent
// export default defineComponent({
//   render() {
//     return <div>test</div>
//   }
// })

// 3. defineComponent({setup(props, ctx)})
// 推荐这种写法，对ts支持最好因为它摒弃了this
// 借助babel-plugin-jsx
// vue独特的概念： 修饰符，slot，
export default defineComponent({
    setup(props, ctx) {
        return () => {
            return <div>sss</div>
        }
    }
})
