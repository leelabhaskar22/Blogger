import React, { useState } from 'react'
import  {auth}  from "../../config/firebase"
import { GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

const Signin =  () => {
    const provider = new GoogleAuthProvider()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    console.log(auth.currentUser)
    const googleauth = async () => {

    try{
        await signInWithPopup(auth,  provider)

    }catch(err){
        console.log("something went wrong")
    }
    }

    const signin = async () => {
        try{
            await signInWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log('something went wrong')
        }
    }
    return (
        <>
        <div className='card'>
            <h2>Login</h2>
            <div className='email-login'>
                <p>Email</p>
                <input placeholder='john@gmail.com' type='email' onChange={(e) => setEmail(e.target.value)} />
                 <p>Password</p>
                <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                <h4 className='forgot-pwd'>Forgot Password?</h4>
                
                <button onClick={signin}>Signin</button>

            </div>
        <p>Don't have an account? <Link to='/signup'>Signup</Link> </p>
            <br />
            <p>or</p>
            <br />

        <GoogleButton onClick={googleauth} />

        </div>
        </>
    )
}

export default Signin