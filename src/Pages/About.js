import React from 'react'
import img from '../images/img3.jpg'

export default function About() {
    return (

        <>
            <div className="container  ">

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-item-center">
                        <div className="about">
                        <img src={img} alt="..." className="img-thumbnail rounded "/>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>

            </div>
        </>
    )
}
