import * as React from "react";
import { cn } from "@/lib/utils";
import { table1Variants, type Table1Variants } from "./variants";

/**
 * Table1
 * 
 * Extracted from source site.
 * Original structure:
 * <table>
<tbody>
<tr>
<td style="text-align: center;"><b>During playback</b></td>
<td style="text-align: center;"><b>After playback</b></td>
</tr>
<tr>
<td style="text-align: center;"><span style="font
 * 
 * Observed on: https://www.ringcentral.com/us/en/blog/how-do-i-listen-to-my-voicemail
 * Usage count: 2x
 */
export interface Table1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Table1Variants {}

export const Table1 = React.forwardRef<HTMLDivElement, Table1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(table1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Table1.displayName = "Table1";
