/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Pagination } from "../Common/Pagination";
import { QueueListInfo } from "./queue-list-info";
import { QueueListControl } from "./queue-list-control";

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
      {/* List Controls */}
      <QueueListControl />

      {/* Desktop View */}
      <DesktopQueueList />

      {/* Mobile View */}
      <MobileQueueList newQueueHead={newQueueHead} />

      {/* Pagination */}
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
              <th key={head} className={`${head === "Fee" ? "hidden" : ""}`}>
                {head}
              </th>
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
              <th key={head} className={`${head === "Fee" ? "hidden" : ""}`}>
                {head}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
