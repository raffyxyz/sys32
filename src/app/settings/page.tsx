import ProtectedPage from "../protected-page";

export default function SettingsPage() {
  return (
    <ProtectedPage allowedUserTypes={["admin", "provider", "client"]}>
      <div>SettingsPage</div>
    </ProtectedPage>
  );
}
