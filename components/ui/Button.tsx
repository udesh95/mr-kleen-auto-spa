import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20",
      outline: "border border-white/20 hover:bg-white/10 text-white",
      ghost: "hover:bg-white/5 text-slate-300 hover:text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";