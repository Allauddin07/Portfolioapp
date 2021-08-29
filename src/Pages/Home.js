import React from 'react'

import Typed from 'react-typed'
import { NavLink } from 'react-router-dom'
import Carousal from '../component/Carousal'

export default function Home() {
    return (
        <>

            <header className="mt-5 pt-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 mg">
                            <div className="animate__animated animate__backInLeft">

                                <h1 className="mb-4 font-weight-bold">I build
                                    <span className="text-info pl-2">website</span><br />that build your business
                                </h1>
                            </div>
                            <p className="mb-4 pb-2 ">
                                Using

                                <Typed
                                    strings={["JavaScript", " React", "Bootstrap", "SCSS", "  Redux", "Node.js", "Express.js"]}
                                    typeSpeed={30}
                                    backSpeed={60}
                                    loop />
                            </p>

                            <div className="mt-3">

                                <NavLink exact to='/contact' className="text-center btn   btn-block animate__animated animate__lightSpeedInRight ">Contact Me</NavLink>

                            </div>
                        </div>

                        <div className="col-md-6 mt-3">
                            {/* <img src={img} alt="tours pics" className="img-fluid" /> */}
                            <Carousal />
                        </div>

                    </div>
                </div>






                


<div class="footer">
  
  <div className="footer-copyright text-center  p">© 2021 Copyright:
      <a href="https://www.linkedin.com/in/allauddin-allauddin-14452920b/"> LinkedIn</a>
    </div>
</div>

            </header>





        </>
    )
}
