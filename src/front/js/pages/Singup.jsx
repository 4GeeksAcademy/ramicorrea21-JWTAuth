import React from "react"
import { useState } from "react"

export const Singup = () => {
    const [user, setUser] = useState({
        email : "",
        password: ""
    })

    const handleChange = (e) =>{
         setUser({
            ...user,
            [e.target.name] : e.target.value
         })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <div className="d-flex justify-content-center">
            <div>
                <h1>Please complete the form to register a new user</h1>
                <form onSubmit={handleSubmit}>
                    <label>email</label>
                    <input type="email" className="form-control mb-3" placeholder="example@example.com" aria-label="Email" aria-describedby="basic-addon1" name="email" value={user.email} onChange={handleChange}/>
                    <label>password</label>
                    <input type="password" className="form-control" placeholder="Your Password" aria-label="password" aria-describedby="basic-addon1" name="password" value={user.password} onChange={handleChange} />
                    <div className="d-grid gap-2 mt-2">
                        <button className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}