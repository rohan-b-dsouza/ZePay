import AuthRedirect from "../components/AuthRedirect";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Signup() {
    return (
        <div className="flex justify-center items-center h-screen bg-[#F0F2F5]">
            <div className="flex flex-col justify-center w-full max-w-md rounded-md p-9 space-y-5 bg-[#FFFFFF] shadow-sm">
                <div className="flex flex-col items-center justify-center space-y-2" >
                    <Heading heading={"Sign Up"}></Heading>
                    <SubHeading subheading={"Create your account to get started"}></SubHeading>
                </div>
                <div className="space-y-3">
                    <InputBox label="First Name" placeholder="Alex" type="text"></InputBox>

                    <InputBox label="Last Name" placeholder="James" type="text"></InputBox>

                    <InputBox label="Email" placeholder="example@gmail.com" type="email"></InputBox>

                    <InputBox label="Password" placeholder="minimum 6 characters" type="password"></InputBox>
                </div>
                <div className="space-y-3">
                    <Button content={"Create Account"}></Button>
                    <AuthRedirect question={"Already have an account?"} redirect={"Signin"}></AuthRedirect>
                </div>
            </div>
        </div>
    )
}