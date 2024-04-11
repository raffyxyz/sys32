/* eslint-disable @next/next/no-img-element */
import React from "react";
import { QueueListType } from "@/types/queue-list";

export const QueueListInfo: React.FC<{
  queueList: QueueListType;
  isMobile?: boolean;
}> = ({ queueList, isMobile = false }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar hidden md:block">
            <div className="mask mask-squircle w-12 h-12">
              <img src={queueList.avatar} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{queueList.name}</div>
            <div className="text-sm opacity-50">{queueList.country}</div>
          </div>
        </div>
      </td>
      <td>
        {queueList.serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">
          {queueList.serviceType}
        </span>
      </td>
      <td>${queueList.fee}</td>
      {!isMobile && (
        <td>
          {queueList.servicer}
          <br />
          <span className="badge badge-ghost badge-sm">{queueList.status}</span>
        </td>
      )}
      {!isMobile && <td>{queueList.cycle}</td>}
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};
