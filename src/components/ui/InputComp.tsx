import { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputComp = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => (
    <label
      htmlFor={id}
      className="relative block rounded-md border border-gray-200 shadow-xs focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <input
        id={id}
        ref={ref}
        className={cn(
          "peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden",
          className
        )}
        placeholder={label}
        {...props}
      />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  )
);

export default InputComp;
