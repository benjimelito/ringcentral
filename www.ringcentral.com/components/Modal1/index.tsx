import * as React from "react";
import { cn } from "@/lib/utils";
import { modal1Variants, type Modal1Variants } from "./variants";

/**
 * Modal1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="ytp-mdx-popup-dialog" role="dialog" data-layer="4" style="display: none;">
 * 
 * Observed on: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export interface Modal1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal1Variants {}

export const Modal1 = React.forwardRef<HTMLDivElement, Modal1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal1.displayName = "Modal1";
