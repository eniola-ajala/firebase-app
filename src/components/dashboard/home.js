import React, {useState,useEffect} from 'react'
import {firestore} from '../../config/firebase'
import {useHistory} from 'react-router-dom'

import Index from '../dashboard/navbar'
import TextInput from '../textinput'
import Button from '../button'

export default function Home({handleLogout, displayName}) {
    const [productName, setProductName] = useState('')
    const [productValue, setProductValue] = useState('')
    const history = useHistory();

    const uid = localStorage.getItem('uid');

    useEffect(()=>{
        if(!uid){
            history.push('/');

        }

    },[uid, history]);

    const handleChange =(e)=>{
        const {name, value} = e.currentTarget;
        if (name === "productName"){
            setProductName(value);
        }else if(name === "productValue"){
            setProductValue(value)
        }
    }
    
    const handleAdd = (e) =>{
        e.preventDefault();
        const data = firestore.collection('products').add({
            uid,
            productName,
            productValue
        })
        console.log('product added')
    };
    const handleDelete= async (e) => {
        e.preventDefault();
        try{
            const product =await firestore.collection('products').doc ("eSbur5ptbcCy1m14zABS").delete();
            console.log('product deleted');
        }catch (error){
            console.log (error)
        }
        
        
    }

    return (
        <div>
            <div> 

                <Index handleLogout={handleLogout} displayName={displayName} />
            </div>
            <h1 displayName={displayName}> Welcome to your dashboard {displayName}</h1>
             <div>
                 <form>
                 <div className="signin">
                <TextInput
                placeholder="Enter product name"
                type="text"
                name="productName"
                handleChange={handleChange}
                value={productName}
                />
                 <TextInput
                placeholder="Enter product value"
                type="text"
                name="productValue"
                handleChange={handleChange}
                value={productValue}
                />
                <Button text="Add" handleClick={handleAdd} className="buttonLogin blue"/>
                <Button text="Delete" handleClick={handleDelete} className="buttonLogin blue"/>
                </div>
                </form>
            </div> 
            
        </div>
    )
}
