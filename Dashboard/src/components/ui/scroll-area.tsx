import * as React from "react";
import { cn } from "../../lib/utils";
import { ScrollArea as ScrollAreaPrimitive, Scrollbar as ScrollAreaPrimitiveScrollbar } from "@radix-ui/react-scroll-area";

// Define ScrollBar if it's missing
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitiveScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitiveScrollbar>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitiveScrollbar ref={ref} className={cn("bg-gray-200", className)} {...props} />
));

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollBar />
    {/* Rest of your code here */}
  </ScrollAreaPrimitive>
));
// ../ui/scroll-area.tsx
export default ScrollArea;