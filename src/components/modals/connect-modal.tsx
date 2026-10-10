"use client";

import { useEffect, useRef, useState } from "react";
import ConsultationFlow from "./consultation-flow";
import CallFlow from "./call-flow";
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
  const [view, setView] = useState<"options" | "consultation" | "call">("options");
  const scheduleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (view === "options") scheduleRef.current?.focus({ preventScroll: true }); }, [view]);
  function close() { closeConnectModal(); }
  return (
    <Dialog open={isConnectModalOpen} onOpenChange={(open) => { if (!open) close(); }}>
      <DialogContent data-lenis-prevent data-surface={connectSurface}
        className={`surface-${connectSurface} max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-surface-border bg-surface p-6 text-surface-heading shadow-2xl sm:p-8 ${view === "consultation" ? "sm:max-w-[38rem]" : "sm:max-w-[30rem]"}`}
        onCloseAutoFocus={(event) => {
          setView("options");
          const opener = connectReturnFocus.current;
          if (opener?.isConnected) { event.preventDefault(); opener.focus(); }
        }}>
        <DialogHeader className="gap-3 pr-4">
          <DialogTitle className="font-heading text-2xl font-semibold leading-tight text-surface-heading">{view === "consultation" ? "Schedule a Consultation" : view === "call" ? "Talk to Our Team" : "Start a Conversation"}</DialogTitle>
          <DialogDescription className="font-body text-sm leading-6 text-surface-foreground">{view === "consultation" ? "A focused 30-minute conversation about your goals and the right next step." : view === "call" ? "Have a question or a project in mind? Give us a call and talk through your next step." : "Tell us what you are working on. Let us find the right next step."}</DialogDescription>
        </DialogHeader>
        {view === "consultation" ? <ConsultationFlow onBack={() => setView("options")} onClose={close} /> : view === "call" ? <CallFlow onBack={() => setView("options")} onSchedule={() => setView("consultation")} /> : <div className="mt-3 flex flex-col gap-3 font-body">
          <button ref={scheduleRef} type="button" onClick={() => setView("consultation")} className={optionClass}>
            <Image src={CalendarIcon} alt="" width={28} height={28} />
            <span className="flex-1 text-left">Schedule Consultation</span><span className="text-xs text-primary">30 min</span>
          </button>
          <div className="grid gap-3 sm:grid-cols-2">
            <motion.a href="mailto:hello@techsaws.com?subject=Project%20Inquiry%20%E2%80%94%20TechSaws" className={optionClass} whileHover={{ scale: 1.015 }} whileTap={{ scale: .99 }}>
              <Image src={MailIcon} alt="" width={26} height={26} />Send an Email
            </motion.a>
            <button type="button" onClick={() => setView("call")} className={optionClass}>
              <Image src={CallIcon} alt="" width={26} height={26} /><span>Talk on Call</span>
            </button>
          </div>
          <Link href="/connect" onClick={closeConnectModal} className={optionClass}>
            <Image src={FormIcon} alt="" width={28} height={28} /><span className="flex-1 text-left">Fill a Form</span>
          </Link>
          <Link href="/connect" onClick={closeConnectModal} className="mt-1 text-center text-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary">Visit our contact page</Link>
        </div>}
      </DialogContent>
    </Dialog>
  );
}
