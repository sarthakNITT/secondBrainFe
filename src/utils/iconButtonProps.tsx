import type { ReactElement } from "react"

export const IconButtonStyles = "rounded-full p-[10px] cursor-pointer"

export interface IconButtonProps {
    IconName: ReactElement,
    color: string
    bgColor?: string
}
