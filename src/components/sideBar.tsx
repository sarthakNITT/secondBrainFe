import { DocumentIcon } from "../assets/document"
import { Hashtag } from "../assets/hashtag"
import { LinkIcon } from "../assets/link"
import { TweetIcon } from "../assets/tweet"
import { VideoIcon } from "../assets/video"
import { ProjectHeading } from "./projectHeading"

export function SideBar () {
    const showVideoIcon = VideoIcon({size: "medium"})
    const showDocIcon = DocumentIcon({size: "medium"})
    const showLinkIcon = LinkIcon({size: "medium"})
    const showTagIcon = Hashtag({size: "medium"})
    const showTweetIcon = TweetIcon({size: "medium"})
    const optionStyles = "pt-2.5 pb-2.5 flex-row items-center flex gap-2 font-extralight hover:font-light hover:duration-50 ease-in-out hover:scale-105 transform-gpu cursor-pointer"
    return (
        <div className="w-64 shadow-md h-full p-4">
            <ProjectHeading/>
            <div className="p-4 font-light text-[17px] flex-col flex">
                <div className={optionStyles}>
                    <div>
                        {showTweetIcon}
                    </div> 
                    <div className="">
                        Tweet
                    </div>
                </div>
                <div className={optionStyles}>
                    <div>
                        {showVideoIcon}
                    </div> 
                    <div className="">
                        Videos
                    </div>
                </div>
                <div className={optionStyles}>
                    <div>
                        {showDocIcon}
                    </div> 
                    <div>
                    Documents
                    </div>
                </div>
                <div className={optionStyles}>
                    <div>
                        {showLinkIcon}
                    </div> 
                    <div>
                    Links
                    </div>
                </div>
                <div className={optionStyles}>
                    <div>
                        {showTagIcon}
                    </div> 
                    <div>
                        Tags
                    </div>
                </div>
            </div>
        </div>
    )
}