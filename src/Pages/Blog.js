import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import alldata from '../components/assets/alldata';
import { FaBookmark, FaComment, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa';
import "./CSS/blog.css"
import Navmain from '../components/Navbar/mainnavbar/Navmain';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import {MdOutlineBookmarkAdd ,MdMoreHoriz,MdBookmarkAdd } from 'react-icons/md'
import { UseBookmarkContext } from '../context/BookMarkContext';
import { FcLike } from "react-icons/fc";
const Blog = () => {
    const {blogId} = useParams();
    const blog = alldata.find((e) => e.id === Number(blogId))
    const {blogIds,setblodId} = UseBookmarkContext()
    const [Islike,setIslike] = useState(false)
    const [Isbookmark,setIsbookmark] = useState(false)

    const AddtoBookmark = () => {
        blogIds.push(parseInt(blogId))
        setIsbookmark(true)
    }
    const RemoveBookMark = () => {
        blogIds.pop(parseInt(blogId))
        setIsbookmark(false)
    }
  return (
    <>
    <Navmain />
      <div className='blog-container'>
            <div className='title'>
                <p>{blog.title}</p>
            </div>
                <div className='blog-info'>
                    <div className='author'>
                       <img src={blog.img} alt='pic' />
                       <div className='author-info'>
                        <p>Max toofan</p>
                        <p>jul 5 , 2023</p>
                       </div>
                    </div>
                    <div className='blog-reach'>
                        <div className='more'>
                            <p>{Islike? <FcLike className='icon' onClick={() => {setIslike(false);blog.likes = blog.likes-1} }  /> : <FaRegHeart className='icon' onClick={() => {setIslike(true); blog.likes = blog.likes+1}} />  } </p>
                            <p>{blog.likes}</p>
                            <p><FaRegComment className='icon' /></p>
                        </div>
                        <div className='more'>
                            <p >{Isbookmark ? <MdBookmarkAdd className='icon' onClick={RemoveBookMark}/>  : <MdOutlineBookmarkAdd onClick={AddtoBookmark} className='icon' />} </p><p><FaRegShareFromSquare className='icon' /></p><p><MdMoreHoriz className='icon' /></p>
                        </div>
                    </div>
            </div>
            <div className='blog-body'>
                <div className='img'><img src={blog.img} /></div>
                    <p><b>Lorem Ipsum:</b></p>

                    <p><b>Laboris deserunt enim esse occaecat:</b></p>

                    <p>Nisi enim irure nulla in anim cillum Lorem eiusmod deserunt minim magna consequat.</p>

                    <p><b>Veniam sint aliqua reprehenderit labore irure sit.</b></p>

                    <ol>
                        <li><b>Nostrud proident cupidatat et duis laborum adipisicing culpa.</b>
                            <ul>
                                <li>Enim magna adipisicing tempor sint irure minim.</li>
                                <li>Amet laborum veniam tempor dolore officia labore.</li>
                                <li>Laboris fugiat qui do sit.</li>
                            </ul>
                        </li>
                        <li><b>Mollit elit minim sint id ipsum dolor deserunt nulla tempor adipisicing cupidatat officia.</b>
                            <ul>
                                <li>Ut duis culpa deserunt pariatur quis tempor excepteur laborum velit ea dolore esse laborum sint.</li>
                                <li>Ipsum amet nisi esse enim.</li>
                            </ul>
                        </li>
                        <li><b>Esse Lorem duis ex sunt non nisi reprehenderit reprehenderit:</b>
                            <ul>
                                <li>Elit officia esse sit anim sint magna duis quis tempor tempor.</li>
                                <li>Fugiat ad voluptate magna eiusmod elit occaecat.</li>
                            </ul>       
                        </li>
                        <li><b>Mollit deserunt sunt ex ex commodo et sint consequat aliqua labore enim.:</b>
                            <ul>
                                <li>Magna elit et velit veniam veniam labore irure veniam veniam anim incididunt excepteur sunt..</li>
                                <li>Proident incididunt Lorem tempor irure nulla ex exercitation eu eiusmod.</li>
                            </ul>
                        </li>
                        <li><b>Ad laborum culpa ad velit adipisicing cillum et laborum velit minim aute pariatur laboris ut.:</b>
                            <ul>
                                <li>Labore veniam commodo ut incididunt ad ut nostrud magna quis magna officia reprehenderit.</li>
                                <li>Lorem officia laboris est officia eu officia officia.</li>
                            </ul>
                        </li>
                        <li><b>Enim non pariatur anim tempor excepteur.</b>
                            <ul>
                                <li>Ad id occaecat est in ea labore non ipsum aliqua nostrud Lorem pariatur non exercitation.</li>
                                <li>Lorem aute id et culpa ullamco consequat cillum ex aute nisi Lorem.</li>
                            </ul>
                        </li>
                        <li><b>Ea laboris Lorem non nulla cupidatat id ut ex fugiat id est.</b>
                            <ul>
                                <li>Duis consequat qui duis culpa ea ut nulla ipsum elit voluptate nostrud aliqua et.</li>
                                <li>Ut in eu anim ut sint cillum reprehenderit occaecat esse nostrud commodo incididunt deserunt.</li>
                            </ul>
                        </li>
                        <li><b>Id cillum Lorem est cillum ea labore anim laboris mollit Lorem.:</b>
                            <ul>
                                <li>Tempor adipisicing velit ex deserunt do incididunt officia.</li>
                                <li>Officia cillum esse duis incididunt dolore elit incididunt sunt sit id nisi proident.</li>
                            </ul>
                        </li>
                        <li><b>Cupidatat duis exercitation ipsum eu cupidatat aliquip eiusmod duis ipsum est.</b>
                            <ul>
                                <li>Culpa id aute est consectetur quis laborum aliquip fugiat commodo dolor exercitation adipisicing.</li>
                                <li>Dolore anim reprehenderit sit sit incididunt ullamco et officia anim nostrud pariatur.</li>
                            </ul>
                        </li>
                        <li><b>Sunt aute excepteur anim dolore velit sint enim.:</b>
                            <ul>
                                <li>Voluptate aliquip non culpa ut do non sit cupidatat cillum est eiusmod.</li>
                                <li>Aliqua laboris nostrud do eu velit cillum proident voluptate aliquip excepteur esse elit.</li>
                            </ul>
                        </li>
                    </ol>
                    <p><b>Aute cupidatat fugiat culpa pariatur irure deserunt in laborum dolore.</b></p>
                    <p>Sit Lorem deserunt esse mollit elit cillum laboris veniam ullamco nostrud excepteur est magna velit.</p>
                    </div>
            <div className='recommendation'>

            </div>
            
      </div>
      <div className='footer'>
                <ul>
                    <li>Help</li>
                    <li>Status</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Privacy</li>
                    <li>Terms</li>

                </ul>
            </div>
    </>
  
  )
}

export default Blog