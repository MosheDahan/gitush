import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store/store";
import { setHebrew, setEnglish } from "./slices/languageSlice";

export default function LanguagePage() {
    const language = useSelector((state: RootState) => state.language.languageValue)
    const dispatch = useDispatch()
    const handleSetHebrew = () => {
        dispatch(setHebrew())
    }
    const handleSetEnglish = () => {
        dispatch(setEnglish())
    }
    return (
        <div className="page-grid compact-grid">
            <section className="intro-panel">
                <p className="eyebrow">02 / language slice</p>
                <h1>Give your UI<br /><em>a voice.</em></h1>
                <p className="intro-copy">Switch the shared language value and watch the state travel across the app.</p>
            </section>
            <section className="control-card language-card">
                <div className="card-kicker">ACTIVE LOCALE</div>
                <div className="locale-display"><span>{language === 'he' ? 'עברית' : 'English'}</span><strong>{language.toUpperCase()}</strong></div>
                <div className="language-options">
                    <button className={language === 'en' ? 'choice-button selected' : 'choice-button'} onClick={handleSetEnglish}><span>EN</span> English</button>
                    <button className={language === 'he' ? 'choice-button selected' : 'choice-button'} onClick={handleSetHebrew}><span>HE</span> עברית</button>
                </div>
            </section>
        </div>
    )
}

