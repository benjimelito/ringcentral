import * as React from "react";
import { cn } from "@/lib/utils";
import { card2Variants, type Card2Variants } from "./variants";

/**
 * Card2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="ytp-chrome-top ytp-show-cards-title" data-layer="1"><div class="ytp-title-channel"><div class="ytp-title-beacon"></div>
 * 
 * Observed on: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export interface Card2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card2Variants {}

export const Card2 = React.forwardRef<HTMLDivElement, Card2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card2.displayName = "Card2";
