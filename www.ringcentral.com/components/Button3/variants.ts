import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button3 Variants
 * Extracted from: https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-fourth-quarter-and-fiscal-year-2025-results.html, https://www.ringcentral.com/features/local-numbers/area-code-732-848.html
 * Usage count: 2x
 */
export const button3Variants = cva(
  // Base styles observed
  "login__dropdown-close-btn",
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

export type Button3Variants = VariantProps<typeof button3Variants>;
