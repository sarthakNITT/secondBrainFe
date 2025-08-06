import type { tagProps } from "../utils/tags"
import { tagStyle } from "../utils/tags"

export function Tags(props: tagProps) {
    return <div className={tagStyle["default"]}>
        {props.startIcon ? <div>{props.startIcon}</div> : null}{props.text}
    </div>
}