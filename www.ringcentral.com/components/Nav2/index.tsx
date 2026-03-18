import * as React from "react";
import { cn } from "@/lib/utils";
import { nav2Variants, type Nav2Variants } from "./variants";

/**
 * Nav2
 * 
 * Extracted from source site.
 * Original structure:
 * <nav aria-label="Back to top navigation" class="back-to-top-nav">
	
	
		
			<div class="back-to-top CID-back-to-top-de427968 IID-back-to-top-3b262ec">
	
	
	
	
	

	
	
	



<a class="back-to-top__arrow-
 * 
 * Observed on: https://www.ringcentral.com, https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-fourth-quarter-and-fiscal-year-2025-results.html, https://www.ringcentral.com/features/local-numbers/area-code-732-848.html
 * Usage count: 3x
 */
export interface Nav2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav2Variants {}

export const Nav2 = React.forwardRef<HTMLDivElement, Nav2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav2.displayName = "Nav2";
