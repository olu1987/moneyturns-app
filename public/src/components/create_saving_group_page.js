import React, { Component } from 'react';
import SavingGroupForm from '../containers/saving_group_form';

class CreateSavingGroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6 pt-2 offset-sm-2 offset-md-3 form-wrap saving-group">
            <SavingGroupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateSavingGroupPage;