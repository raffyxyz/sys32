import React from "react";
import { Input } from "../Common/Input";
import { Option, Select } from "../Common/Select";
import { BannerCard } from "./banner-card";
import { Search } from "lucide-react";
import styles from "./index.module.css";

export const QueueBanner = () => {
  return (
    <React.Fragment>
      <div className={styles.queueBanner}>
        <BannerCard emoji="⏳" title="Ongoing Service" value="20" />
        <BannerCard emoji="✅" title="Completed Service" value="140" />
        <BannerCard emoji="🔃" title="Pending Service" value="80" />
      </div>
      <div className={styles.queueBannerControl}>
        <Input
          className={styles.queueBannerControlInput}
          icon={<Search size={13} className="opacity-70" />}
          placeholder="Search"
        />
        <div className={styles.queueBannerSelectWrapper}>
          <Select className={styles.queueBannerSelect} defaultValue="default">
            <Option disabled value="default">
              Filter
            </Option>
            <Option>Ongoing</Option>
            <Option>Completed</Option>
            <Option>Pending</Option>
          </Select>
        </div>
      </div>
    </React.Fragment>
  );
};
