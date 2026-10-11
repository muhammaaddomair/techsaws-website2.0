import { Target, PanelsTopLeft, Workflow, ChartNoAxesCombined, Code2, AppWindow, Network, Wrench, ScanSearch, LockKeyhole, ShieldCheck, ClipboardCheck } from "lucide-react";

const symbols = {
  growth: [Target, PanelsTopLeft, Workflow, ChartNoAxesCombined],
  software: [Code2, AppWindow, Network, Wrench],
  cybersecurity: [ScanSearch, LockKeyhole, ShieldCheck, ClipboardCheck],
};

export default function ServiceSolutionSymbol({ service, index }: { service: keyof typeof symbols; index: number }) {
  const Icon = symbols[service][index];
  return <Icon width="100%" height="100%" strokeWidth={1} strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true" />;
}
