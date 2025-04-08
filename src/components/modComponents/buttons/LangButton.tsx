import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/shadcn/select";
import { US, RU, KZ } from "country-flag-icons/react/3x2";

const languages = [
  { value: "eng", label: "English", icon: <US className="h-4 w-4" /> },
  { value: "rus", label: "Русский", icon: <RU className="h-4 w-4" /> },
  { value: "kaz", label: "Qazaqšа", icon: <KZ className="h-4 w-4" /> },
];

export function LangButton() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
  return (
    <Select
      value={selectedLanguage.value}
      onValueChange={(val) => {
        const selected = languages.find((lang) => lang.value === val);
        setSelectedLanguage(selected || languages[0]);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2">
          {selectedLanguage.icon}
          {selectedLanguage.label}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <div className="flex items-center gap-2">
                {lang.icon}
                {lang.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LangButton;
