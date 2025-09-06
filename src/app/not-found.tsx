import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2">
      <p className="text-[100px] text-primary">404</p>
      <div>
        <h2 className="font-bold text-3xl">Página não encontrada</h2>
        <p className="text-muted-foreground">Não foi possível encontrar o recurso solicitado.</p>
      </div>

      <Link href={'/'}>
        <Button>Voltar para o início</Button>
      </Link>
    </div>
  )
}
