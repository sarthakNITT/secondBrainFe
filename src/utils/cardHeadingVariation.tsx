import type { ReactElement } from "react"
import type { size } from "./iconSize"
import { DocumentIcon } from "../assets/document"
import { LinkIcon } from "../assets/link"
import { VideoIcon } from "../assets/video"

export type contentType = "document" | "video" | "link" 

export const IconMap: Record<contentType, (props: {size: size}) => ReactElement > = {
    document: DocumentIcon,
    link: LinkIcon,
    video: VideoIcon
}

export interface CardHeadingProps {
    title: string,
    startIconType : contentType,
    size: size
}
