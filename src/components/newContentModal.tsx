import { useRef, useState } from "react";
import { CloseIcon } from "../assets/close";
import { plusIcon } from "../assets/plus";
import type { NewContentModalProps } from "../utils/NewContentModal";
import Button from "./Button";
import axios from "axios";
import { URL } from "../utils/backendURL";

export function NewContentModal ({setModal}: NewContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const tagsRef = useRef<HTMLInputElement>(null)
    const [selectedType, setSelectedType] = useState("")

    async function createContent () {
        const token = localStorage.getItem("accessToken")
        const res = await axios.post(`${URL}/api/v1/content/addContent`, {
            title: titleRef.current?.value,
            link: linkRef.current?.value,
            tags: tagsRef.current?.value,
            type: selectedType
        },{
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        })
        if(res.status===401){
            await axios.get(`${URL}/api/v1/auth/refresh`, {
                withCredentials: true
            })
        }
        alert("content created successfully")
    }

    const commonStyles = "border-slate-300 border rounded-lg p-1 text-[12px] w-full pl-2 pr-2"
    return (
        <div className="fixed z-1 flex bg-stone-950/50">
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="w-100 min-h-60 bg-white rounded-xl p-5 flex-col flex gap-2">
                    <div className="w-full flex-row justify-between flex items-start">
                        <div>
                            <div className="font-semibold text-[16px]">Create New Content</div>
                            <div className="text-[12px] w-70 text-slate-600">Capture quick thoughts, ideas, or reminders on the go.</div>
                        </div>
                            <div className="cursor-pointer" onClick={()=>setModal(false)} >{CloseIcon({size: "medium"})}</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <input ref={titleRef} className={commonStyles} title="title" placeholder="Enter Title" />
                            <select className={commonStyles} value={selectedType} onChange={(e)=>setSelectedType(e.target.value)}>
                                <option value="document">Document</option>
                                <option value="youtube">Youtube</option>
                                <option value="tweet">Tweet</option>
                                <option value="links">Links</option>
                            </select>
                        </div>
                        <input ref={linkRef} className={commonStyles} title="Link" placeholder="Enter Link" />
                        <input ref={tagsRef} className={commonStyles} title="Tags" placeholder="Tags" />
                        <div className="flex">
                            <Button onClick={createContent} fullWidth={true} loading={true} buttonVariant="primary" text="Add Content" startIcon={plusIcon({size: "medium"})}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}