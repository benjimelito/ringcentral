import { cva, type VariantProps } from "class-variance-authority";

/**
 * Form1 Variants
 * Extracted from: https://www.ringcentral.com/us/en/blog/cold-calling-scripts-7-examples, https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases, https://www.ringcentral.com/us/en/blog/how-do-i-listen-to-my-voicemail
 * Usage count: 3x
 */
export const form1Variants = cva(
  // Base styles observed
  "search-overlay__form search-form",
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

export type Form1Variants = VariantProps<typeof form1Variants>;
