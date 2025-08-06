import { AuthBox } from "../components/authBox";

export function SignIn () {
    return (
        <AuthBox calledFrom="login" Heading="Welcome Back" subHeading="Enter You Username and Password to acces your account" forgotLine={true} bottomline="Don't have an account?" buttomButton="Sign Up"/>
    )
}