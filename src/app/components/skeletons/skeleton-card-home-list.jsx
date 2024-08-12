import { Skeleton } from "@nextui-org/react";

export default function SkeletonCardHomeList() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <div className="p-2 lg:flex">
            <Skeleton className="rounded-xl h-[400px] w-[400px]">
              <div className="h-[400px] w-[400px]"></div>
            </Skeleton>
            <div className="w-full">
              <Skeleton className="rounded-full h-10 w-10 m-2">
                <div></div>
              </Skeleton>
              <div className="p-2">
                <Skeleton className="rounded-full h-4 w-full">
                  <div></div>
                </Skeleton>
              </div>
              <div className="p-2">
                <Skeleton className="rounded-full h-4 w-1/2">
                  <div></div>
                </Skeleton>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
