import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  console.log('whats in state', state)
  // return {
  //   locations: state.locations
  // };
};

class Submissions extends Component {
  render() {
    return (
      <div>
        <section className="pageHeader">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Submissions</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


Submissions = connect(mapStateToProps)(Submissions);

export default Submissions;
