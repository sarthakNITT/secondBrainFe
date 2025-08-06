import type { ReactElement } from "react"

export interface tagProps {
    text: string,
    startIcon: ReactElement
}

export const tagStyle = {
    "default": "bg-[#edf2fe] px-3 py-1 text-xs text-[#5e54cc] rounded-full flex-row flex items-center font-medium"
}
