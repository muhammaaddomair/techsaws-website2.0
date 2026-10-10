"use client";

import { m as motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SidebarMenuSlide } from "./sidebar-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SidebarNavData } from "@/data/layout-data";


import { cn } from "@/lib/utils";

import { ArrowRight, ChevronRight, X } from "lucide-react";
import ArrowRightDoodleIcon from "../../../../public/icons/arrow-right-doodle-icon.png";
import Logo from "../../../../public/favicons/logo.png";

interface SidebarProps {
  onClose: () => void;
  onConnect: () => void;
}

export default function Sidebar({ onClose, onConnect }: SidebarProps) {
  const pathname = usePathname();

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusable = () => Array.from(panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]',
    ) ?? []).filter((element) => element.getClientRects().length > 0);
    focusable()[0]?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      previousFocus?.focus();
    };
  }, [onClose]);

  const handleGetStarted = () => {
    onConnect();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-90 bg-black/50 backdrop-blur-md"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        variants={SidebarMenuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="surface-dark font-body h-dvh w-[88%] max-w-105 z-100 fixed right-0 top-0 text-surface-heading"
      >
        <div className="h-full w-full px-4 py-6 flex flex-col">
          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex items-center ml-2">
              <Image src={Logo} alt="TechSaws" sizes="52px" className="w-auto h-13" />
            </div>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={onClose}
              className="flex items-center justify-center rounded-lg bg-card min-h-11 min-w-11 p-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              <X strokeWidth={2.5} className="w-5 h-5 text-heading" />
            </button>
          </div>

          <div data-lenis-prevent className="mobile-navigation-scroll border-y border-surface-border py-4 flex-1 min-h-0 overflow-y-auto overscroll-contain">
            <Accordion
              type="single"
              collapsible
              defaultValue={
                pathname.startsWith("/services") ? "services" : undefined
              }
              className="space-y-2"
            >
              {SidebarNavData.map((item, index) => {
                if (item.isAccordian && item.subCategory) {
                  const servicesActive = pathname.startsWith("/services");

                  return (
                    <AccordionItem
                      key={index}
                      value="services"
                      className="border-none"
                    >
                      <AccordionTrigger className="rounded-xl px-4 py-4 hover:no-underline">
                        <div className="flex items-center gap-3">
                          {servicesActive ? (
                            <motion.div
                              animate={{
                                x: [0, 8, 0],
                                rotate: [-4, 4, -4],
                              }}
                              transition={{
                                duration: 2,
                                repeat: 0,
                              }}
                            >
                              <Image
                                src={ArrowRightDoodleIcon}
                                alt=""
                                className="w-12 h-auto invert mr-2"
                              />
                            </motion.div>
                          ) : (
                            <ChevronRight
                              strokeWidth={2.5}
                              className="w-4 h-4 text-surface-foreground -translate-y-px"
                            />
                          )}

                          <span className="text-lg font-medium text-surface-heading">
                            {item.title}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-2 pb-0 [&_a]:no-underline [&_a]:hover:text-surface-heading">
                        <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                          {item.subCategory.map((service) => {
                            const active = pathname === service.path;

                            return (
                              <Link
                                key={service.path}
                                href={service.path}
                                onClick={onClose}
                                className={cn(
                                  "*:group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300",
                                  active ? "bg-white/10" : "hover:bg-white/5",
                                )}
                              >
                                {active ? (
                                  <motion.div
                                    animate={{
                                      x: [0, 8, 0],
                                      rotate: [-4, 4, -4],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: 0,
                                    }}
                                  >
                                    <Image
                                      src={ArrowRightDoodleIcon}
                                      alt=""
                                      className="w-7 h-auto invert mr-2"
                                    />
                                  </motion.div>
                                ) : (
                                  <ChevronRight
                                    strokeWidth={2.5}
                                    className={cn(
                                      "h-4 w-4 -translate-y-px",
                                      active
                                        ? "text-surface-heading"
                                        : "text-surface-foreground",
                                    )}
                                  />
                                )}

                                <span
                                  className={cn(
                                    "text-sm leading-relaxed",
                                    active
                                      ? "text-surface-heading"
                                      : "text-surface-foreground",
                                  )}
                                >
                                  {service.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                const active = pathname === item.path;

                return (
                  <Link
                    key={index}
                    href={item.path!}
                    onClick={onClose}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-4 transition-all duration-300 ${
                      active ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    {active ? (
                      <motion.div
                        animate={{
                          x: [0, 8, 0],
                          rotate: [-4, 4, -4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: 0,
                        }}
                      >
                        <Image
                          src={ArrowRightDoodleIcon}
                          alt=""
                          className="w-12 h-auto invert mr-2"
                        />
                      </motion.div>
                    ) : (
                      <ChevronRight
                        strokeWidth={2.5}
                        className={cn(
                          "w-4 h-4 -translate-y-px",
                          active ? "text-surface-heading" : "text-surface-foreground",
                        )}
                      />
                    )}

                    <span
                      className={cn(
                        "text-lg",
                        active
                          ? "font-medium text-surface-heading"
                          : "text-surface-foreground",
                      )}
                    >
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </Accordion>
          </div>

          <div className="w-full mt-6 flex items-center justify-end">
            <Link
              href="/connect"
              aria-haspopup="dialog"
              onClick={(event) => {
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                handleGetStarted();
              }}
              className="flex items-center gap-3 rounded-lg bg-card px-4 py-3.5 text-base font-body font-bold text-heading transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Get Started
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-dark-background text-dth-heading">
                <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
