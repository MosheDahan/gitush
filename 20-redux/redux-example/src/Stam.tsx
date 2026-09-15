import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

export default function Stam() {
    const language = useSelector((state: RootState) => state.language.languageValue)
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie)
    return (
        <div className="page-grid compact-grid state-grid">
            <section className="intro-panel">
                <p className="eyebrow">04 / state snapshot</p>
                <h1>Everything<br /><em>in one place.</em></h1>
                <p className="intro-copy">A live readout of values shared between the different slices in this small Redux lab.</p>
                <div className="signal-line"><span /> store connected</div>
            </section>
            <section className="control-card state-card">
                <div className="card-kicker">CURRENT STORE</div>
                <div className="state-list">
                    <div><span>language.languageValue</span><strong>{language}</strong></div>
                    <div><span>movie.selectedMovie</span><strong>{selectedMovie || 'empty'}</strong></div>
                </div>
            </section>
        </div>
    )
}


