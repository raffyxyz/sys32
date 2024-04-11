import React from "react";
import { Input } from "../Common/Input";
import { Select, Option } from "../Common/Select";
import { SearchIcon } from "../Icons/SearchIcon";

import styles from "./index.module.css";

export const QueueListControl = () => {
  return (
    <div className={styles.queueListControl}>
      <Input icon={<SearchIcon />} placeholder="Search" />
      <div className={styles.filterWrapper}>
        <Select className="w-full max-w-xs" defaultValue="default">
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
