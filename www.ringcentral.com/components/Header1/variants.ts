import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header1 Variants
 * Extracted from: https://www.ringcentral.com
 * Usage count: 1x
 */
export const header1Variants = cva(
  // Base styles observed
  "root parsys CID-parsys-1e792177 IID-parsys-4a87f5b8",
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

export type Header1Variants = VariantProps<typeof header1Variants>;
