import { CustomOperation } from './custom-number.types'

export type BigNumber = any

const fromString = (s: string): number => {
  return parseInt(s, 10)
}

const add = (n1: number, n2: number): string => {
  const result = BigInt(n1) + BigInt(n2)
  return `${result}`
}

const multiply = (n1: number, n2: number): string => {
  const result = BigInt(n1) * BigInt(n2)
  return `${result}`
}

const toString = (n: number): string => {
  return n.toString()
}

export const BigNumberOperation: CustomOperation<BigNumber> = {
  fromString,
  add,
  multiply,
  toString
}
