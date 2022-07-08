import { CustomOperation } from './custom-number.types'

export type BigNumber = any

const fromString = (s: string): number => {
  return parseInt(s, 10)
}

const add = (n1: number, n2: number): string => {
  let s1: string = ''
  let s2: string = ''

  if (n1.toString().length > n2.toString().length) {
    s1 = n1.toString()
    s2 = n2.toString()
  } else {
    s1 = n2.toString()
    s2 = n1.toString()
  }

  const result: string[] = []
  let carry: number = 0

  let a1: number = Number(s1.charAt(s1.length - 1))
  let a2: number = Number(s2.charAt(s2.length - 1))

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

  return result.join('')
}

const multiply = (n1: number, n2: number): string => {
  let s1: string = ''
  let s2: string = ''

  if (n1.toString().length > n2.toString().length) {
    s1 = n1.toString()
    s2 = n2.toString()
  } else {
    s1 = n2.toString()
    s2 = n1.toString()
  }

  const dividedN1: string[] = []
  if (s1.length === 3) {
    dividedN1.push(s1)
  } else {
    let cut: number = 0
    let carry: number = s1.length
    for (let i = s1.length - 1; i >= 0; i--) {
      cut += 1
      if (cut % 3 === 0) {
        dividedN1.push(s1.slice(i, carry))
        carry = i
      }
      if (i === 0) {
        dividedN1.push(s1.slice(0, carry))
      }
    }
  }

  const correctedArrayResult: any[] = []
  let addThousands: string = ''

  dividedN1.forEach((e) => {
    let addZero: string = ''
    const arrayResult: string[] = []

    for (let i = s2.length - 1; i > -1; i--) {
      const result: number = parseInt(s2[i]) * parseInt(e)
      arrayResult.push(result.toString())
    }

    for (let j = 0; j < arrayResult.length; j++) {
      correctedArrayResult.push(`${arrayResult[j]}${addZero}${addThousands}`)
      addZero += '0'
    }
    addThousands += '000'
  })

  const result: string = correctedArrayResult.reduce(
    (previousValue, currentValue) => add(previousValue, currentValue),
    0
  )

  return result
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
