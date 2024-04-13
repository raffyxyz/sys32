import ProtectedPage from "../protected-page";
import { Order } from "@/components/Services";

export default function ServicesPage() {
  return (
    <ProtectedPage allowedUserTypes={["admin", "provider"]}>
      <Order />
    </ProtectedPage>
  );
}
