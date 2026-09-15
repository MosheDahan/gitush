import { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";
import usePasswordValidator from "./hooks/usePasswordValidator";

export function DemoPage() {
    const [password, setPassword] = useState('');
    const { isValid, errors } = usePasswordValidator(password);

    // כותרת הטאב מתעדכנת בזמן אמת לפי מצב הסיסמה
    const tabTitle = password.length === 0
        ? 'Password Validation'
        : isValid
            ? '✓ Valid password'
            : `({errors.length}) password errors`;


    useDocumentTitle(tabTitle);

    return (
        <div style={{ maxWidth: '420px', margin: '40px auto', fontFamily: 'sans-serif', direction: 'ltr' }}>
            <h2>Password Validation</h2>

            <div style={{ marginBottom: '16px' }}>
                <label htmlFor="pwd-input" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Enter password:
                </label>
                <input
                    id="pwd-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters, 1 digit, 1 uppercase letter..."
                    style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '15px',
                        border: `2px solid ${password.length === 0 ? '#ccc' : isValid ? '#22c55e' : '#ef4444'}`,
                        borderRadius: '6px',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }}
                />
            </div>

            {password.length > 0 && (
                <div style={{
                    padding: '12px',
                    borderRadius: '6px',
                    backgroundColor: isValid ? '#f0fdf4' : '#fef2f2',
                    border: `1px solid ${isValid ? '#bbf7d0' : '#fecaca'}`
                }}>
                    {isValid ? (
                        <p style={{ margin: 0, color: '#15803d', fontWeight: 'bold' }}>
                            ✓ Password meets all requirements!
                        </p>
                    ) : (
                        <div>
                            <p style={{ margin: '0 0 8px 0', color: '#b91c1c', fontWeight: 'bold' }}>
                                Please fix the following issues:
                            </p>
                            <ul style={{ margin: 0, paddingRight: '20px', color: '#b91c1c' }}>
                                {errors.map((error, idx) => (
                                    <li key={idx} style={{ marginBottom: '4px' }}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}