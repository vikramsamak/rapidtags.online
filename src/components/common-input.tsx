import { Input } from './shadcn/input';
import { Label } from './shadcn/label';

interface CommonInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export default function CommonInput({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  setValue,
}: CommonInputProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-white/80">
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-background/50 h-12 border-white/10 transition-colors focus:border-white/20"
      />
    </div>
  );
}
