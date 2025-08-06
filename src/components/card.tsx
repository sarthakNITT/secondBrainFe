import { DeleteIcon } from "../assets/delete"
import { Hashtag } from "../assets/hashtag"
import { shareIcon } from "../assets/share"
import { IconMap } from "../utils/cardHeadingVariation"
import type { CardHeadingProps } from "../utils/cardHeadingVariation"
import { Tags } from "./tags"

export function Card (props: CardHeadingProps) {
    const IconComponent = IconMap[props.startIconType]
    const url = 'https://www.youtube.com/watch?v=DOvG7MC8i7E'
    const extract = url.split("?v=")[1]
    const embeddedYoutubeUrl = `https://www.youtube.com/embed/${extract}`
    const optionIconStyles = "cursor-pointer hover:text-black hover:duration-300 ease-out"
    const embedLinkStyle = "rounded-lg mt-6 w-full"
    return (
        <div className="max-w-90 bg-white min-h-70 p-5 rounded-lg shadow-md duration-300 ease-out hover:duration-300 ease-out hover:scale-105 transform-gpu">
            <div className="flex justify-between ">
                <div className="flex items-center gap-2">
                    <div>
                        <IconComponent size="large"/>
                    </div>
                    <div className="text-lg font-medium">
                        {props.title}
                    </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <div className={optionIconStyles}>
                        {shareIcon({size: "medium"})}
                    </div>
                    <div className={optionIconStyles}>
                        {DeleteIcon({size: "medium"})}
                    </div>
                </div>
            </div>
            <div>
                <iframe className={embedLinkStyle} src={embeddedYoutubeUrl}></iframe>
            </div>
            <div className="mt-3 flex flex-row items-center gap-2 flex-wrap">
                <Tags text='Sarthak' startIcon={Hashtag({size: "small"})}/>
                <Tags text='Sarthak' startIcon={Hashtag({size: "small"})}/>
                <Tags text='Aarav' startIcon={Hashtag({size: "small"})}/>
                <Tags text='Sarthak' startIcon={Hashtag({size: "small"})}/>
                <Tags text='Sarthak' startIcon={Hashtag({size: "small"})}/>
                <Tags text='Sarthak' startIcon={Hashtag({size: "small"})}/>
            </div>
            <div className="text-grey text-sm text-slate-500 mt-2">
                Addded on 09/06/2004
            </div>
        </div>
    )
}