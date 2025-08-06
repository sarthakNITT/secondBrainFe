import { type IconButtonProps, IconButtonStyles } from "../utils/iconButtonProps"

export function IconButton (props: IconButtonProps) {
    return <div className={`${IconButtonStyles} text-${props.color} ${props.bgColor ? `bg-${props.bgColor}` : `bg-[#5046e3]`}`}>
        {props.IconName}
    </div>
}