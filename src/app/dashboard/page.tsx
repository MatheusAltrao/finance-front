import { signOutFormAction } from "@/actions/auth/sign-out/sign-out-action";
import { Button } from "@/components/ui/button";
import { getSession } from "@/helpers/session";

export default async function DashboardPage() {
  const user = await getSession();

  return (
    <div className="p-2">
      {user && <p>Welcome back, {user.name}!</p>}

      <form action={signOutFormAction}>
        <Button>Sair</Button>
      </form>
    </div>
  );
}
