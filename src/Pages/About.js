import React from 'react'


import img from '../images/img5.jpg'
// import "./About.css"

export default function Home() {
    return (
        <>

            <header className="">

                <div class="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 tt pt-5">

                            <div className="row z-depth-3 h-75" action="">
                                <div className="col-sm-4 imge bg-dark rounded-left">
                                    <div className="card-block text-center text-white">

                                        <img className="img-thumbnail rounded-circle  im" src={img} alt="" />
                                        <h3 className="font-weight-bold mt-4">Allauddin</h3>
                                        <h3 className="font-weight-bold mt-2"> 0225165668</h3>

                                        <h3 className="font-weight-bold mt-2">allauddinansari717@gmail.com</h3>
                                        


                                    </div>
                                </div>


                                {/* <div></div> */}

                                <div className="col-sm-8  imge d-flex align-items-center bg-white rounded-right">

                                     <div  className="ml-2 ">
                                     <p className="contact">ABOUT ME</p>
                                   <p>Hello! I am Allauddin. 
                                    I have recently finished my graduation with bachler degree in computer science. 
                                    I am full stack webdeveloper. Technology I use is MERN(MongoDB, Express, ReactJS, and NodeJS).
                                    I create responsive website that are displayed on all devices desktop and smartphones.
                                    Of course, before developing any webapp, Landing Page, Business Website, I need to have a ready-made project
                                    layout(sketch). and I am ready to do this for you, 

                                   </p>
                                    

                                     </div>
                                  



                                </div>




                            </div>




                        </div>
                    </div>
                </div>



            </header>

        </>
    )
}