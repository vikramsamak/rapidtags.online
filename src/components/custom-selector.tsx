import { Dispatch, SetStateAction } from 'react';
import { Label } from './shadcn/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './shadcn/select';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectorProps {
  id: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: Option[];
  placeholder: string;
}

export default function CustomSelector({
  id,
  label,
  value,
  setValue,
  options,
  placeholder,
}: CustomSelectorProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-white/80">
        {label}
      </Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger
          id={id}
          className="bg-background/50 !h-12 w-full border-white/10 transition-colors focus:border-white/20"
          title={placeholder}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
