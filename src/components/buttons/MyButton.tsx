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
        " bg-white-smoke border border-rose-taupe w-30 h-11 hover:bg-hover-outline",
    },
    size: {
      sm: "w-30 h-11",
      md: "w-30 h-11",
      lg: "w-30 h-11",
    },
  },
  defaultVariants: {
      variant: "outline",
      size: "md",
  }
});

export default MyButton;
