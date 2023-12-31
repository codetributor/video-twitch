import { Skeleton } from "@/components/ui/skeleton";
import { SignIn } from "@clerk/nextjs";
 
export default async function Page() {
  return <SignIn />;
}

export const SignInSkeleton = () => {

    return(
      <div className="w-[300px] lg:w-[400px] mt-5 space-y-2 rounded-md">
        <div className="flex- 1">
          <Skeleton className="h-6"/>
        </div>
        <div className="flex- 1">
          <Skeleton className="h-6"/>
        </div>
        <div className="flex- 1">
          <Skeleton className="h-48"/>
        </div>
      </div>
    )
}