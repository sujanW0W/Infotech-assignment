import React from 'react'
import './nav.css'

export default function Nav() {    

    return(
        <div className='nav-outer'>
            <div className = 'nav-head'>
                <img src={process.env.PUBLIC_URL+'logo.svg'} alt="NA" />
            
                <div className='nav-clickables'>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About</a> </li>
                        <li className='serv'>
                                <a href="#">
                                    <span> Services </span>
                                    <img src={process.env.PUBLIC_URL+'arrow.svg'} alt="" />
                                </a>
                            <div className='dropdown'>
                                Hello World!
                            </div>
                        </li>
                        <li> <a href="#">Blogs</a> </li>
                        <li> <a href="#">Contact</a> </li>
                    </ul>
                
                   <div className='login-div'>
                        <img src={process.env.PUBLIC_URL+'vector.svg'} className='vector' alt="" />
                        <button className='login'>
                            Login
                        </button>
                   </div>
                </div>
            </div>  
        </div>
    )
}