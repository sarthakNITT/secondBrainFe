import Button from "./Button"
import { ProjectHeading } from "./projectHeading"
import { type AuthProps } from "../utils/AuthProps"
import { useRef } from "react"
import axios from "axios"
import { URL } from "../utils/backendURL"
import { useNavigate } from "react-router-dom"

export function AuthBox (props: AuthProps) {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    async function doAuth () {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        try {
            const res = await axios.post(`${URL}/api/v1/auth/${props.calledFrom}`, {
                username,
                password
            },{withCredentials: true})
            if(props.calledFrom=="login"){
                const jwt = res.data.accessToken
                localStorage.setItem("accessToken", jwt)
            }else{
                res.data
            }
            alert(`You has ${props.calledFrom=="login" ? "logged in" : "registered" } successfully!`)
            {props.calledFrom=="register" ? navigate("/signin") : navigate("/dashboard") }
        } catch (error) {
            
        }
    }

    function navigateAuth () {
        if(props.calledFrom=="login"){
            navigate("/signup")
        }else{
            navigate("/signin")
        }
    }

    return (
        <div className="flex flex-row">
            <div className="flex items-center h-screen justify-between flex-1/1 flex-col">
                <div className="w-full pt-5 flex items-center justify-center">
                    <ProjectHeading/>
                </div>
                <div className="flex=1/1 intems-center justify-center">
                    <div className="text-[35px] text-center">{props.Heading}</div>
                    <div className="text-[13px] text-stone-500">{props.subHeading}</div>
                    <div className="mt-5 ">
                        <div className="text-[13px] font-normal text-stone-900">Username</div>
                        <input ref={usernameRef} placeholder="Enter your Username" className="bg-slate-100 rounded-md p-2 w-full text-[12px]" />
                    </div>
                    <div className="mt-3">
                        <div className="text-[13px] font-normal text-stone-900">Password</div>
                        <input ref={passwordRef} placeholder="Enter your Password" className="bg-slate-100 rounded-md p-2 w-full text-[12px]" />
                    </div>
                    {props.forgotLine ?
                        <div className="flex justify-between items-center mt-1">
                            <div className="text-[13px]">Remember Me</div>
                            <div className="text-[13px] cursor-pointer">Forgot Password</div> 
                        </div>
                    : null}
                    <div className="mt-4">
                        <Button onClick={doAuth} text={props.calledFrom=="login" ? "Sign In" : "Sign Up"} buttonVariant="primary" fullWidth={true}/>
                    </div>
                </div>
                <div className="flex mb-5 text-[13px] text-stone-500">
                    {props.bottomline} <div onClick={navigateAuth} className="pl-1 cursor-pointer text-stone-900"> {props.buttomButton}</div>
                </div>
            </div>
        </div>
    )
}