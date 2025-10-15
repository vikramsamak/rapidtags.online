import { PLATFORM_OPTIONS } from '@/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Dispatch, SetStateAction } from 'react';

interface PlatformSelectorProps {
  platform: string;
  setPlatform: Dispatch<SetStateAction<string>>;
}

export default function PlatformSelector({
  platform,
  setPlatform,
}: PlatformSelectorProps) {
  return (
    <Select value={platform} onValueChange={setPlatform}>
      <SelectTrigger
        className="bg-background/50 !h-12 w-full border-white/10 transition-colors focus:border-white/20"
        title="Select platform"
        name="Select platform"
      >
        <SelectValue placeholder="Select platform" />
      </SelectTrigger>
      <SelectContent>
        {PLATFORM_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
