import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-6 offset-xs-3 mt-5">
          <div className="card bg-warning mt-2 text-center">
            <div className="card-body">
              <h5 className="card-title">Hey! Looks like you don&#39;t have a saving group yet</h5>
              <p className="card-text">Click below to start and make yourself a group</p>
              <Link to="/create-saving-group" className="btn btn-primary">Create Saving Group</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;