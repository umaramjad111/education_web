import React from 'react'

export default function Contact() {
    return (
        <div>
            <section className="contact pt-5 mt-1">
                <div className="container">
                <div className="text-center">
                                <h4 className="display-5 fw-bold mt-3">Contact Us</h4>
                                <div className="underline mx-auto"></div>
                            </div>
                    <form action="" className="mt-2">
                        <div className="mb-3">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="" className="form-label">Enter Email</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name="" id=""  rows="5"></textarea>
                        </div>
                       <button className="btn btn-primary">Send Message</button>

                    </form>
                </div>
            </section>
        </div>
    )
}
