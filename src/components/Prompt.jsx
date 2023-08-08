import { useFact } from '../hooks/useFact.js'
import { useAnimal } from '../hooks/useAnimal.js'
import './Prompt.css'

export function Prompt () {
  const { animal, updateAnimal, error } = useAnimal()
  const { fact, getAnimalFact } = useFact({ animal })

  const handleSubmit = (event) => {
    event.preventDefault()
    getAnimalFact({ animal })
  }

  const handleChange = (event) => {
    const newAnimal = event.target.value
    updateAnimal(newAnimal)
  }

  return (
    <section className='page'>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={animal} name='query' placeholder='Type an animal...' />
        <button type='submit'>Enviar</button>

      </form>
      <div className='result'>
        {fact && <p>{fact}</p>}
      </div>
    </section>
  )
}
