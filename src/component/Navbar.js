import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {

    const [status, setStatus] = useState('close');






    return (
        <>


            <nav class=" navbar bg-dark navbar-expand-lg navbar-mainbg"> 
            

                
                <NavLink exact to='/' className="navbar-brand log navbar-logo">Allauddin</NavLink>



                <div
                    className="BurgerMenu__container navbar-toggler "
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    role="button"
                    onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
                >
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>

                <div
                    className={status==='open' ? '"collapse navbar-collapse"':"collapse navbar-collapse" }
                      id="navbarSupportedContent">
                    <ul className='navbar-nav ml-auto' >



                        <li className="nav-item"
                          data-toggle="collapse"
                        
                         onClick={() => setStatus('close')}>


                            <NavLink exact to='/' className="nav-link">Home</NavLink>

                        </li>

                        <li className="nav-item"  onClick={() => setStatus('close')}>


                            <NavLink exact to="/about" className="nav-link">About</NavLink>


                        </li>
                        {/* <li class="nav-item">
                            <NavLink exact to="/project" className="nav-link">Project</NavLink>
                        </li> */}
                        <li class="nav-item" 
                        onClick={() => setStatus('close')}  >


                            <NavLink exact to="/contact" className="nav-link" >Contact</NavLink>

                        </li>

                    </ul>
                </div>
            </nav>




            {/* <nav>
                <div className="header">

                    <div className="logo">
                        <h1>Allauddin</h1>
                    </div>

                    <div className="menu">

                        <div
                            className="BurgerMenu__container"
                            role="button"
                            onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
                        >
                            <i className={status}></i>
                            <i className={status}></i>
                            <i className={status}></i>
                        </div>

                        <div className="menu_link">
                            <ul>
                                <li>
                                    <NavLink exact to='/' className="link">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/about" className="link">About</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/contact" className="link" >Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/project" className="link">Project</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
