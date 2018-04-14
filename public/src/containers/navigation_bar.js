import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout(e) {
    e.preventDefault();
    this.context.router.push('/login');
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="list-inline mb-0">
        <li className="list-inline-item"><Link className="nav-item nav-link" to="/dashboard">Dashboard</Link></li>
        <li className="list-inline-item"><a onClick={this.logout.bind(this)} className="nav-item nav-link" href="#">Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="list-inline mb-0">
        <li className="list-inline-item"><Link className="nav-item nav-link" to="/signup">Signup</Link></li>
        <li className="list-inline-item"><Link className="nav-item nav-link" to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Moneyturns</Link>
      <div className="">
        { isAuthenticated ? userLinks : guestLinks }
      </div>
    </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps, { logout }
)(NavigationBar);