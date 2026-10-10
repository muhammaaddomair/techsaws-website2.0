type Symbol = "agents" | "support" | "crm" | "knowledge";

export default function SolutionSymbol({ symbol }: { symbol: Symbol }) {
  return (
    <svg viewBox="0 0 160 160" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      {symbol === "agents" && <>
        <path d="M80 18L132 70L80 122L28 70Z M58 48H102V92H58Z M80 28V48M80 92V112M38 70H58M102 70H122" />
        <path d="M50 126L80 146L110 126M66 64L77 75L96 57" />
      </>}
      {symbol === "support" && <>
        <path d="M30 40H130V106H88L58 132V106H30Z M52 61H108M52 80H88" />
        <path d="M19 26L30 15M130 15L141 26M17 113L28 124M133 113L144 102" />
      </>}
      {symbol === "crm" && <>
        <path d="M80 14L105 39L80 64L55 39Z M39 76L64 101L39 126L14 101Z M121 76L146 101L121 126L96 101Z M80 64V78M64 101H96M80 78L57 96M80 78L103 96M80 106V146M63 129L80 146L97 129" />
      </>}
      {symbol === "knowledge" && <>
        <path d="M80 21L132 47L80 73L28 47Z M28 70L80 96L132 70M28 94L80 120L132 94M80 73V120" />
        <path d="M61 137H99M70 149H90M80 7V12" />
      </>}
    </svg>
  );
}
