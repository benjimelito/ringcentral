import * as React from "react";
import { cn } from "@/lib/utils";
import { button1Variants, type Button1Variants } from "./variants";

/**
 * Button1
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="cta-v2__el cta-v2__el--type--carousel-close " id="IID-cta-v2-8eb3f616-el" data-active-dl-name="" tabindex="0" title="Close dialog" data-dl-element="button" data-dl-name="">
		<span clas
 * 
 * Observed on: https://www.ringcentral.com
 * Usage count: 1x
 */
export interface Button1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button1Variants {}

export const Button1 = React.forwardRef<HTMLDivElement, Button1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button1.displayName = "Button1";
