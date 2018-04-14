import React from 'react';
import _ from 'lodash';

export default ({ _id, title, payment, description }) => {
  return (
    <tr key={_id}>
      <td>
        <div className="row">
          <div className="col-sm-6">
            <h1>{ title }</h1>
            <h2>Payment Level - £{ payment }</h2>
            <p>{ description }</p>
          </div>
          <div className="col-sm-6 group-actions">
            <p>
                Current Members
            </p>
            <a href="#" className="btn btn-lg btn-primary text-uppercase mb-1">Join group</a>
            <a href="#" className="btn btn-lg btn-danger text-uppercase mb-1 ml-1">Leave group</a>
          </div>
        </div>
      </td>
    </tr>
    )
}