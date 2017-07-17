import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './contactForm.css';

let enquirySubmitted = false;
let enquiryError = false;

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number'
  }
  return errors
};

const renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} type={type} placeholder={placeholder} className="form-control"/>
    {touched && ((error && <div className={`text-danger validation`}>{error}</div>) || (warning && <div className={`text-warning validation`}> {warning} </div>))}
  </div>
);

class ContactForm extends Component {

  enquirySubmit(enquiryValue, param, props) {
    props.saveEnquiry(enquiryValue)
    props.sendSubmission(enquiryValue, function clearEnquiryForm(err, res) {
      if (err) {
        enquiryError = true;
      } else {
        enquirySubmitted = true;
        props.reset();
      }
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div className="content_paddedBox">
        { !enquiryError &&
          <form onSubmit={handleSubmit(this.enquirySubmit)}>
            <div className="form-group form--contact">
              <Field
                placeholder="Name"
                className="form-control"
                name="name"
                component={renderField}
                type="text" />
            </div>
            <div className="form-group form--contact">
              <Field
                placeholder="Phone"
                className="form-control"
                name="phone"
                component={renderField}
                type="text" />
            </div>
            <div className="form-group form--contact">
              <Field
                placeholder="Email"
                className="form-control"
                name="email"
                component={renderField}
                type="text" />
            </div>
            <div className="form-group form--contact">
              <Field
                  placeholder="Details"
                  className="form-control"
                  name="enquiry"
                  component="textArea"
                  type="text"
                  style={{height: '70px'}} />
            </div>
            <div className="row ">
              <div className="row-btn--submit ">
                <button type="submit" className="btn btn-block btn--submit">Send</button>
              </div>
            </div>
          </form>
        }
        { enquirySubmitted && !enquiryError &&
          <div className="form-msg text-center">
            <h2>Thank you for your enquiry!</h2>
            <h4>We will be in touch shortly.</h4>
          </div>
        }
      </div>
    )
  }
}

ContactForm = reduxForm({
  form: 'ContactRotageek',
  validate
})(ContactForm);

export default ContactForm;
