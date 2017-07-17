import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm';
import { connect } from 'react-redux';
import { saveEnquiry } from './redux/enquiries';

const mapDispatchToProps = (dispatch) => {
  return {
    saveEnquiry: (values, cb) => {
    console.log('mapDispatchToProps, values', values)
      dispatch(saveEnquiry(values, cb))
    }
  }
}

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

class ContactUs extends Component {

  sendSubmission(fields, cb) {
    fetch('/api/allSubmissions', {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(fields)
    })
    .then((response) => {
      if (response.status >= 400) {
        return response.json()
      }
      cb(null, response.json())
    })
    .catch((err)=>{
      console.error('Fetch ERROR:', err)
    });
  }

  render() {
    return (
      <div>
        <section className="content--contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="header-white">Get in Touch</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content--contact">
          <div className="container padding-md">
            <div className="row">
              <div className="col-md-5 col-md-push-6">
                <div className="content_paddedBox">
                  <h2>We’d love to hear from you</h2>
                    <hr />
                    <div className="table--contact">
                      <p className="table--list">
                        <strong className="table--list-name">Phone No.</strong>
                        <a href="tel:442071172973">
                          <i className={`fa fa-phone-square icons`}></i>
                          +44 207 117 2973
                        </a>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Sales</strong>
                        <a href="mailto:sales@rotageek.com">
                          <i className={`fa fa-envelope-open-o icons`}></i>
                          sales@rotageek.com
                        </a>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Support</strong>
                        <a href="mailto:support@rotageek.com">
                          <i className={`fa fa-commenting-o icons`}></i>
                          support@rotageek.com
                        </a>

                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Press</strong>
                        <a href="mailto:sofie@rotageek.com">
                          <i className={`fa fa-newspaper-o icons`}></i>
                          sofie@rotageek.com
                        </a>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Follow Us</strong>
                        <a href="https://twitter.com/Rotageek" target="_blank" className="icons">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://uk.linkedin.com/company/rotageek" target="_blank" className="icons">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </p>
                   </div>
                 </div>
               </div>
              <div className={`col-md-6 col-md-pull-5`}>
               <ContactForm saveEnquiry={this.props.saveEnquiry} sendSubmission={this.sendSubmission}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ContactUs = connect(
  null,
  mapDispatchToProps
)(ContactUs);

export default ContactUs;
