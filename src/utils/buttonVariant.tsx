import type { ReactElement } from "react"

export type variant = "primary" | "secondary"

export interface ButtonProps {
  text: string,
  buttonVariant: variant,
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  onClick?: () => void,
  fullWidth?: boolean,
  loading?: boolean
}

export const variantStyles = {
  "primary": "bg-[#5046e3] text-white",
  "secondary": "bg-[#e1e8ff] text-[#4039b1] font-medium"
}

export const defaultStyles = "py-2 px-3 text-sm font-light rounded-lg flex-row flex items-center justify-between cursor-pointer duration-300 ease-out hover:duration-300 ease-out hover:scale-105 transform-gpu"
