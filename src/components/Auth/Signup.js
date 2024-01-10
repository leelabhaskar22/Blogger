import React, { useState } from 'react'
import  {auth}  from "../../config/firebase"
import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'
import "./style.css"
const Signup =  () => {
    const provider = new GoogleAuthProvider()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')

    const googleauth = async () => {
    try{
        await signInWithPopup(auth,  provider)

    }catch(err){
        console.log("something went wrong")
    }
    }
    
    const signin = async () => {
        try{
            if(confirmpassword === password){
                await createUserWithEmailAndPassword(auth, email,confirmpassword )
           }
           else{
               console.log("password don't match")
           }
        }catch(err){
            console.log('something went wrong',err)
        }
    }
    return (
        <>
        <div className='card'>
            <h2>Signup</h2>
            <div className='email-login'>
                <p>Email</p>
                <input placeholder='john@gmail.com' type='email' onChange={(e) => setEmail(e.target.value)} />
                 <p>Password</p>
                <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                <p>Confirm Password</p>
                <input placeholder='password' type='password' onChange={(e) => setConfirmpassword(e.target.value)} />
                <button onClick={signin}>Signup</button>
            </div>
                <p>Don't have an account? <Link to='/signin'>login</Link> </p>
                <br />
                <p>or</p>
                <br />
                <GoogleButton className='google-btn' onClick={googleauth} />
        </div>
        </>
    )
}

export default Signup