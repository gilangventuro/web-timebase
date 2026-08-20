import { MessageCircle } from "lucide-react";
import { CONTACT_WA_LINK, SITE_NAME } from "@/lib/site";
import styles from "./WhatsAppFloatingButton.module.css";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={CONTACT_WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      title={`Hubungi ${SITE_NAME} via WhatsApp — konsultasi gratis`}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <MessageCircle size={20} strokeWidth={2.25} />
      </span>
      <span className={styles.textWrap}>
        <span className={styles.textMain}>Hubungi Kami !!</span>
        <span className={styles.textSub}>Konsultasi 100% Gratis</span>
      </span>
    </a>
  );
}
