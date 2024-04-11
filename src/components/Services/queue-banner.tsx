import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import { Input } from "../Common/Input";
import { Option, Select } from "../Common/Select";
import { BannerCard } from "./banner-card";
import styles from "./index.module.css";

export const QueueBanner = () => {
  return (
    <React.Fragment>
      <div className={styles.queueBanner}>
        <BannerCard emoji="⏳" title="Ongoing Service" value="20" />
        <BannerCard emoji="✅" title="Completed Service" value="140" />
        <BannerCard emoji="🔃" title="Pending Service" value="80" />
      </div>
      <div className="flex md:hidden justify-between items-center mt-4">
        <Input
          className="w-12 sm:w-24"
          icon={<SearchIcon />}
          placeholder="Search"
        />
        <div className="flex space-x-2">
          <Select defaultValue="default">
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
