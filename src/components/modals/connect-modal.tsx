"use client";

import Image from "next/image";
import Link from "next/link";
import { m as motion } from "framer-motion";
import { useGlobalContext } from "@/contexts/global-context";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CalendarIcon from "../../../public/icons/calender-icon.png";
import MailIcon from "../../../public/icons/mail-icon.png";
import FormIcon from "../../../public/icons/form-icon.png";
import CallIcon from "../../../public/icons/call-icon.png";

const optionClass = "flex min-h-16 w-full items-center gap-3 rounded-xl border border-surface-border bg-surface-card px-4 py-4 text-sm font-medium text-surface-heading transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function ConnectModal() {
  const { isConnectModalOpen, closeConnectModal, connectSurface, connectReturnFocus } = useGlobalContext();
  return (
    <Dialog open={isConnectModalOpen} onOpenChange={(open) => { if (!open) closeConnectModal(); }}>
      <DialogContent data-lenis-prevent data-surface={connectSurface}
        className={`surface-${connectSurface} max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-surface-border bg-surface p-6 text-surface-heading shadow-2xl sm:max-w-[30rem] sm:p-8`}
        onCloseAutoFocus={(event) => {
          const opener = connectReturnFocus.current;
          if (opener?.isConnected) { event.preventDefault(); opener.focus(); }
        }}>
        <DialogHeader className="gap-3 pr-4">
          <DialogTitle className="font-heading text-2xl font-semibold leading-tight text-surface-heading">Start a Conversation</DialogTitle>
          <DialogDescription className="font-body text-sm leading-6 text-surface-foreground">Tell us what you’re working on. Let’s find the right next step.</DialogDescription>
        </DialogHeader>
        <div className="mt-3 flex flex-col gap-3 font-body">
          <button type="button" disabled className={`${optionClass} cursor-not-allowed opacity-55`}>
            <Image src={CalendarIcon} alt="" width={28} height={28} />
            <span className="flex-1 text-left">Schedule Consultation</span><span className="text-xs text-surface-foreground">Coming soon</span>
          </button>
          <div className="grid gap-3 sm:grid-cols-2">
            <motion.a href="mailto:techsaws.core@gmail.com" className={optionClass} whileHover={{ scale: 1.015 }} whileTap={{ scale: .99 }}>
              <Image src={MailIcon} alt="" width={26} height={26} />Send an Email
            </motion.a>
            <button type="button" disabled className={`${optionClass} cursor-not-allowed opacity-55`}>
              <Image src={CallIcon} alt="" width={26} height={26} /><span>Talk on Call<span className="mt-1 block text-xs text-surface-foreground">Coming soon</span></span>
            </button>
          </div>
          <button type="button" disabled className={`${optionClass} cursor-not-allowed opacity-55`}>
            <Image src={FormIcon} alt="" width={28} height={28} /><span className="flex-1 text-left">Fill a Form</span><span className="text-xs text-surface-foreground">Coming soon</span>
          </button>
          <Link href="/connect" onClick={closeConnectModal} className="mt-1 text-center text-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary">Visit our contact page</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}