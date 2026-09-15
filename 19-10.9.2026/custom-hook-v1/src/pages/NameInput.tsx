import { useRef } from 'react';

export default function NameInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '200px' }}>
            <label htmlFor='name-input'>Name:</label>

            <input
                id="name-input"
                ref={inputRef}
                type="text"
                placeholder='Enter your name'
            />

            <button onClick={handleFocus}>
                Focus Name
            </button>
        </div>
    )
}