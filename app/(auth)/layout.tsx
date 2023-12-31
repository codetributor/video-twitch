import { Suspense } from "react";
import Logo from "../(auth)/_components/Logo"; 
import { SignInSkeleton } from "./sign-in/[[...sign-in]]/page";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="w-full flex">
            <div className="h-screen w-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="lg:flex lg:w-[50%] justify-center items-center">
            <Logo />
            </div>
            <div className="lg:bg-white mt-5 lg:mt-0 lg:w-[50%] flex justify-center items-center lg:h-screen">
            <Suspense fallback={<SignInSkeleton />} >
            {children}
            </Suspense>
            </div>
        </div>
        </div>
        
    )
}