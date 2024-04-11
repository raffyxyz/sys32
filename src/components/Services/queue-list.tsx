/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
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
