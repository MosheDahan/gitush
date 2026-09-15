import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { increment, decrement, reset } from './slices/counterSlice';

export default function CounterPage() {
    const count = useSelector(
        (state: RootState) => state.counter.value
    );

    const dispatch = useDispatch();

    return (
        <div className="page-grid">
            <section className="intro-panel">
                <p className="eyebrow">01 / counter slice</p>
                <h1>Small actions.<br /><em>Visible change.</em></h1>
                <p className="intro-copy">A tiny control surface for testing state updates in real time.</p>
                <div className="signal-line"><span /> store connected</div>
            </section>
            <section className="control-card counter-card">
                <div className="card-kicker">CURRENT VALUE</div>
                <div className="counter-value">{String(count).padStart(2, '0')}</div>
                <div className="counter-rule" />
                <div className="counter-actions">
                    <button className="icon-button" onClick={() => dispatch(decrement())} aria-label="Decrease count">−</button>
                    <button className="primary-button" onClick={() => dispatch(increment())}>Increase count <span>+</span></button>
                    <button className="text-button" onClick={() => dispatch(reset())}>Reset</button>
                </div>
                <p className="helper-text">Decrement stops at zero.</p>
            </section>
        </div>
    );
}