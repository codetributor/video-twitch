import { getRecommended } from "@/lib/recommend-service";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Toggle } from "./toggle";
import Wrapper from "./wrapper";

export default async function Sidebar() {

    const recommended = await getRecommended();

    return(
        <Wrapper>
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended}/>
            </div>
        </Wrapper>
    )
}

export const SidebarSkeleton = () => {
    return(
        <aside className="fixed h-full bg-background border-r border-[#2D2E35] z-50 left-0 flex flex-col w-[70px] lg:w-60">
            <RecommendedSkeleton />
        </aside>
    )
}