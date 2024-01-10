import React from 'react'
import { auth } from '../../config/firebase'
import Navmain from '../Navbar/mainnavbar/Navmain'
import Navcategory from '../Navbar/categorynavbar/Navcategory'
import "./style.css"
import Foryou from '../ForYou/Foryou'
import { useMainContext } from '../../context/CategoryContext'
const Home = () => {
  const { main } = useMainContext();
  return (
    <div>
      <Navmain />
      <Navcategory  />
      <Foryou category={main} />
        <button onClick={() => auth.signOut()}>Signout</button>
     
    </div>
  )
}
export default Home