/* eslint-disable @next/next/no-img-element */
import React from "react";
import { QueueBanner } from "./queue-banner";
import { QueueService } from "./queue-service";

export const Order = () => {
  return (
    <React.Fragment>
      <QueueBanner />
      <QueueService />
    </React.Fragment>
  );
};
