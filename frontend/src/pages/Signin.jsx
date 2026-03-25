import AuthRedirect from "../components/AuthRedirect";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Signin() {
    return (
        <div className="flex justify-center items-center h-screen bg-[#F0F2F5]">
            <div className="flex flex-col justify-center w-full max-w-md rounded-md p-9 space-y-7 bg-[#FFFFFF] shadow-sm">
                <div className="flex flex-col items-center justify-center space-y-2" >
                    <Heading heading={"Sign in"}></Heading>
                    <SubHeading subheading={"Enter your credentials"}></SubHeading>
                </div>
                <div className="space-y-4">
                    <InputBox label="Email" placeholder="Enter your email" type="email"></InputBox>

                    <InputBox label="Password" placeholder="Enter your password" type="password"></InputBox>
                </div>
                <div className="space-y-4">
                    <Button content={"Login"}></Button>
                    <AuthRedirect question={"Don't have an account?"} redirect={"Signup"}></AuthRedirect>
                </div>
            </div>
        </div>
    )
}