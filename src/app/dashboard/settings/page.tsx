import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeButton } from '@/components/ui/theme-button'

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações</CardTitle>
        <CardDescription>Selecione uma configuração de tema melhor para você </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span>Selecione o tema</span> <ThemeButton />
        </div>
      </CardContent>
    </Card>
  )
}
