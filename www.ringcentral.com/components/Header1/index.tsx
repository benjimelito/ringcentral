import * as React from "react";
import { cn } from "@/lib/utils";
import { header1Variants, type Header1Variants } from "./variants";

/**
 * Header1
 * 
 * Extracted from source site.
 * Original structure:
 * <header role="banner">
		
			
	
		
			<div class="root parsys CID-parsys-1e792177 IID-parsys-4a87f5b8">



	
	
	
	
		
			<div class="carousel CID-carousel-cd3c47fb IID-carousel-47067add carousel--visi
 * 
 * Observed on: https://www.ringcentral.com
 * Usage count: 1x
 */
export interface Header1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header1Variants {}

export const Header1 = React.forwardRef<HTMLDivElement, Header1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header1.displayName = "Header1";
