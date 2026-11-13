import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gw-deep text-white shadow-xs",
        secondary:
          "border border-emerald-200/60 bg-emerald-50 text-gw-deep",
        teal:
          "border border-teal-200 bg-teal-50 text-gw-teal",
        outline: "border border-slate-200 text-slate-700 bg-white/80",
        mono: "font-mono text-[10px] bg-white/90 border border-slate-200 text-gw-deep shadow-2xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
