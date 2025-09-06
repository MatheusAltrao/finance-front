import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FormRegister from './components/form-register'

export default function Register() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>Preencha os campos abaixo para criar sua conta</CardDescription>
      </CardHeader>
      <CardContent>
        <FormRegister />
      </CardContent>
    </Card>
  )
}
