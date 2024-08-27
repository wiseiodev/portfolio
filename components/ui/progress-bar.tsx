import * as React from 'react';

import { cn } from '@/lib/utils';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full h-4 bg-secondary rounded-full overflow-hidden',
          className
        )}
        {...props}>
        <div
          className='h-full bg-primary transition-all duration-300 ease-in-out'
          style={{ width: `${value}%` }}
        />
      </div>
    );
  }
);
ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
