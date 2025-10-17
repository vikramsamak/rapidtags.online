import { Input } from './ui/input';

interface CommonInputProps {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export default function CommonInput({
  id,
  type = 'text',
  placeholder,
  value,
  setValue,
}: CommonInputProps) {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="bg-background/50 h-12 border-white/10 transition-colors focus:border-white/20"
    />
  );
}
