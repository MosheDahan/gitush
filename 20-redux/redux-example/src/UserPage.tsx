import { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./slices/userSlice2";

function UserPage() {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    const trimmedFirstname = firstname.trim();
    const trimmedEmail = email.trim();

    if (!trimmedFirstname || !trimmedEmail) return;

    dispatch(addUser({
      id: Date.now(),
      firstname: trimmedFirstname,
      email: trimmedEmail,
    }));
    setFirstname('');
    setEmail('');
  }

  return (
    <div className="page-grid compact-grid profile-grid">
      <section className="intro-panel">
        <p className="eyebrow">06 / user slice</p>
        <h1>Shape your<br /><em>profile.</em></h1>
        <p className="intro-copy">Add a user to the shared collection. The new record will appear immediately in Display User.</p>
        <div className="signal-line"><span /> user2 state connected</div>
      </section>
      <section className="control-card form-card">
        <div className="card-kicker">NEW USER RECORD</div>
        <div className="profile-avatar">{(firstname[0] || 'U').toUpperCase()}</div>
        <label>First name<input type="text" value={firstname} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)} /></label>
        <label>Email address<input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} /></label>
        <button className="primary-button" onClick={handleSubmit}>Add to user2 list <span>+</span></button>
      </section>
    </div>
  );
}

export default UserPage;