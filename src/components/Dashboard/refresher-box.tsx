import React, { ReactNode } from "react";
import styles from "./index.module.css";

export const RefresherBox: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={styles.refresherBox}>{children}</div>;
};
