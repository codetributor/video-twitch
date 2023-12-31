import Logo from "../(auth)/_components/Logo"; 

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="h-screen space-y-6 flex flex-col justify-center items-center">
            <Logo />
            {children}
            </div>
    )
}