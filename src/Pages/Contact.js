import React, { useState } from 'react'
import './Contact.css'
// import img from '../images/growth.png'
import emailjs from 'emailjs-com';
export default function Contact() {
    const [state, setState] = useState('')
    const [st, setst] = useState(false)
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_512pw7a', 'template_rez29gp', e.target, 'user_8F3MivUoVXagXBaNXMWEr')
            .then((result) => {
                console.log(result.text);
                setst(true)
                setState("Your message has been sent successfully")
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <header className="mt-5 pt-3">
                <div className="container mt-5">
                    <div className="row align-items-center">

                        <div className="col-md-10 mx-auto">

                            
                            {st?<div class="alert alert-primary" role="alert">
                                <h2>{state}</h2>
                            </div>:<p></p>}

                            <div className="flx">

                                <div className="cnt">
                                    <p className="contact">CONTACT ME</p>
                                    <p>Please fill out this form</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="mt-3 box">

                                        <form onSubmit={sendEmail} className="frm">

                                            <div className="d-flex rs">
                                                <div className="d-flex flex-column fl ">
                                                    <div className="form-group ">

                                                        <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your name" />

                                                    </div>

                                                    <div className="form-group ph">

                                                        <input type="text" name="contact_number" className="form-control" id="phone" placeholder="Enter your Phone" />
                                                    </div>

                                                    <div className="form-group">

                                                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

                                                    </div>



                                                </div>



                                                <div className="d-flex th fl">


                                                    <div className="w-100">

                                                        <textarea rows="3" name="message" placeholder="please write your msg here!" className="form-control" id="exampleFormControlTextarea1" ></textarea>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end w-100">

                                                <div className="bt mb-5">
                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                    {/* <input type="submit" value="submit" /> */}
                                                </div>

                                            </div>


                                        </form>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </header>
        </div>
    )
}
