import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
export function Spinner({ className, ...props }: ComponentProps<typeof LoaderCircle>) {
  return <LoaderCircle role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />;
}
