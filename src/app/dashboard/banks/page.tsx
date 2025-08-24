import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Plus, PlusCircle } from "lucide-react";

export default function BanksPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-end">
        <Button>
          <Plus /> Adicionar conta
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card className="flex h-[220px] flex-col items-center justify-center bg-accent">
          <CardContent className="flex flex-col items-center justify-center gap-3">
            <PlusCircle size={64} strokeWidth={0.8} />
            Nova conta bancária
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span>Inter</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Saldo atual</span>
              <span className="text-muted-foreground">R$ 1.200,00</span>
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              <Plus /> Adicionar dispesa
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span>Inter</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Saldo atual</span>
              <span className="text-muted-foreground">R$ 1.200,00</span>
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              <Plus /> Adicionar dispesa
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span>Inter</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Saldo atual</span>
              <span className="text-muted-foreground">R$ 1.200,00</span>
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              <Plus /> Adicionar dispesa
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
