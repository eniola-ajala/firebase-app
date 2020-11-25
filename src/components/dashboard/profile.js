import React, {useEffect, useState} from 'react'
import {firestore} from '../../config/firebase'
import {useHistory} from 'react-router-dom'


import Navbar from './navbar'
import TextInput from '../textinput'
import Button from '../button'

export default function Profile() {

     const [fullname, setFullname] = useState ('')
     const [email, setEmail] = useState ('')
     const [phone, setPhone] = useState ('')
     const history = useHistory();

     const uid = localStorage.getItem('uid');


     const handleChange = (e) => {
         const {name, value} = e.currentTarget;
         if(name === 'fullname'){
             setFullname(value)
         }else if(name === "email"){
             setEmail(value)
         }else if (name === "phone"){
             setPhone(value)
         }

    }

    

    useEffect(() => {
        const fetchData = async () => {
            const data = await firestore.collection('users').get();
            data.forEach((doc) =>{
                if(doc.id === uid){
                    setFullname(doc.data().fullname);
                    setEmail(doc.data().email);
                    // setPhone(doc.data().phone);
                }
            })
        }
        fetchData()
    },[uid]);
    useEffect(()=>{
        if(!uid){
            history.push('/');

        }

    },[uid, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = firestore.collection('users').doc(uid)
        user.update({
            fullname,
            phone
        })
    }

    return (

        <div>
            <Navbar/>
            <h2> Profile</h2>
            <form onSubmit={handleSubmit}>
            <TextInput
            placeholder="Enter Fullname"
            value={fullname}
            name="fullname"
            type="text"
            handleChange={handleChange} 
            />
            <TextInput
            placeholder="Enter Email Address"
            value={email}
            name="email"
            type="email"
            handleChange={handleChange}
             />
             <TextInput
            placeholder="Enter Phone Number"
            value={phone}
            name="phone"
            type="text"
            handleChange={handleChange}
             />
              <Button text="Update" className="buttonLogin blue"/>

            </form>
        </div>
    )
}
