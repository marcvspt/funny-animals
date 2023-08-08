import { useCallback, useState, useRef } from 'react'
import { sendAnimal } from '../logic/cohere.js'

export function useFact ({ animal }) {
  const [fact, setFact] = useState([])
  const previousAnimal = useRef(animal)

  const getAnimalFact = useCallback(async ({ animal }) => {
    if (animal === previousAnimal.current) return

    try {
      previousAnimal.current = animal
      const newFact = await sendAnimal({ animal })
      setFact(newFact)
    } catch (e) {

    }
  })

  return { fact, getAnimalFact }
}
