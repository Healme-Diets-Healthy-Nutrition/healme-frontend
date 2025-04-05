import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ButtonVariants, buttonVariants } from "@/lib/button.variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Determine if we should render a Slot or a standard button
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        // Apply the classes here!
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props} // Spread remaining props (like onClick, disabled, children, etc.)
      />
    );
  },
);
Button.displayName = "Button"; // Good practice for debugging

// Export the component
export { Button };
