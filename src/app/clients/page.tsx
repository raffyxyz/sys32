import ProtectedPage from "../protected-page";

export default function ClientsPage() {
  return (
    <ProtectedPage allowedUserTypes={["admin"]}>
      <div>ClientsPage</div>
    </ProtectedPage>
  );
}
