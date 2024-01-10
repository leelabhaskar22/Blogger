import React from 'react'
import "./mainnav.css"
import { auth } from '../../../config/firebase'
import {FaRegBookmark} from "react-icons/fa"
import { Link } from 'react-router-dom'
import defaultpic from "../../assets/default.jpeg"
import { UseBookmarkContext } from '../../../context/BookMarkContext';

const Navmain = () => {
    const {blogIds,setblodId} = UseBookmarkContext()

  return (
    <div className='Navbar'>
        <div className='logo'>
          <Link to='/' style={{textDecoration:'none'}} > <h2>BLOGGER</h2> </Link>
        </div>
        <div className='profile'>
            <div className='links'>
               <p className='wishlist'><FaRegBookmark style={{color:'gray'}}  /><p>{blogIds.length}</p></p>
                <div  className='pic'>
                    <img src={defaultpic} alt={defaultpic} />
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Navmain