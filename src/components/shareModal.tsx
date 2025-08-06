import { CloseIcon } from "../assets/close";
import { shareIcon } from "../assets/share";
import type { NewContentModalProps } from "../utils/NewContentModal";
import Button from "./Button";

export function ShareModal ({setModal}: NewContentModalProps) {
    const showCrossIcon = CloseIcon({size: "medium"})
    return(
        <div className="fixed z-1 flex bg-stone-950/50">
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="max-w-100 max-h-60 bg-white rounded-xl p-5">
                    <div className="flex-row justify-between flex items-center font-semibold text-[16px]">
                        <div>Share Your Brain</div>
                        <div className="cursor-pointer" onClick={()=>setModal(false)} >{showCrossIcon}</div>
                    </div>
                    <div className="mt-3 text-[14px] text-slate-600">
                        Share your entire collection of notes, document, tweets, and videos with others. They'll be able to import your content into their own Brain.
                    </div>
                    <div className="mt-3 flex items-center justify-center">
                        <Button fullWidth={true} buttonVariant="primary" text="Share Brain" startIcon={shareIcon({size: "medium"})}/>
                    </div>
                    <div className="text-[13px] text-slate-400 flex items-center justify-center mt-3"> 
                        1 item will be shared
                    </div>
                </div>
            </div>
        </div>
    )
}