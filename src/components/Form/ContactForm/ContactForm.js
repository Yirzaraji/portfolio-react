import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <form>
    <h3 className="titleFormColor mb-4">
      <b>CONTACTEZ MOI.</b>
    </h3>
    <div className="form-group">
      <div className="row mb-1">
        <div className="col">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row mb-1">
        <div className="col">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row mb-1">
        <div className="col">
          <textarea className="form-control" placeholder="Message"></textarea>
        </div>
      </div>
    </div>
    <div className="form-group">
      <div className="row mb-1">
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default ContactForm;
