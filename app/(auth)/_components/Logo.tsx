import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib//utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Logo() {
    return(
        <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="bg-white rounded-full px-[1px] py-[15px]">
                <Image src="/peace-logo.png" alt="video-twitch"
                height={100}
                width={100}
                />
            </div>
            <div className={cn("flex flex-col items-center", font.className)}>
                <p className="text-xl font-semibold">
                    Crowdinary
                </p>
                <p className="text-sm text-muted-foreground">Let&apos;s party</p>

            </div>
        </div>
    )
}