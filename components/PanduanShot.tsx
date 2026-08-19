import Image from "next/image";
import { PANDUAN_IMAGE_DIMENSIONS } from "@/lib/panduan-images";
import styles from "./PanduanShot.module.css";

interface PanduanShotProps {
  /** Filename only, e.g. "01-sidebar-dashboard.jpg" — resolved against /assets/panduan/. */
  src: string;
  alt: string;
  /** Defaults to `alt` when omitted, matching the source docs (figcaption always mirrors alt there). */
  caption?: string;
  /** Optional note rendered below the caption in amber text (.shot-note in the source). */
  note?: string;
}

export default function PanduanShot({ src, alt, caption, note }: PanduanShotProps) {
  const dimensions = PANDUAN_IMAGE_DIMENSIONS[src] ?? { width: 1920, height: 910 };

  return (
    <figure className={styles.shot}>
      <Image
        src={`/assets/panduan/${src}`}
        alt={alt}
        title={alt}
        width={dimensions.width}
        height={dimensions.height}
        className={styles.shotImg}
        loading="lazy"
      />
      <figcaption className={styles.shotCaption}>{caption ?? alt}</figcaption>
      {note && <p className={styles.shotNote}>{note}</p>}
    </figure>
  );
}
