"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import { HeaderNavData } from "@/data/layout-data";
import { useGlobalContext } from "@/contexts/global-context";
import { useHeaderSurface } from "@/hooks/use-header-surface";

import dynamic from "next/dynamic";
import SurfaceTooltip from "./surface-tooltip";
import { ServicesDropdown } from "./services-dropdown";

import ConnectLink from "@/components/shared/connect-link";

import Logo from "../../../public/favicons/logo.png";

const Sidebar = dynamic(() => import("./sidebar/sidebar"));

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pendingConnect = useRef(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const { openConnectModal } = useGlobalContext();
  const { headerRef, surface } = useHeaderSurface();
  const isLight = surface === "light";
  const glassClass = isLight ? "bg-dark-glass" : "bg-glass";

  const logo = (
    <span className="header-logo">
      <Image
        src={Logo}
        alt="TechSaws"
        sizes="(min-width: 1024px) 64px, 56px"
        className="header-logo-image translate-x-0 translate-y-[6%]"
      />
    </span>
  );

  const pathname = usePathname();

  useEffect(() => {
    if (!sidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  return (
    <>
      <header ref={headerRef} data-surface={surface} className={`site-header surface-${surface} fixed top-0 w-full z-50 flex items-center justify-center`}>
        <div className="py-6 w-full page-layout flex items-center justify-between max-lg:hidden">
          <Link
            href="/"
            aria-label="TechSaws home"
            className={`${glassClass} header-glass rounded-full h-21 w-21 flex items-center justify-center hover:scale-105`}
          >
            {logo}
          </Link>

          <nav aria-label="Main navigation" className={`${glassClass} header-glass flex items-center gap-1 rounded-lg pl-2 pr-1.5 py-2`}>
            {HeaderNavData.map((item, index) => {
              if (item.isSubCategory) {
                return <ServicesDropdown key={index} item={item} glassClass={glassClass} />;
              }

              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className="relative rounded-xl px-3.5 py-3 text-sm font-medium font-body text-surface-heading transition-colors duration-300 after:absolute after:left-3.5 after:right-3.5 after:bottom-2 after:h-0.5 after:rounded-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute left-3.5 right-3.5 bottom-2 h-px bg-primary" />
                  )}
                </Link>
              );
            })}

            <ConnectLink
              className="group relative ml-3 flex items-center gap-3 rounded-lg bg-black px-4 py-3.5 text-sm font-body font-light text-white transition-transform duration-300 hover:scale-[1.02] tracking-wide"
            >
              Get Started
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={12} />
              </div>
              <SurfaceTooltip className="right-0 top-full mt-5">
                Have a project in mind?
              </SurfaceTooltip>
            </ConnectLink>
          </nav>
        </div>

        <div className="py-6 w-full page-layout lg:hidden">
          <div className={`${glassClass} header-glass flex h-18 items-center justify-between gap-4 rounded-full px-4 sm:px-4`}>
            <Link href="/" aria-label="TechSaws home" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              {logo}
            </Link>

            <button
              type="button"
              ref={menuButton}
              aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={sidebarOpen}
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <Menu strokeWidth={2.25} className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait" onExitComplete={() => {
        if (pendingConnect.current) {
          pendingConnect.current = false;
          openConnectModal(menuButton.current ?? undefined);
        }
      }}>
        {sidebarOpen && <Sidebar onClose={closeSidebar} onConnect={() => { pendingConnect.current = true; closeSidebar(); }} />}
      </AnimatePresence>
    </>
  );
}
