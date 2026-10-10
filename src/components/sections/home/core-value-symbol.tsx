type SymbolName = "efficiency" | "revenue" | "growth" | "protection";

// Matte, hand-drawn geometric marks stay sharp at every screen size.
const symbolPaths: Record<SymbolName, string[]> = {
  efficiency: ["M100 28 164 91 101 151 38 91Z", "M31 54 63 86M139 86 173 53", "M34 131 64 101M138 101 168 132", "M69 178 101 147 132 179M78 190 102 167 125 190"],
  revenue: ["M101 23 99 179", "M62 49 101 91 140 48", "M40 127 101 63 162 127Z", "M61 166 100 127 141 167", "M82 188 100 169 119 189"],
  growth: ["M100 24 166 103 100 185 35 103Z", "M75 82 126 83 124 126 75 124Z", "M101 60 99 96M100 112 101 147", "M53 103 68 103M133 102 148 102"],
  protection: ["M100 33 155 56 151 114Q143 151 100 176Q59 151 49 115L46 57Z", "M76 99 94 117 127 81", "M31 46 44 32 60 42M144 41 157 31 171 46", "M64 175 53 189M138 175 149 190"],
};

export default function CoreValueSymbol({ symbol }: { symbol: SymbolName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 210" fill="none" className="h-full w-full">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round">
        {symbolPaths[symbol].map((path, index) => <path key={index} d={path} />)}
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.24" transform="translate(3 -2)">
        {symbolPaths[symbol].map((path, index) => <path key={index} d={path} />)}
      </g>
    </svg>
  );
}
