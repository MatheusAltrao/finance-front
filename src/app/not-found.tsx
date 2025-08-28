import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2">
      <p className="text-[100px] text-primary">404</p>
      <div>
        <h2 className="text-3xl font-bold">Página não encontrada</h2>
        <p className="text-muted-foreground">
          Não foi possível encontrar o recurso solicitado.
        </p>
      </div>

      <Link href={"/"}>
        <Button>Voltar para o início</Button>
      </Link>
    </div>
  );
}
