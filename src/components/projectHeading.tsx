import { Logo } from "../assets/logo"

export function ProjectHeading () {
    return <div className="text-[25px] font-normal flex-row flex gap-2 items-center">
    <div className="text-[#5046e3]">
        {Logo({size: "large"})}
    </div>
    Brainly
</div>
}