import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormSignIn from "./components/form-sign-in";

export default function SignIn() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar na sua conta</CardTitle>
        <CardDescription>
          Digite seu e-mail abaixo para acessar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignIn />
      </CardContent>
    </Card>
  );
}
