import { useState } from "react";
export default function NameGreeting() {
    const [name, setName] = useState<string>('');
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="הכנס שם..."
                value={name}
                onChange={handleNameChange}
            />
            <p>Hello {name}!</p>
        </div>
    );
}