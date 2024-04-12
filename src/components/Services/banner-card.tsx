import React from "react";
import { Card, CardBody, CardTitle } from "../Common/Card";

import styles from "./index.module.css";

type BannerCardProps = {
  emoji: string;
  title: string;
  value: string | number;
};

export const BannerCard: React.FC<BannerCardProps> = ({
  emoji,
  title,
  value,
}) => {
  return (
    <Card className={styles.bannerCard}>
      <CardBody>
        <CardTitle className={styles.bannerTitle}>
          <div className={styles.emojiWrapper}>
            <span className={styles.emoji}>{emoji}</span>
          </div>
          <div className={styles.textWrapper}>
            <h4>{title}</h4>
            <h1 className={styles.textValue}>{value}</h1>
          </div>
        </CardTitle>
      </CardBody>
    </Card>
  );
};
