import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Group from '../components/group'

class SavingGroups extends Component {
  constructor(props) {
    super(props);
    this.props.fetchAllSavingGroups();
  }

  componentDidMount() {

  }

  renderGroups(group) {
    const { title, description, payment, _id } = group;

    return (
      <Group key={_id} title={title} description={description} payment={payment} _id={_id} />
    );
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr colSpan="2">
            <th>
              <h1 className="text-center display-4">Your Saving Groups</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.savingGroups.map(this.renderGroups)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savingGroups: state.savingGroups,
  };
};

function mapDispatchToProps(dispatch) {
  const { fetchAllSavingGroups } = actions;
  return bindActionCreators({ fetchAllSavingGroups }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavingGroups);
