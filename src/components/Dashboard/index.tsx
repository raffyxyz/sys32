import React, { ReactNode } from "react";
import { RefresherBox } from "./refresher-box";
import { RefresherCard } from "./refresher-card";
import styles from "./index.module.css";

const Dashboard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export { Dashboard, RefresherBox, RefresherCard };
