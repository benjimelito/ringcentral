import * as React from "react";
import { cn } from "@/lib/utils";
import { card1Variants, type Card1Variants } from "./variants";

/**
 * Card1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="html5-video-player ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color ytp-title-enable-channel-logo ytp-fine-scrubbing-exp ytp-embed ytp-embed-playlist ytp-cards-teaser-
 * 
 * Observed on: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export interface Card1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card1Variants {}

export const Card1 = React.forwardRef<HTMLDivElement, Card1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card1.displayName = "Card1";
