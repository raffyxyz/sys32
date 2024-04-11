import React from "react";
import { BannerCard } from "./banner-card";
import styles from "./index.module.css";

export const QueueBanner = () => {
  return (
    <div className={styles.queueBanner}>
      <BannerCard emoji="⏳" title="Ongoing Service" value="20" />
      <BannerCard emoji="✅" title="Completed Service" value="140" />
      <BannerCard emoji="🔃" title="Pending Service" value="80" />
    </div>
  );
};
