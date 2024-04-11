import React from "react";
import { QueueList } from "./queue-list";
import styles from "./index.module.css";

export const QueueService = () => {
  return (
    <div className={styles.queueService}>
      <QueueList />
    </div>
  );
};
