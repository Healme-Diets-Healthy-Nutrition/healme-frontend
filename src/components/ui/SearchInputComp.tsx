import { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import cn from "../../utils/cn";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, id = "search", label = "Search", ...props }, ref) => (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={cn(
          "w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600",
          className
        )}
        placeholder={label}
        {...props}
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  )
);

export default SearchInput;
