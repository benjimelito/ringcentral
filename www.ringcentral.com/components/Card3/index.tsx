import * as React from "react";
import { cn } from "@/lib/utils";
import { card3Variants, type Card3Variants } from "./variants";

/**
 * Card3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="ytp-cards-button-icon"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-2"></use><path class="ytp-svg-fill" d="m 17,23 h 2 
 * 
 * Observed on: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export interface Card3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card3Variants {}

export const Card3 = React.forwardRef<HTMLDivElement, Card3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card3.displayName = "Card3";
