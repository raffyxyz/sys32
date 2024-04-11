export type QueueListType = {
    avatar: string;
    name: string;
    country: string;
    serviceName: string;
    serviceType: string | "Task" | "Pilot";
    fee: string|number;
    status: string | "Ongoing" | "Completed" | "Pending",
    servicer: string;
    cycle: string | "Once" | "Everyday",
}