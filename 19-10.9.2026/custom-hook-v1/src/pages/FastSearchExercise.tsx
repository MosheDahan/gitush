import { useMemo, useState, useRef } from "react";

// 1. יצירת הרשימה פעם אחת מחוץ לקומפוננטה (או בתוכה עם Array.from)
const NUMBERS_LIST = Array.from({ length: 1000 }, (_, i) => i + 1);

export function FastSearchExercise() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // 2 + 3. סינון בתוך useMemo ו-console.log לבדיקת ריצה
    const filteredNumbers = useMemo(() => {
        console.log('🔄 useMemo רץ! מתבצע סינון מחדש של 1,000 המספרים...');
        return NUMBERS_LIST.filter(num => num.toString().includes(searchQuery));
    }, [searchQuery]);

    // 5. בונוס: איפוס החיפוש והחזרת הפוקוס ל-input
    const handleClear = () => {
        setSearchQuery('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div style={{
            padding: '20px',
            direction: 'rtl',
            fontFamily: 'sans-serif',
            backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            minHeight: '40vh',
            transition: 'background-color 0.3s, color 0.3s'
        }}>
            <h2>תרגיל 1: חיפוש מהיר עם useMemo</h2>

            {/* 4. כפתור מצב כהה (לא קשור, לא אמור להפעיל את ה-useMemo) */}
            <button
                onClick={() => setIsDarkMode(prev => !prev)}
                style={{ marginBottom: '15px', padding: '8px 12px', cursor: 'pointer' }}
            >
                מצב כהה: {isDarkMode ? 'פעיל 🌙' : 'כבוי ☀️'}
            </button>

            <div style={{ marginBottom: '15px', display: 'flex', gap: '8px' }}>
                <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="חפש מספר (למשל: 7, 120)..."
                    style={{ padding: '8px', fontSize: '14px', width: '220px' }}
                />
                <button
                    onClick={handleClear}
                    style={{ padding: '8px 12px', cursor: 'pointer' }}
                >
                    ניקוי
                </button>
            </div>

            <p> נמצאו <strong>{filteredNumbers.length}</strong> מספרים תואמים: </p>

            <div style={{
                maxHeight: '180px',
                overflow: 'auto',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '4px',
                background: isDarkMode ? '#2d2d2d' : '#f9f9f9'
            }}>
                {filteredNumbers.join(', ')}
            </div>
        </div>
    );
}