import { cn } from "@/lib/utils";
import React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex rounded-lg border border-solid border-gray bg-[linear-gradient(94deg,_#0F0F0F_-8.52%,_rgba(65,61,61,0.51)_103.03%)] p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";

export default Card;
