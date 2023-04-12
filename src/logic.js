const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/v1/generate';
const COHERE_API_KEY = 'TkBvbtNu2KAvuijRMn7V4LZnme0fMITmHcfsS4Bh';
const COHERE_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${COHERE_API_KEY}`
};

export function sendPrompt(animal) {
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
            prompt: `A funny fact about ${animal}`,
            model: 'command-xlarge-nightly'
        })
    };

    return fetch(COHERE_API_GENERATE_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        });
}
