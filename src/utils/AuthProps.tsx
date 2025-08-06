export type calling = "register" | "login"

export interface AuthProps {
    Heading: string,
    subHeading: string,
    bottomline: string,
    buttomButton: string,
    forgotLine: boolean,
    calledFrom: calling
}