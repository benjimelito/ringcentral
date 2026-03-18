import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal1 Variants
 * Extracted from: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export const modal1Variants = cva(
  // Base styles observed
  "ytp-mdx-popup-dialog",
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

export type Modal1Variants = VariantProps<typeof modal1Variants>;
