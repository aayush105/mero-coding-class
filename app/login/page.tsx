import Login from "@/app/Components/Login";
import LoginGuard from "@/app/Components/LoginGuard";

export default function Home() {
  return (
    <LoginGuard>
      <Login />
    </LoginGuard>
  );
}
