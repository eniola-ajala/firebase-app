// import React from 'react'
import React, {useState} from 'react'
import Textinput from './textinput'
import Button from './button'
import {NavLink, useHistory} from 'react-router-dom'
import {auth, firestore} from '../config/firebase';

export default function Signup() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState ('');
    const history = useHistory();
    

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'fullname'){
        setFullname(value);
        }else if (name === 'email'){
            setEmail(value);
        }else if (name === 'password'){
            setPassword(value);
        }

    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if (!fullname || !email || !password){
                setErrorMessage('All fields are required')
            }
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            if (user){
                const profile = firestore.collection('users').doc(user.uid);
                await profile.set({
                    fullname,
                    email,
                })
                localStorage.setItem('uid', user.uid);
                history.push('./dashboard')
            }

        }catch(error){
            if (error.code === 'auth/weak-password'){
                setErrorPassword(error.message)
            }else if(error.code === 'auth/email-already-in-use'){
                setErrorEmail(error.message)
            }else if (error.code === 'auth/invalid-email'){
                setErrorEmail(error.message)
            }
            console.log(error.code)
            console.log(error.message)

        }

    }
    const handleKeyUp = () => {
        setErrorMessage('');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="signup">
                    <NavLink to="/" className="signup-title"> EnnieTech
                    </NavLink>
                    {/* if(errorMessage) {
                        <p className="red-text">{errorMessage}</p>

                    }else{
                        <p> </p>
                    } */}
                   
                    {errorMessage ? <p className="red-text center-align">{errorMessage}</p> : ''}
                    <Textinput placeholder="Enter full name" type="text" label="Full name" name="fullname" handleKeyUp={handleKeyUp} handleChange={handleChange} value={fullname}/>
                    <Textinput placeholder="Enter  Email adress" type="email" label="Email address" name="email" error={errorEmail} handleKeyUp={handleKeyUp} handleChange={handleChange} value={email}/>
                    <Textinput placeholder="Enter password" type="password" label="Password" error={errorPassword} name="password" handleKeyUp={handleKeyUp} handleChange={handleChange} value={password}/>
                    <Button text="Signup" className="btn-signup"/>
                    <p className="center-align"> Already have an account <a href="/login"> Signin </a></p>
                </div>
            </form>
            
        </div>
    )
}
