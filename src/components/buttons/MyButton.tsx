import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import cn from "../../utils/cn";

interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement>, 
VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const MyButton = ({ children, className, variant, size, ...props }: MyButtonProps): JSX.Element => {
  return (
    <button
      {...props}
        className={cn(buttonVariants({variant, size, className}))}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva("rounded-2xl", {
  variants: {
    variant: {
      outline:
        " bg-white-smoke border border-rose-taupe w-124 h-44 hover:bg-linen",
    },
    size: {
      sm: "w-124 h-44",
      md: "w-124 h-44",
      lg: "w-124 h-44",
    },
  },
  defaultVariants: {
      variant: "outline",
      size: "md",
  }
});

export default MyButton;
