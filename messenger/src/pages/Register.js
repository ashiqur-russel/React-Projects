import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {

    // State for initial value
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
    });

    //Destructring values with --> data
    const { name, email, password, error, loading } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true })
        if (!name || !email || !password) {
            setData({ ...data, error: "All firleds are required" })
        }
        try {
            const res = await signInWithEmailAndPassword(email, password, auth);
            console.log(res)
        } catch (err) {
            console.error(err);
            alert(err.message);
        }

    }


    return (
        <section>
            <h3>Create An Account</h3>
            <form className='input-container' onSubmit={handleSubmit}>
                <div className="input_container">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={handleChange} />
                </div>
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' value={email} onChange={handleChange} />
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' value={password} onChange={handleChange} />
                </div>
                {error ? <p className='error'>{error}</p> : null}
                <div className="btn_container">
                    <button className='btn'>Register</button>
                </div>
            </form>
        </section>
    )
}

export default Register
