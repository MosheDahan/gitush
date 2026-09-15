import { useState, useRef } from "react";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // יצירת ref נפרד לכל שדה קלט
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    // פוקוס לשדה האימייל
    const handleFocusEmail = () => {
        emailInputRef.current?.focus();
    };

    // פוקוס לשדה הסיסמה
    const handleFocusPassword = () => {
        passwordInputRef.current?.focus();
    };

    // ניקוי שני השדות
    const handleClearForm = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '240px' }}>
            <div>
                <label htmlFor="email-input" style={{ display: 'block', marginBottom: '4px', }}>
                    Email
                </label>
                <input
                    id="email-input"
                    ref={emailInputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
            </div>
            <div>
                <label htmlFor="password-input" style={{ display: 'block', marginBottom: '4px' }}>
                    Password:
                </label>
                <input
                    id="password-input"
                    ref={passwordInputRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
            </div>

            <button onClick={handleFocusEmail}>Focus Email</button>
            <button onClick={handleFocusPassword}>Focus Password</button>
            <button onClick={handleClearForm}>Clear Form</button>
        </div>
    );
}