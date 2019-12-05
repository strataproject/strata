import { readdirSync } from 'fs'

export const readDir = path => {
  return readdirSync(path)
}
