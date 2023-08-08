const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/v1/generate'
const COHERE_API_KEY = '' // PUT YOUR API KEY HERE -> https://dashboard.cohere.ai/api-keys
const COHERE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${COHERE_API_KEY}`
}

export const sendAnimal = async ({ animal }) => {
  if (animal === '') return null

  const options = {
    method: 'POST',
    url: COHERE_API_GENERATE_URL,
    headers: COHERE_HEADERS,
    body: JSON.stringify({
      max_tokens: 50,
      temperature: 0.3,
      k: 0,
      p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      return_likelihoods: 'NONE',
      truncate: 'END',
      prompt: `A short [20 words] fun fact about the animal ${animal}`,
      model: 'command-xlarge-nightly'
    })
  }

  try {
    const res = await fetch(COHERE_API_GENERATE_URL, options)
    const json = await res.json()
    const data = json.generations[0].text.trim()

    return data
  } catch (e) {
    throw new Error(`Error generating response: ${e}}`)
  }
}
