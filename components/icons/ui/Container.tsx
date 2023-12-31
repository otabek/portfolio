import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto mb-20 mt-8 w-full max-w-[1188px] px-5 sm:mt-[76px] lg:px-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Container.displayName = "Container";

export default Container;
