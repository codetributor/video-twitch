"use client";

import { useSidebar } from "@/store/use-sidebar"
import { cn } from "@/lib/utils";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
    children: React.ReactNode
}



export default function Wrapper({children}: WrapperProps) {

    const { collapsed } = useSidebar((state) => state);
    const isClient = useIsClient();

    if(!isClient) return null

    return(
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
        )}>
            {children}
        </aside>
    )
}