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
      <div className="ContactUs">
        <section className="pageHeader">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={`background-image section1`}>
          <div className="container padding-md">
            <div className="row">
              <div className={`col-md-5 col-md-push-6 center`}>
                <h2>We’d love to hear from you</h2>
                <p>Phone No.   +44 207 117 2973 </p>
                <p>Sales sales@rotageek.com</p>
                <p>Support support@rotageek.com</p>
                <p>Press sofie@rotageek.com</p>
                <p>Follow Us  fontAwesome icons </p>
               </div>
              <div className={`col-md-6 col-md-pull-5 dark-gray padding-md`}>
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
