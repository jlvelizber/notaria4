import { ReactNode } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface CardInterface {
    icon?: IconProp
    title: string
    content?: ReactNode
    overlay?: boolean | false
    overlayImg?: string
    overlayTitle?: string
    overlayTitleAction?: string
    overLayCallAction?: (param?: any) => void
    classes?: string
}