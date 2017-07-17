import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Submissions.css'

class Submissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedSubmissions: []
    };
  }

  componentDidMount() {
    fetch('/api/AllSubmissions')
    .then((response)=> {
      if (response.status >= 400) {
        return response.json()
      }
      return response.json()
    })
    .then((json) => {
      if(json.error !== undefined) {
         console.log('err', json.error)
       }
       this.setState({ savedSubmissions : json.data })
    })
  }

  renderSubmissions() {
   let allSubmissions = this.state.savedSubmissions.map((submission) => {
    return (
      <tbody>
        <tr>
          <td>{submission.name}</td>
          <td>{submission.phone}</td>
          <td>{submission.email}</td>
          <td>{submission.enquiry}</td>
        </tr>
      </tbody>
    )
   })

   return (
      <div className="row">
        <div className="col-md-12">
          <Table striped bordered condensed hover className="table--bordered" >
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Enquiry</th>
              </tr>
            </thead>
          {allSubmissions}
          </Table>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <section className="content--submissions">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="header-white">Submissions</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content--submissions">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {this.renderSubmissions()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Submissions;
