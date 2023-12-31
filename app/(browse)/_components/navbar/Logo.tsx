import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib//utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Logo() {
    return(
       <Link href="/">
        <div className="flex items-center gap-x-4 hover:opacity-75 transition">
            <div className="bg-white rounded-full px-[1px] py-[9px] mr-12 shrink-0 lg:mr-0 lg:shrink">
                <Image 
                src="/peace-logo.png"
                alt="Video-Twitch"
                height="50"
                width="50"
                />
            </div>
            <div className={cn(font.className,
                "hidden lg:block"
                )}>
                <p className="text-lg font-semibold">Crowdinary</p>
                <p className="text-xs text-muted-foreground">Let&apos;s party</p>
            </div>
        </div>
       </Link>
    )
}