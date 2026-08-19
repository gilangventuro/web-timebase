import type { ReactNode } from "react";
import styles from "./PanduanCallout.module.css";

const VARIANT_CLASS = {
  tip: styles.calloutTip,
  warn: styles.calloutWarn,
  lock: styles.calloutLock,
  update: styles.calloutUpdate,
} as const;

interface PanduanCalloutProps {
  variant: keyof typeof VARIANT_CLASS;
  children: ReactNode;
}

export default function PanduanCallout({ variant, children }: PanduanCalloutProps) {
  return <div className={`${styles.callout} ${VARIANT_CLASS[variant]}`}>{children}</div>;
}
