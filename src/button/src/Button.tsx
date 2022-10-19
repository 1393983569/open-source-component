import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import './button.scss'

export default defineComponent({
    name: 'SButton',
    props: buttonProps,
    setup(props, { slots }) {
        const { type } = toRefs(props)
        return () => {
            return (
                <button class={`s-btn s-btn--${type.value}`}>
                    {slots.default ? slots.default() : '按钮'}
                </button>
            )
        }
    }
})
