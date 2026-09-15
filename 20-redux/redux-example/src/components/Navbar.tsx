import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie);
    const navItems = [
        { to: '/', label: 'Counter', end: true },
        { to: '/language', label: 'Language' },
        { to: '/movie', label: 'Cinema' },
        { to: '/stam', label: 'State' },
        { to: '/city', label: 'City' },
        { to: '/user', label: 'User' },
        { to: '/user2', label: 'User 2' },
        { to: '/displayuser', label: 'Display User' },
        { to: '/product', label: 'Product Store' },

    ];

    return (
        <nav className="topbar">
            <NavLink to="/" className="brand">
                <span className="brand-mark">R</span>
                <span><strong>Redux</strong><small>cinema lab</small></span>
            </NavLink>
            <div className="nav-links">
                {navItems.map(({ to, label, end }) => (
                    <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        {label}
                    </NavLink>
                ))}
            </div>
            <div className="nav-status">
                <span className="status-dot" />
                <span className="status-label">Now selected</span>
                <strong>{selectedMovie || 'Nothing yet'}</strong>
            </div>
        </nav>
    );
}