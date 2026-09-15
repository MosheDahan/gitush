import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store/store';
import { selectSpiderMan, selectAvatar, selectInsideOut, resetMovie } from './slices/movieSlice';

export default function MoviePage() {
    const dispatch = useDispatch();
    const selectedMovie = useSelector(
        (state: RootState) => state.movie.selectedMovie
    );

    return (
        <div className="movie-page">
            <section className="movie-heading">
                <div><p className="eyebrow">03 / movie slice</p><h1>Tonight's<br /><em>selection.</em></h1></div>
                <div className="ticket"><span>SELECTED FILM</span><strong>{selectedMovie || 'Choose a title'}</strong><small>Redux state / live</small></div>
            </section>
            <section className="movie-grid">
                <button className={selectedMovie === 'Avatar' ? 'movie-tile selected' : 'movie-tile'} onClick={() => dispatch(selectAvatar())}><span className="movie-number">01</span><strong>Avatar</strong><small>2009 / Sci-fi</small></button>
                <button className={selectedMovie === 'Spider-Man' ? 'movie-tile selected' : 'movie-tile'} onClick={() => dispatch(selectSpiderMan())}><span className="movie-number">02</span><strong>Spider-Man</strong><small>2002 / Action</small></button>
                <button className={selectedMovie === 'Inside Out' ? 'movie-tile selected' : 'movie-tile'} onClick={() => dispatch(selectInsideOut())}><span className="movie-number">03</span><strong>Inside Out</strong><small>2015 / Animation</small></button>
            </section>
            <button className="reset-link" onClick={() => dispatch(resetMovie())}>Clear selection <span>↗</span></button>
        </div>
    );
}