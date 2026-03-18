import { cva, type VariantProps } from "class-variance-authority";

/**
 * Footer1 Variants
 * Extracted from: https://www.ringcentral.com/us/en/blog/cold-calling-scripts-7-examples, https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases, https://www.ringcentral.com/us/en/blog/how-do-i-listen-to-my-voicemail
 * Usage count: 3x
 */
export const footer1Variants = cva(
  // Base styles observed
  "footer",
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

export type Footer1Variants = VariantProps<typeof footer1Variants>;
