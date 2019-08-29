#!/usr/bin/env node
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const lettersCaps = [
  'A',
  'E',
  'I',
  'O',
  'U',
  'B',
  'C',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'X',
  'Z',
  'W',
  'Y',
]
const lettersSmall = [
  'a',
  'e',
  'i',
  'o',
  'u',
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'x',
  'z',
  'w',
  'y',
]
const symbols = ['!', '#', '€', '%', '&', '/', '=', '?', '*', '^', '~', '@', '£', '$', '+']
const all = [...numbers, ...lettersCaps, ...lettersSmall, ...symbols]

const length = +process.argv[2] || 12

let password = ''
for (let i = 0; i < length; i++) {
  password += all[Math.floor(Math.random() * all.length)]
}
process.stdout.write(password)
