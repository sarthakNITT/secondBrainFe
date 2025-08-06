import { AuthBox } from "../components/authBox";

export function SignUp () {
    return (
        <AuthBox calledFrom="register" Heading="Hello There" subHeading="Enter You Username and Password to create your account" forgotLine={false} bottomline="Already have an account?" buttomButton="Sign In"/>
    )
}