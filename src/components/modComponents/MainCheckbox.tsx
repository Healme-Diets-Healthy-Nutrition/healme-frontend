import { Checkbox } from "@/components/ui/shadcn/checkbox"
import { Label } from "@/components/ui/shadcn/label"

interface MainCheckboxProps {
  label: string;
  className?: string;
}

export default function MainCheckbox({label, className}: MainCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="agree"
        className={`focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className || ""}`}
      />
      <Label htmlFor="agree">{label}</Label>
    </div>
  )
}
