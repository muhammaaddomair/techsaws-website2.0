"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Check, CircleCheck, Clock3, Globe2, Mail, UserRound, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";
import { useGlobalContext } from "@/contexts/global-context";
import styles from "./consultation-flow.module.css";

const times = ["09:00", "10:00", "11:00", "11:30", "14:00", "16:00"];
const steps = [{ title: "Date & time", icon: CalendarDays }, { title: "Your details", icon: UserRound }, { title: "Complete", icon: CircleCheck }];
function dateValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function dateAfter(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return dateValue(date);
}
function timeLabel(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return new Date(2000, 0, 1, hour, minute).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

export default function ConsultationFlow({ onBack, onClose }: { onBack: () => void; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", company: "", goals: "" });
  const [error, setError] = useState("");
  const [customTime, setCustomTime] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const pendingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { connectSurface } = useGlobalContext();
  useEffect(() => {
    const clock = setInterval(() => setNow(new Date()), 30000);
    return () => { clearInterval(clock); if (pendingTimer.current) clearTimeout(pendingTimer.current); };
  }, []);
  const focusHeading = useCallback((node: HTMLHeadingElement | null) => {
    if (!node) return;
    const dialog = node.closest<HTMLElement>("[role=dialog]");
    if (dialog) dialog.scrollTop = 0;
    node.focus({ preventScroll: true });
  }, []);
  const submittedRef = useRef(false);
  const reduced = useReducedMotion();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const minDate = dateValue(now);
  const maxDate = dateAfter(90);
  const selectedDate = date && time ? new Date(`${date}T${time}:00`) : null;
  const dateLabel = selectedDate?.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const validDate = date >= minDate && date <= maxDate && /^([01]\d|2[0-3]):[0-5]\d$/.test(time) && !!selectedDate && selectedDate.getTime() > now.getTime();


  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!validDate || !selectedDate || !Number.isFinite(selectedDate.getTime())) {
      setError("Choose a future date and a preferred time.");
      setStep(0);
      return;
    }
    if (step === 0) { setStep(1); return; }
    if (step !== 1 || submittedRef.current) return;
    if (!details.name.trim() || !details.email.trim() || details.goals.trim().length < 10) {
      setError("Please add your name, a valid email, and a short description of your project (at least 10 characters).");
      return;
    }
    setStep(2);
  }

  function schedule() {
    if (submittedRef.current || !selectedDate) return;
    if (selectedDate.getTime() <= new Date().getTime()) { setError("Please choose a future appointment time."); setStep(0); return; }
    submittedRef.current = true;
    setScheduling(true);
    const lead = {
      type: "consultation_request", status: "preview_only",
      name: details.name.trim(), email: details.email.trim(), company: details.company.trim(), goals: details.goals.trim(),
      preferredDate: date, preferredTime: time, timezone,
      preferredStartUtc: selectedDate.toISOString(), durationMinutes: 30,
      submittedAt: new Date().toISOString(),
    };
    // Temporary submission adapter. Replace this with a validated server endpoint before launch.
    pendingTimer.current = setTimeout(() => {
      console.info("[TechSaws consultation lead]", lead);
      toast.success(`Consultation preview saved for ${dateLabel} at ${timeLabel(time)} (${timezone}). Booking and email confirmation will be enabled when connected.`, {
        duration: 7000,
        className: `surface-${connectSurface}`,
        style: { background: "var(--surface-card)", color: "var(--surface-heading)", border: "1px solid var(--surface-border)", maxWidth: "380px", fontSize: "14px", lineHeight: "1.6" },
        iconTheme: { primary: "#16a34a", secondary: "#ffffff" },
        icon: <CircleCheck aria-hidden="true" size={30} style={{ color: "#16a34a", flexShrink: 0 }} />,
      });
      onClose();
    }, 1000);
  }

  return <div className={styles.flow}>
    <ol className={styles.progress} aria-label="Consultation progress">
      {steps.map(({ title, icon: Icon }, index) => <li key={title} aria-current={step === index ? "step" : undefined} className={index <= step ? styles.active : undefined}>
        <span className={styles.stepIcon}>{index < step ? <Check aria-hidden="true" size={16} /> : <Icon aria-hidden="true" size={16} />}</span>
        <span>{title}</span>
      </li>)}
    </ol>
    <div className={styles.progressTrack} role="progressbar" aria-label="Consultation steps" aria-valuemin={1} aria-valuemax={3} aria-valuenow={step + 1} aria-valuetext={`Step ${step + 1} of 3: ${steps[step].title}`}>
      <motion.div initial={false} animate={{ width: `${((step + 1) / 3) * 100}%` }} transition={{ duration: reduced ? 0 : .3 }} />
    </div>
    <form onSubmit={submit}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={step} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -5 }} transition={{ duration: reduced ? 0 : .18 }}>
          <h3 ref={focusHeading} tabIndex={-1} className={styles.stepHeading}>{step === 0 ? "Choose a date & time" : step === 1 ? "Tell us a little about you" : "Ready to schedule"}</h3>
          {step === 0 && <>
            <div className={styles.meta}><span><Clock3 size={15} aria-hidden="true" />30 minutes</span><span><Video size={15} aria-hidden="true" />Video consultation</span></div>
            <label className={styles.label} htmlFor="consultation-date">Preferred date</label>
            <div className={styles.quickDates} aria-label="Quick date selection">{[0, 1, 2, 3].map((days) => {
              const value = dateAfter(days);
              const label = days === 0 ? "Today" : days === 1 ? "Tomorrow" : new Date(`${value}T12:00:00`).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
              return <button key={value} type="button" aria-pressed={date === value} onClick={() => { setDate(date === value ? "" : value); setTime(""); setCustomTime(false); setError(""); }}>{label}</button>;
            })}</div>
            <input id="consultation-date" className={styles.input} type="date" required min={minDate} max={maxDate} value={date} onChange={(event) => { setDate(event.target.value); setTime(""); setError(""); }} />
            <fieldset className={styles.times}><legend className={styles.label}>Preferred time</legend>
              <div className={styles.quickDates}>{times.map((slot) => {
                const expired = date === minDate && new Date(`${date}T${slot}:00`).getTime() <= now.getTime();
                return <button key={slot} type="button" disabled={expired} aria-pressed={!customTime && time === slot} onClick={() => { setTime(!customTime && time === slot ? "" : slot); setCustomTime(false); setError(""); }}>{timeLabel(slot)}</button>;
              })}<button type="button" className={styles.customTime} aria-expanded={customTime} aria-controls="custom-consultation-time" onClick={() => { setCustomTime(!customTime); setTime(""); setError(""); }}>Other / custom</button></div>
              {customTime && <label className={styles.label} id="custom-consultation-time">Custom time<input type="time" className={styles.input} required value={time} onChange={(event) => { setTime(event.target.value); setError(""); }} /></label>}
            </fieldset>
            <p className={styles.timezone}><Globe2 size={15} aria-hidden="true" />{timezone.replaceAll("_", " ")} · your local timezone</p>
            <div className={styles.actions}><button type="button" onClick={onBack} className={styles.back}><ArrowLeft size={16} aria-hidden="true" />All contact options</button><Button type="submit" disabled={!validDate} className={styles.primary}>Continue<ArrowRight aria-hidden="true" /></Button></div>
          </>}
          {step === 1 && <>
            <p className={styles.summary}><CalendarDays size={17} aria-hidden="true" /><span>{dateLabel}<br />{timeLabel(time)} · {timezone.replaceAll("_", " ")}</span></p>
            <div className={styles.fields}>
              <label className={styles.label}>Full name<input name="name" autoComplete="name" className={styles.input} required maxLength={100} value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} /></label>
              <label className={styles.label}>Email address<input name="email" autoComplete="email" type="email" className={styles.input} required maxLength={254} value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} /></label>
            </div>
            <label className={styles.label}>Company <span className={styles.optional}>(optional)</span><input name="company" autoComplete="organization" className={styles.input} maxLength={150} value={details.company} onChange={(e) => setDetails({ ...details, company: e.target.value })} /></label>
            <label className={styles.label}>What would you like to discuss?<textarea name="goals" className={styles.input} required minLength={10} maxLength={2000} rows={3} value={details.goals} onChange={(e) => setDetails({ ...details, goals: e.target.value })} /></label>
            <div className={styles.actions}><button type="button" onClick={() => { setStep(0); setError(""); }} className={styles.back}><ArrowLeft size={16} aria-hidden="true" />Change time</button><Button type="submit" className={styles.primary} >Review details<ArrowRight aria-hidden="true" /></Button></div>
          </>}
          {step === 2 && <div className={styles.success}>
            <span className={styles.successIcon}><CircleCheck size={30} aria-hidden="true" /></span>
            <p>Review your preferred appointment and contact details.</p>
            <dl className={styles.receipt}>
              <div><dt><CalendarDays size={18} aria-hidden="true" />Preferred appointment</dt><dd>{dateLabel}<br />{timeLabel(time)} · {timezone.replaceAll("_", " ")} · 30 minutes</dd></div>
              <div><dt><Mail size={18} aria-hidden="true" />Your email</dt><dd>{details.email.trim()}</dd></div>
            </dl>
            <Button type="button" onClick={schedule} disabled={scheduling} aria-busy={scheduling} className={styles.primary}>{scheduling ? <>Scheduling<Spinner /></> : "Schedule Consultation"}</Button>
            <button type="button" disabled={scheduling} className={`${styles.back} underline underline-offset-4`} onClick={() => setStep(1)}>Edit details</button>
          </div>}
          {error && <p className={styles.error} role="alert">{error}</p>}
        </motion.div>
      </AnimatePresence>
    </form>
  </div>;
}
