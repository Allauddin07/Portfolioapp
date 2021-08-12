import React from 'react'
import img from '../images/img1.jpg'
import Typed from 'react-typed'

export default function Home() {
    return (
        <>

            <header className="mt-5 pt-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <h1 className="mb-4 font-weight-bold">I build
                                <span className="text-info pl-2">website</span><br/>that build your business
          </h1>
                                <p className="mb-4 pb-2 ">
                                <Typed
                                    strings={["JavaScript", "React", "Redux", "Node.js", "Express.js"]}
                                    typeSpeed={30}
                                    backSpeed={60}
                                    loop /> 
                                </p>
                                
                                <div>
                                    <a href="#contact" className="text-center btn btn-outline-dark btn-lg btn-block">Contact Us</a>
                                </div>
        </div>

                            <div className="col-md-6 im col-12  d-md-block">
                                <img src={img} alt="tours pics" className="img-fluid" />
                            </div>

                        </div>
                    </div>
  </header>
        </>
            )
}
