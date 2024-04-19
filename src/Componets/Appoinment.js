import React from 'react'

const Appoinment = () => {
    return (
        <>
            <section class="appoinment-area section-gap relative">
                <div class="container">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-lg-6 no-padding appoinment-right">
                            <h1 class="text-white">
                                Book an <br />
                                Appoinment
                            </h1>
                            <form class="appoinment-form" id="myForm" action="#">
                                <div class="row">
                                    <div class="col-lg-12 d-flex flex-column">
                                        <input name="patient-name" placeholder="Patient Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Patient Name'" class="form-control mt-20" required="" type="text" />
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column">
                                        <input name="phone" placeholder="Phone" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone'" class="form-control mt-20" required="" type="text" />
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column">
                                        <input name="email" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" class="form-control mt-20" required="" type="email" />
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column">
                                        <input name="dob" placeholder="Date of birth" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Date of birth'" class="form-control mt-20" required="" type="text" id="datepicker" />
                                    </div>
                                    <div class="col-lg-6 d-flex flex-column">
                                        <input name="appoinment-date" placeholder="Appoinment date" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Appoinment date'" class="form-control mt-20" required="" type="text" id="datepicker2" />
                                    </div>
                                    <div class="col-lg-12 flex-column">
                                        <textarea rows="5" class="form-control mt-20" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
                                    </div>

                                    <div class="col-lg-12 d-flex justify-content-end send-btn">
                                        <button class="primary-btn primary mt-20 text-uppercase ">Confirm booking</button>
                                    </div>

                                    <div class="alert-msg"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Appoinment;