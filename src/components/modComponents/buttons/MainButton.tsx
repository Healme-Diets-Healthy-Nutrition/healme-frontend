import { Button } from "@/components/ui/shadcn/button";
import { MouseEventHandler } from "react";

export default function MainButton({
  title,
  className,
  variant,
  onClick
}: {
  title: string;
  className?: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button className={className} variant={variant} onClick={onClick}>
      {title}
    </Button>
  );
}
