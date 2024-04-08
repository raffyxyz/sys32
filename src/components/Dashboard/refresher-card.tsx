import React from "react";
import { Card, CardBody } from "../Common/Card";
import styles from "./index.module.css";

interface RefresherCardProps {
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const RefresherCard: React.FC<RefresherCardProps> = ({
  icon,
  title,
  subTitle,
}) => {
  return (
    <Card className={styles.refresherCard} shadow="default">
      <CardBody>
        <div className={styles.refresherCardWrapper}>
          <div className={styles.refresherCardIcon}>{icon}</div>
          <div>
            <h2>{title}</h2>
            <h1 className={styles.refresherCardSubTitle}>{subTitle}</h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
