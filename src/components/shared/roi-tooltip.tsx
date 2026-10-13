import SurfaceTooltip from "@/components/layouts/surface-tooltip";
import tooltipStyles from "@/components/layouts/header.module.css";
import styles from "@/components/sections/home/core-value-section.module.css";

type IconKind = "growth" | "goals" | "plan" | "launch" | "workflow" | "automation" | "shield" | "search";
export default function ROITooltip({ text, icon = "growth", centered = false, surface }: { text: string; icon?: IconKind; centered?: boolean; surface?: "dark" | "light" }) {
  return <SurfaceTooltip inverse surface={surface} className={`${centered ? "left-1/2 -translate-x-1/2" : "left-0"} top-full mt-3 ${tooltipStyles.tooltip} ${styles.roiTooltip}`}><span className={styles.roiIcon} data-icon={icon} aria-hidden="true"><svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    {icon === "shield" && <><path d="M12 1L21 5V12C21 17 17 21 12 23C7 21 3 17 3 12V5Z" /><path d="M7 12L10 15L17 8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>}
    {icon === "search" && <><circle cx="10" cy="10" r="8" /><circle cx="10" cy="10" r="4" fill="#fff" /><path d="M15 15L22 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></>}
    {icon === "workflow" && <><rect x="2" y="2" width="7" height="7" rx="1.5" /><rect x="15" y="15" width="7" height="7" rx="1.5" /><path d="M5.5 9V15Q5.5 18.5 9 18.5H15" fill="none" stroke="currentColor" strokeWidth="3" /></>}
    {icon === "automation" && <><path d="M9 2H15L16 6L20 7L23 12L20 17L16 18L15 22H9L8 18L4 17L1 12L4 7L8 6Z" /><circle cx="12" cy="12" r="4" fill="#fff" /><circle cx="12" cy="12" r="2" /></>}
    {icon === "growth" && <path d="M3 20V14H7V20ZM9 20V10H13V20ZM15 20V6H19V20ZM3 9L13 3H8V1H19V11H17V5L4 12Z" />}
    {icon === "goals" && <><circle cx="12" cy="12" r="10" /><g fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></g></>}
    {icon === "plan" && <><path d="M5 3H19V22H5Z" /><path d="M9 2H15V5H9Z" /><path d="M8 10L10 12L15 8M8 17H16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></>}
    {icon === "launch" && <><path d="M9 15C9 7 15 2 22 2C22 9 17 15 9 15ZM9 9L3 10L2 16L9 15ZM15 15L14 21L8 22L9 15ZM7 17L3 21L7 20Z" /><circle cx="16" cy="8" r="2" fill="#fff" /></>}
  </svg></span><span>{text}</span></SurfaceTooltip>;
}
