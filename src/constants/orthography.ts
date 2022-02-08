import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'a̠',
  'e',
  'e̠',
  'i',
  'i̠',
  'o',
  'o̠',
  'u',
  'u̠',
  'ʉ',
  'ʉ̠',
  'b',
  'h',
  'k',
  'kw',
  'm',
  'n',
  'p',
  'r',
  's',
  't',
  'ts',
  'w',
  'y',
  's',
  't',
  'ts',
  'ʔ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
