import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card1 Variants
 * Extracted from: https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases
 * Usage count: 1x
 */
export const card1Variants = cva(
  // Base styles observed
  "html5-video-player ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color ytp-title-enable-channel-logo ytp-fine-scrubbing-exp ytp-embed ytp-embed-playlist ytp-cards-teaser-dismissible unstarted-mode ytp-hide-controls ytp-large-width-mode",
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

export type Card1Variants = VariantProps<typeof card1Variants>;
