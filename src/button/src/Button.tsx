import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SButton',
    setup(props, { slots }) {
        return () => {
            return <button>{slots.default ? slots.default() : '按钮'}</button>
        }
    }
})
