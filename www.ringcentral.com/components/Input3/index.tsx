import * as React from "react";
import { cn } from "@/lib/utils";
import { input3Variants, type Input3Variants } from "./variants";

/**
 * Input3
 * 
 * Extracted from source site.
 * Original structure:
 * <input type="submit" tabindex="-1" class="search__submit">
 * 
 * Observed on: https://www.ringcentral.com, https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-fourth-quarter-and-fiscal-year-2025-results.html, https://www.ringcentral.com/features/local-numbers/area-code-732-848.html
 * Usage count: 3x
 */
export interface Input3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input3Variants {}

export const Input3 = React.forwardRef<HTMLDivElement, Input3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input3.displayName = "Input3";
