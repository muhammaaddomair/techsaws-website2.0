"use client";

import { useEffect, useRef } from "react";
import { LottieState, useLottieSvg } from "lottie-react";
import SurfaceTooltip from "./surface-tooltip";

import RobotAnimation from "../../../public/animations/robot.json";
import { useGlobalContext } from "@/contexts/global-context";

export default function StickyRobot() {
  const { openConnectModal } = useGlobalContext();
  const initialized = useRef(false);
  const lottie = useLottieSvg({
    src: RobotAnimation,
    loop: true,
    autoplay: false,
    rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
  });
  const { play, pause, state, setDisplayRef } = lottie;
  const unavailable = state === LottieState.loading || state === LottieState.error;

  useEffect(() => {
    if (unavailable || initialized.current) return;
    initialized.current = true;
    if (!document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) play();
  }, [unavailable, play]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (preference.matches || document.hidden) pause();
      else play();
    };
    preference.addEventListener("change", onChange);
    document.addEventListener("visibilitychange", onChange);
    return () => {
      preference.removeEventListener("change", onChange);
      document.removeEventListener("visibilitychange", onChange);
    };
  }, [pause, play]);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-1 md:bottom-9 md:right-8">
      <button
        type="button"
        onClick={openConnectModal}
        aria-label="Start a conversation"
        className="group relative select-none rounded-full transition-transform duration-300 hover:scale-105 motion-reduce:transform-none"
      >
        <div ref={setDisplayRef} aria-hidden="true" className="h-18 w-18 md:h-24 md:w-24" />
        <SurfaceTooltip className="right-0 bottom-full mb-1">
          Let&apos;s talk
        </SurfaceTooltip>
      </button>
    </div>
  );
}
