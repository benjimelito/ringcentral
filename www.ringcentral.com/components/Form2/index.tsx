import * as React from "react";
import { cn } from "@/lib/utils";
import { form2Variants, type Form2Variants } from "./variants";

/**
 * Form2
 * 
 * Extracted from source site.
 * Original structure:
 * <form class="" data-event-init="true" novalidate="" data-js-form="">
					<div class="rc-subscribe__row">
						<input name="email" placeholder="Email address *" title="Must be valid email. example@yo
 * 
 * Observed on: https://www.ringcentral.com/us/en/blog/cold-calling-scripts-7-examples, https://www.ringcentral.com/us/en/blog/top-14-virtual-event-ideas-and-use-cases, https://www.ringcentral.com/us/en/blog/how-do-i-listen-to-my-voicemail
 * Usage count: 3x
 */
export interface Form2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form2Variants {}

export const Form2 = React.forwardRef<HTMLDivElement, Form2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form2.displayName = "Form2";
