import ProtectedPage from "../protected-page";
import { Order } from "@/components/Services";

export default function OrderPage() {
  return (
    <ProtectedPage allowedUserTypes={["admin", "client"]}>
      <div>Orders</div>
    </ProtectedPage>
  );
}
