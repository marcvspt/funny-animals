import { useState } from "react";
import { sendPrompt } from "../logic";
import '../assets/index.css'

function UserPrompt() {
    const [value, setValue] = useState('');
    const [data, setData] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        sendPrompt(value)
            .then(response => setData(response.generations[0].text.trim()))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <input className="prompt-text" value={value} onChange={handleChange} placeholder="Type an animal..." />
            <button className="prompt-button"onClick={handleClick}>
                Enviar
            </button>
            {data && <p className="prompt-data">{data}</p>}
        </div>
    );
}

export default UserPrompt;
