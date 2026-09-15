import { useState, type SubmitEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "./slices/citySlice";
import type { RootState } from "./store/store";

export const CityPage = () => {
    const dispatch = useDispatch();
    const currentCity = useSelector((state: RootState) => state.city.city);
    const [customCity, setCustomCity] = useState('');

    const handleCustomCitySubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (customCity.trim()) {
            dispatch(changeCity(customCity.trim()));
            setCustomCity('');
        }
    };
    return (
        <div className="city-page">
            <section className="city-heading">
                <div>
                    <p className="eyebrow">05 / city slice</p>
                    <h1>Put a place<br /><em>on the map.</em></h1>
                    <p className="intro-copy">Dispatch a city to the shared store and keep the whole interface in sync.</p>
                </div>
                <div className="city-display">
                    <span>ACTIVE CITY</span>
                    <strong>{currentCity}</strong>
                    <small>city.city / live state</small>
                </div>
            </section>
            <section className="city-controls">
                <div className="card-kicker">QUICK DISPATCH</div>
                <div className="city-options">
                    <button className={currentCity === 'Tel Aviv' ? 'city-option selected' : 'city-option'} onClick={() => dispatch(changeCity('Tel Aviv'))}><span>01</span>Tel Aviv</button>
                    <button className={currentCity === 'Jerusalem' ? 'city-option selected' : 'city-option'} onClick={() => dispatch(changeCity('Jerusalem'))}><span>02</span>Jerusalem</button>
                    <button className={currentCity === 'Haifa' ? 'city-option selected' : 'city-option'} onClick={() => dispatch(changeCity('Haifa'))}><span>03</span>Haifa</button>
                </div>
                <form onSubmit={handleCustomCitySubmit} className="city-form">
                    <input
                        type="text"
                        placeholder="Enter a city name..."
                        value={customCity}
                        onChange={(e) => setCustomCity(e.target.value)}
                    />
                    <button type="submit">Dispatch city <span>↗</span></button>
                </form>
            </section>
        </div>
    );
};



