import { cn } from "@/lib/utils";
import React from "react";

type SkillCardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: JSX.Element;
  title: string;
};

const SkillCard = React.forwardRef<HTMLDivElement, SkillCardProps>(
  ({ className, icon, title }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 rounded-lg bg-[radial-gradient(51.5%_51.28%_at_50.35%_48.72%,rgba(67,67,67,0.69)_0%,rgba(152,141,141,0.42)_100%)] p-2",
          className,
        )}
      >
        {icon}
        <p>{title}</p>
      </div>
    );
  },
);
SkillCard.displayName = "SkillCard";

export default SkillCard;
