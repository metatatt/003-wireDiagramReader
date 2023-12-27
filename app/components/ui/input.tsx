import * as React from "react";
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

import { cn } from "./lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {}

const Input = React.forwardRef<HTMLSelectElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const p1 ="What is the nature of the image? Please limit response to 30 words.";
    const p2="List 3 use cases for the wiring diagram depicted in the image."
    const p3="Is there incorporation of feedback loops and protective circuits in the depicted system?"
    const p4="What safety features are incorporated into the system in the image to prevent faults, overloads and or other issues?"

    return (
      <select
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      <option value={""} disabled>
              --upload diagram and select a topic--
      </option>
      <option value={p1}>1. about the diagram</option>
      <option value={p2}>2. use of the diagram</option>
      <option value={p3}>3. main design flow</option>
      <option value={p4}>4. safety design</option>
    </select>
    );
  },
);
Input.displayName = "Input";

export { Input };
