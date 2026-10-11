import styles from "./process-step-visual.module.css";

type Kind = "assembly" | "funnel" | "defense" | "radar" | "release";

export default function ProcessStepVisual({ kind, labels }: { kind: Kind; labels: readonly string[] }) {
  return <div className={styles.visual}>
    <svg viewBox="0 0 360 150" fill="none" className={styles[kind]}>
      {kind === "assembly" && <>
        <path className={styles.connection} d="M25 78H335" /><circle className={styles.packet} r="4" /><rect className={styles.frame} x="112" y="28" width="136" height="100" rx="12" />
        {[0, 1, 2].map(i => <g key={i} className={styles.module} style={{ animationDelay: `${i * .8}s` }}><rect x={126 + i * 36} y="64" width="28" height="28" rx="5" /><path d={`M${133 + i * 36} 78l5 5 9-10`} /></g>)}
      </>}
      {kind === "funnel" && <>
        <path className={styles.connection} d="M65 76H295" />
        <circle className={styles.pipelinePacket} r="4" />
        {[0, 1, 2].map(i => <g key={i} className={styles.pipelineStage} style={{ animationDelay: `${i * .8}s` }}>
          <rect className={styles.frame} x={25 + i * 115} y="43" width="80" height="66" rx="10" />
          {i === 0 ? <><circle cx="65" cy="65" r="8" /><path d="M49 91c0-18 32-18 32 0" /></> : i === 1 ? <><path d="M161 62h23m-23 13h23m-23 13h15" /><circle cx="151" cy="62" r="2" /></> : <><path d="M278 76l8 8 16-19" /><circle cx="290" cy="76" r="23" /></>}
        </g>)}
      </>}
      {kind === "defense" && <>
        <path className={styles.shield} d="M180 20l50 20v33c0 28-22 46-50 59-28-13-50-31-50-59V40Z" />
        <rect className={styles.lockBody} x="163" y="67" width="34" height="30" rx="5" />
        <path className={styles.lockShackle} d="M170 67V55a10 10 0 0 1 20 0v12" />
        <path d="M180 79v7" />
        {[0, 1, 2].map(i => <g key={i} className={styles.patch} style={{ animationDelay: `${i * .8}s` }}><rect className={styles.frame} x={i === 1 ? 272 : 44} y={i === 2 ? 96 : 35} width="44" height="28" rx="6" /><path d={i === 1 ? "M282 48l6 6 10-12" : `M54 ${i === 2 ? 109 : 48}l6 6 10-12`} /></g>)}
        <path className={styles.connection} d="M88 49H130M230 49H272M88 110H141" />
      </>}
      {kind === "radar" && <>
        <rect className={styles.frame} x="45" y="18" width="270" height="119" rx="10" />
        <path className={styles.connection} d="M45 40H315" />
        <circle className={styles.ping} cx="60" cy="29" r="3" />
        <path className={styles.healthTrace} d="M65 94h35l12-22 16 39 16-55 17 38h32l13-17 13 17h75" />
        {[0, 1, 2].map(i => <g key={i} className={styles.verification} style={{ animationDelay: `${i * 1}s` }}><path d={`M${78+i*84} 120l4 4 8-9`} /><path className={styles.connection} d={`M${96+i*84} 120h32`} /></g>)}
      </>}
      {kind === "release" && <>
        <rect className={styles.frame} x="65" y="23" width="230" height="110" rx="10" />
        <path className={styles.connection} d="M65 45H295" />
        <path className={styles.upload} d="M180 112V62m-17 18 17-18 17 18" />
        <path className={styles.confirm} d="M242 92l9 9 18-23" />
        <circle className={styles.ping} cx="82" cy="34" r="3" />
      </>}
    </svg>
    <div className={styles.labels}>{labels.slice(0, 3).map(label => <span key={label}>{label}</span>)}</div>
    <p>{labels[3]}</p>
  </div>;
}
