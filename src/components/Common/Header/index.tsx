import React from "react";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.box}>
        <h1 className={styles.title}>OrderUp</h1>
        <div>
          <button className="mx-2">User</button>
          <button className="mx-2">Settings</button>
        </div>
      </div>
    </header>
  );
};
