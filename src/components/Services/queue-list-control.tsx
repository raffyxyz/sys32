import React from "react";
import { Input } from "../Common/Input";
import { Select, Option } from "../Common/Select";
import { Search } from "lucide-react";

import styles from "./index.module.css";

export const QueueListControl = () => {
  return (
    <div className={styles.queueListControl}>
      <Input
        icon={<Search size={15} className={styles.queueListControlInput} />}
        placeholder="Search"
      />
      <div className={styles.filterWrapper}>
        <Select className={styles.filterWrapperSelect} defaultValue="default">
          <Option disabled value="default">
            Filter by status
          </Option>
          <Option>Ongoing</Option>
          <Option>Completed</Option>
          <Option>Pending</Option>
        </Select>
      </div>
    </div>
  );
};
