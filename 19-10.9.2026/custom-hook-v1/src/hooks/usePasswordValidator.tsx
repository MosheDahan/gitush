import { useMemo } from 'react';

export default function usePasswordValidator(password = '') {
    return useMemo(() => {
        const errors = [];

        // כלל 1: אורך של לפחות 8 תווים 
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }

        // כלל 2: לפחות ספרה אחת
        if (!/\d/.test(password)) {
            errors.push('Password must contain at least one digit (0-9)');
        }

        // כלל 3: לפחות אות גדולה אחת באנגלית
        if (!/[A-Z]/.test(password)) {
            errors.push('The password must contain at least one uppercase letter (A-Z).');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }, [password]);
}