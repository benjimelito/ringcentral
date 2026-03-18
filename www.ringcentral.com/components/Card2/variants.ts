import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card2 Variants
 * Extracted from: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export const card2Variants = cva(
  // Base styles observed
  "ytp-chrome-top ytp-show-cards-title",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Card2Variants = VariantProps<typeof card2Variants>;
