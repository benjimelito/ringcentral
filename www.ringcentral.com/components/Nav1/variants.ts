import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav1 Variants
 * Extracted from: https://www.ringcentral.com, https://www.ringcentral.com/whyringcentral/company/pressreleases/ringcentral-announces-fourth-quarter-and-fiscal-year-2025-results.html, https://www.ringcentral.com/features/local-numbers/area-code-732-848.html
 * Usage count: 3x
 */
export const nav1Variants = cva(
  // Base styles observed
  "anchor-element CID-anchor-element-c02c863f IID-anchor-element-b933cc36",
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

export type Nav1Variants = VariantProps<typeof nav1Variants>;
