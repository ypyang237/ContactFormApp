import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm';
import { bindActionCreators } from 'redux';
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
                        <span>+44 207 117 2973 </span>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Sales</strong>
                        <span>sales@rotageek.com</span>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Support</strong>
                        <span> support@rotageek.com</span>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Press</strong>
                        <span> sofie@rotageek.com</span>
                      </p>
                      <p className="table--list">
                        <strong className="table--list-name">Follow Us</strong>
                        <span>  fontAwesome icons </span>
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
