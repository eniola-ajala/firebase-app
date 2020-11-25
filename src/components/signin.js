import React, {useState} from 'react'
import Textinput from './textinput'
import Button from './button'
import {NavLink, useHistory} from 'react-router-dom'
import {auth} from '../config/firebase'

export default function Signin() {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleChange =(e) => {
        const {name, value} = e.currentTarget;
        if (name === "email"){
            setEmail(value);
        }else if (name === "password"){
            setPassword(value);
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if ( !email || !password){
                setErrorMessage('All fields are required')
            }
            const {user} = await auth.signInWithEmailAndPassword(email, password);
            
            localStorage.setItem('uid', user.uid);
            history.push('./dashboard')

        }catch (error){
            if(error.code === 'auth/user-not-found'){
                setErrorMessage('Invalid email address or password')
            }else if (error.code === 'auth/invalid-email'){
                setErrorEmail ('error.message')
            }else if (error.code === 'auth/wrong-password'){
                setErrorEmail ('invalid email address or password')
            }
        }
    }
    const handleKeyUp = () => {
        setErrorMessage('');
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="signin">
                    <NavLink to="/" className="signup-title"> EnnieTech
                    </NavLink>
                    {errorMessage ? <p className="red-text center-align">{errorMessage}</p> : ''}
                    {/* <Textinput placeholder="Enter full name" type="text" label="full name"/> */}
                    <Textinput placeholder="Enter  Email adress" type="email" handleKeyUp={handleKeyUp} name="email" value={email} handleChange={handleChange} error={errorEmail} label="Email address"/>
                    <Textinput placeholder="Enter password" name="password" handleKeyUp={handleKeyUp} value={password} handleChange={handleChange}  type="password" label="Password"/>
                    <Button text="Log in" className="btn-login"/>
                    <p className="center-align"> dont have an account <a href="/signup"> Signup </a></p>
                </div>
            </form>
            
        </div>
    )
    }
