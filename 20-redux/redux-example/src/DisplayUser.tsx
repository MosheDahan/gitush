import { useSelector } from "react-redux"
import type { RootState } from "./store/store"
export default function DisplayUser() {
    const users= useSelector((state: RootState) => state.user2.users)
    return (
        <div className="state-page users-page">
            <p className="eyebrow">08 / collection view</p>
            <div className="collection-heading"><div><h1>People<br /><em>in the room.</em></h1></div><strong>{String(users.length).padStart(2, '0')} <small>records</small></strong></div>
            {users.length === 0 ? <div className="empty-state">No user records yet. Add one from User 2.</div> : <div className="user-list">{users.map((user) => (
                <div className="user-row" key={user.id}><span className="user-index">#{String(user.id).padStart(3, '0')}</span><strong>{user.firstname}</strong><span>{user.email}</span></div>
            ))}</div>}
        </div>
    )
}