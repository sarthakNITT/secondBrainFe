import type { ButtonProps } from "../utils/buttonVariant"
import { variantStyles, defaultStyles } from "../utils/buttonVariant"

function Button (props: ButtonProps) {
  return (
    <button 
      className={
        `${variantStyles[props.buttonVariant]} ${defaultStyles} ${props.fullWidth ? " w-full items-center justify-center" : null} ${props.loading ? " opacity-50" : null}`
      }
      onClick={props.onClick}
    >
      {
        props.startIcon 
        ? <div className="pr-1">{props.startIcon}</div> 
        : null
      } {props.text} {props.endIcon}
    </button>
  )
}

export default Button
