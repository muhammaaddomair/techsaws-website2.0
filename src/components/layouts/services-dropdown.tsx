"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { HeaderNavItem } from "@/data/layout-data";

import { ChevronDown } from "lucide-react";
import ArrowRightDoodleIcon from "../../../public/icons/arrow-right-doodle-icon.png";

export function ServicesDropdown({ item, glassClass = "bg-glass" }: { item: HeaderNavItem; glassClass?: string }) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hoverOpen || pinned;
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!pinned) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPinned(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [pinned]);

  if (!item.subCategory) return null;

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHoverOpen(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setHoverOpen(false); }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPinned(false);
          setHoverOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setPinned(false);
          setHoverOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setPinned((p) => !p)}
        aria-expanded={open}
        aria-controls={panelId}
        className="relative rounded-xl px-3.5 py-3 text-sm font-medium font-body text-surface-heading transition-colors duration-300 flex items-center gap-1 cursor-pointer hover:bg-white/5"
      >
        {item.title}
        <ChevronDown
          strokeWidth={2.5}
          className={`h-auto w-4 translate-y-px transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 4 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 w-[min(40rem,calc(100vw-3rem))] translate-x-[-58%] pt-5"
          >
            <div
              className={`${glassClass} header-glass rounded-lg p-3`}
              style={{
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                {item.subCategory.map((service) => {
                  const BeforeIcon = service.beforeIcon;
                  const AfterIcon = service.afterIcon;
                  return (
                    <Link
                      key={service.title}
                      href={service.path}
                      onClick={() => {
                        setPinned(false);
                        setHoverOpen(false);
                      }}
                      className="surface-light group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-colors duration-300 hover:border-primary/20 hover:bg-background focus-visible:border-primary/30 focus-visible:bg-background"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/30 text-accent border-2 border-accent mr-4">
                            <BeforeIcon size={20} />
                          </div>

                          <Image
                            src={ArrowRightDoodleIcon}
                            alt=""
                            className="h-4 w-auto"
                          />

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/30 text-primary border-2 border-primary transition-transform duration-300 group-hover:scale-110 ml-4">
                            <AfterIcon size={20} />
                          </div>
                        </div>

                        <h4 className="mb-2 text-base font-semibold font-heading text-heading">
                          {service.title}
                        </h4>
                        <p className="font-body text-sm leading-relaxed text-foreground">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
