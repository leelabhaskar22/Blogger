import React from 'react'
import Item from '../Item/Item'
import "./foryou.css"
import  { followingData, forYouData, trendingData } from "../assets/data"
const Foryou = (props) => {
 const  array = {
    foryou : forYouData,
    trending : trendingData,
    following: followingData,
  }
  return (
    <div className='forcontainer'>
    {array[props.category].map((item,i) => {
        return  <Item key={i} id={item.id} title={item.title} imageUrl={item.img} body={item.body} category={item.category} likes={item.likes} />
    })}
    </div>
  )
}
  
export default Foryou