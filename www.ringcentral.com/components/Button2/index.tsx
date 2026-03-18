import * as React from "react";
import { cn } from "@/lib/utils";
import { button2Variants, type Button2Variants } from "./variants";

/**
 * Button2
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="global-header__chevron-back-btn" aria-label="Back">
							
	
		
		
			<svg xmlns="http://www.w3.org/2000/svg" id="svg-1941688504" role="img" viewBox="0 0 14 14">
    <path clip-rule="e
 * 
 * Observed on: https://www.ringcentral.com, https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-fourth-quarter-and-fiscal-year-2025-results.html, https://www.ringcentral.com/features/local-numbers/area-code-732-848.html
 * Usage count: 3x
 */
export interface Button2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button2Variants {}

export const Button2 = React.forwardRef<HTMLDivElement, Button2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button2.displayName = "Button2";
