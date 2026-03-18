import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button1 Variants
 * Extracted from: https://www.ringcentral.com
 * Usage count: 1x
 */
export const button1Variants = cva(
  // Base styles observed
  "cta-v2__el cta-v2__el--type--carousel-close",
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

export type Button1Variants = VariantProps<typeof button1Variants>;
