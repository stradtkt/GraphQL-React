import React from 'react';
import classNames from 'classnames';

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
    return (
        <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h4>Mission: <span className={classNames({
                  'green-text accent-3': launch_success,
                  'deep-orange-text accent-3': !launch_success
              })}>{mission_name}</span></h4>
              <p>Date: {launch_date_local}</p>
            </div>
            <div className="card-action">
                <button className="btn orange darken-3 waves-effect waves-light">Launch Details</button>
            </div>
          </div>
        </div>
      </div>
    )
}
