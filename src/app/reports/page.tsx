import ProtectedPage from "../protected-page";

export default function ReportsPage() {
  return (
    <ProtectedPage allowedUserTypes={["admin"]}>
      <div>ReportsPage</div>
    </ProtectedPage>
  );
}
