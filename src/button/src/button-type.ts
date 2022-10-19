import { PropType, ExtractPropTypes } from 'vue'

// 联合类型 会使用type来命名
export type IButtonType = 'primary' | 'secondary' | 'text'

export const buttonProps = {
    type: {
        type: String as PropType<IButtonType>,
        default: 'secondary'
    }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
