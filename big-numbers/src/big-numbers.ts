import { CustomOperation } from './custom-number.types'

export type BigNumber = any

const fromString = (s: string): number => {
  return parseInt(s, 10)
}

const add = (n1: number, n2: number): string => {
  let s1 = ''
  let s2 = ''

  if (n1.toString().length > n2.toString().length) {
    s1 = n1.toString()
    s2 = n2.toString()
  } else {
    s1 = n2.toString()
    s2 = n1.toString()
  }

  const result = []
  let carry = 0

  let a1 = Number(s1.charAt(s1.length - 1))
  let a2 = Number(s2.charAt(s2.length - 1))

  for (let i = s1.length - 1; i >= 0; i--) {
    if (carry === 0) {
      if (a1 + a2 + carry >= 10) {
        result.unshift((a1 + a2 + carry - 10).toString())
        carry = 1
        s1 = s1.substring(0, s1.length - 1)
        s2 = s2.substring(0, s2.length - 1)
        a1 = Number(s1.charAt(s1.length - 1))
        a2 = Number(s2.charAt(s2.length - 1))
      } else {
        result.unshift((a1 + a2 + carry).toString())
        carry = 0
        s1 = s1.substring(0, s1.length - 1)
        s2 = s2.substring(0, s2.length - 1)
        a1 = Number(s1.charAt(s1.length - 1))
        a2 = Number(s2.charAt(s2.length - 1))
      }
    } else {
      if (a1 + a2 + carry >= 10) {
        result.unshift((a1 + a2 + carry - 10).toString())
        carry = 1
        s1 = s1.substring(0, s1.length - 1)
        s2 = s2.substring(0, s2.length - 1)
        a1 = Number(s1.charAt(s1.length - 1))
        a2 = Number(s2.charAt(s2.length - 1))
      } else {
        result.unshift((a1 + a2 + carry).toString())
        carry = 0
        s1 = s1.substring(0, s1.length - 1)
        s2 = s2.substring(0, s2.length - 1)
        a1 = Number(s1.charAt(s1.length - 1))
        a2 = Number(s2.charAt(s2.length - 1))
      }
    }
    if (s1.length === 0 && carry === 1) {
      result.unshift('1')
    }
  }

  const stringResult = result.join('')
  return stringResult
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
