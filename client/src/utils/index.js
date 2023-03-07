import { surpriseMePromts } from '../constants'

export function getRandomPrompt(prompt) {
  const RandomIndex = Math.floor(Math.random()*
  surpriseMePromts.length);

  const randomPrompt = surpriseMePromts[RandomIndex]

  if(randomPrompt === prompt) return getRandomPrompt(prompt)
  
  return randomPrompt
}
