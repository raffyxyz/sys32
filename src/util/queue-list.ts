export const filterQueueHead = (queueHead: Array<string>) => {
    const servicerIndex = queueHead.indexOf("Servicer");
  const cycleIndex = queueHead.indexOf("Cycle");

  const newQueueHead = [
    ...queueHead.slice(0, servicerIndex),
    ...queueHead.slice(servicerIndex + 1, cycleIndex),
    ...queueHead.slice(cycleIndex + 1),
  ];

  return newQueueHead;
}