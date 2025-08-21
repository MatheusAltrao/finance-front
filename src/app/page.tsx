import { signOutFormAction } from "@/actions/auth/sign-out/sign-out-action";
import { Button } from "@/components/ui/button";
import { getSession } from "@/helpers/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getSession();

  if (!user) {
    redirect("/auth/sign-in");
  }

  return (
    <div>
      {user && <p>Welcome back, {user.email}!</p>}

      <form action={signOutFormAction}>
        <Button>Sair</Button>
      </form>
    </div>
  );
}
