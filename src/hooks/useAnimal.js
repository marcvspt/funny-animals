import { useState, useEffect, useRef } from 'react'

export function useAnimal () {
  const [animal, updateAnimal] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = animal === ''
      return
    }

    if (animal === '') {
      setError('Cannot get a fact without animal')
      return
    }

    if (animal.match(/^\d+$/)) {
      setError('THe animals do not have numbers')
      return
    }

    setError(null)
  }, [animal])

  return { animal, updateAnimal, error }
}
