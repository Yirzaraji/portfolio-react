import React from "react";
import ContactForm from "../../../Forms/ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => (
  <div className="container-fluid mt-5">
    <div className="row blocContact justify-content-center" id="ankor_contact">
      <div className="d-none d-sm-none d-md-none d-xl-block col-xl-3 text-center color titleColor position-relative rocket">
        <img
          src="images/iconrocket.png"
          alt="banner"
          className="position-absolute fixed-bottom img-fluid img-responsive img-responsive-custom"
        />
      </div>
      <div className="col-9 col-sm-5 col-xl-3 text-center d-flex align-items-center mt-3">
        <ContactForm />
      </div>
    </div>
  </div>
);

export default Contact;
