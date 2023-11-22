import { cn } from "@/lib/utils";
import React from "react";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mx-auto w-full max-w-[1188px] px-3", className)}
      {...props}
    >
      {children}
    </div>
  );
});

export default Container;