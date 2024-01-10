import React from 'react'
import './item.css'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Item = (props) => {
  console.log(props)
  return (
    <div className='item-container'>
        <div className='img'>
          <Link to={`/blogs/${props.id}`} ><img src={props.imageUrl} /></Link>  
        </div>
        <div className='info'>
            <h3>{props.title}</h3>
            <p>{props.body} </p>
        </div>
        <div className='other-info'>
            <p className='category'>{props.category}</p>
            <p className='likes'><FaHeart style={{color:'lightred'}}/>{props.likes}</p>

        </div>
    </div>
  )
}

export default Item