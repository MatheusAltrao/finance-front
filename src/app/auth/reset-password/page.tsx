import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormResetPassword from "./components/form-reset-password";

export default function ResetPassword() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Redefinir senha</CardTitle>
        <CardDescription>
          Preencha os campos abaixo para redefinir sua senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormResetPassword />
      </CardContent>
    </Card>
  );
}
