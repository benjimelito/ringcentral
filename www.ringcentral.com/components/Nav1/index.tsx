import * as React from "react";
import { cn } from "@/lib/utils";
import { nav1Variants, type Nav1Variants } from "./variants";

/**
 * Nav1
 * 
 * Extracted from source site.
 * Original structure:
 * <nav role="navigation" aria-label="Top Navigation">
	
		
			



	
	
	
	
		
			<div class="anchor-element CID-anchor-element-c02c863f IID-anchor-element-b933cc36">



<div class="anchor-element__wrap" 
 * 
 * Observed on: https://www.ringcentral.com, https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-fourth-quarter-and-fiscal-year-2025-results.html, https://www.ringcentral.com/features/local-numbers/area-code-732-848.html
 * Usage count: 3x
 */
export interface Nav1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav1Variants {}

export const Nav1 = React.forwardRef<HTMLDivElement, Nav1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav1.displayName = "Nav1";
