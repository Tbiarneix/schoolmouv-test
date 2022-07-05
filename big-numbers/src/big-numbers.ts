import { CustomOperation } from './custom-number.types'

export type BigNumber = any

const fromString = (s: string): BigNumber => {
  return parseInt(s, 10)
}

const add = (n1: BigNumber, n2: BigNumber): BigNumber => {
  const result = BigInt(n1) + BigInt(n2)
  return `${result}`
}

const multiply = (n1: BigNumber, n2: BigNumber): BigNumber => {
  const result = BigInt(n1) * BigInt(n2)
  return `${result}`
}

const toString = (n: BigNumber) => {
  return n.toString()
}

export const BigNumberOperation: CustomOperation<BigNumber> = {
  fromString,
  add,
  multiply,
  toString
}
