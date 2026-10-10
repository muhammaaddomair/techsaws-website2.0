"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useGlobalContext } from "@/contexts/global-context";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href?: string };

export default function ConnectLink({ href = "/connect", onClick, ...props }: Props) {
  const { openConnectModal } = useGlobalContext();
  return <Link {...props} href={href} aria-haspopup="dialog" onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === "_blank") return;
    event.preventDefault();
    openConnectModal(event.currentTarget);
  }} />;
}
