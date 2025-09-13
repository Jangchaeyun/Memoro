import arject from '@arcjet/next'
import { getEnv } from '@/lib/util'

const aj = arject({
  key: getEnv('ARCJET_API_KEY'),
  rules: [],
})

export default aj
