import { type ComponentProps } from 'react';

import { Button } from '../shadcn';

type CustomButtonProps = ComponentProps<typeof Button>;

export function CustomButton({
  children,
  className,
  variant,
  size,
  asChild,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    >
      {children}
    </Button>
  );
}
