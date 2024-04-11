/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import { Pagination } from "../Common/Pagination";
import { QueueListInfo } from "./queue-list-info";

import { queueListDummy, queueHead } from "@/lib/queue-list";
import { QueueListType } from "@/types/queue-list";
import { filterQueueHead } from "@/util/queue-list";
import styles from "./index.module.css";

export const QueueList = () => {
  const newQueueHead = filterQueueHead(queueHead);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch or update data for the new page
  };

  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-4">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <SearchIcon />
        </label>
        <div className="flex space-x-3">
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Filter by status
            </option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
      </div>
      {/* Desktop View */}
      <DesktopQueueList />

      {/* Mobile View */}
      <MobileQueueList newQueueHead={newQueueHead} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

const DesktopQueueList = () => {
  return (
    <div className={styles.queueListDesktop}>
      <table className={styles.tableDesktop}>
        <thead>
          <tr>
            {queueHead.map((head: string) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {queueListDummy.map((qList: QueueListType) => (
            <QueueListInfo key={qList.serviceName} queueList={qList} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            {queueHead.map((head: string) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const MobileQueueList: React.FC<{ newQueueHead: Array<string> }> = ({
  newQueueHead,
}) => {
  return (
    <div className={styles.queueListMobile}>
      <table className={styles.tableMobile}>
        <thead>
          <tr>
            {newQueueHead.map((head: string) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {queueListDummy.map((qList: QueueListType) => (
            <QueueListInfo key={qList.serviceName} queueList={qList} isMobile />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            {newQueueHead.map((head: string) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
