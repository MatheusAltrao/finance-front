import { jwtVerify, SignJWT } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET_KEY
const secretKey = new TextEncoder().encode(JWT_SECRET)

export const encrypt = async (payload: any) => {
  if (!payload) {
    console.log('Payload is required')
    return null
  }

  const result = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secretKey)

  return result
}

export const decrypt = async (value: string) => {
  const { payload } = await jwtVerify(value, secretKey, {
    algorithms: ['HS256'],
  })
  const userpayload = payload as any

  return userpayload
}
