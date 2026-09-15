import { useDispatch } from "react-redux"
import { addUser, clearUsers } from "./slices/userSlice2"
import { useState, type ChangeEvent } from "react"

export default function UserPage2() {
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")

    function handleFirstnameChange(e: ChangeEvent<HTMLInputElement>) {
        setFirstname(e.target.value)
    }
    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handleSubmit() {
        dispatch(addUser({ id: Math.floor(Math.random()*1000), firstname: firstname, email: email }))
        setFirstname("")
        setEmail("")
    }

    return (
        <div className="page-grid compact-grid profile-grid">
            <section className="intro-panel">
                <p className="eyebrow">07 / users collection</p>
                <h1>Make room<br /><em>for people.</em></h1>
                <p className="intro-copy">Add a lightweight user record to the collection slice, then browse it on the display screen.</p>
            </section>
            <section className="control-card form-card">
                <div className="card-kicker">NEW USER RECORD</div>
                <label>First name<input type="text" placeholder="e.g. Maya" value={firstname} onChange={handleFirstnameChange}/></label>
                <label>Email address<input type="email" placeholder="maya@example.com" value={email} onChange={handleEmailChange}/></label>
                <div className="form-actions"><button className="primary-button" onClick={handleSubmit}>Add user <span>+</span></button><button className="text-button" onClick={() => dispatch(clearUsers())}>Clear collection</button></div>
            </section>
        </div>
    )
}