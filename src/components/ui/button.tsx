import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prime-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow-blueGlow hover:-translate-y-0.5 hover:bg-prime-blue",
        glow:
          "bg-gradient-to-r from-prime-purple to-prime-blue text-white shadow-glow hover:-translate-y-0.5 hover:shadow-blueGlow",
        outline:
          "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-prime-blue/60 hover:bg-white/10",
        ghost: "text-zinc-300 hover:bg-white/10 hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        lg: "min-h-12 px-7 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
