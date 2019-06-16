import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
    return (
        <div className="row">
        <div className="col s12 m12">
          <div className="card hoverable blue-grey darken-1">
            <div className="card-content white-text">
              <h4>Mission: <span className={classNames({
                  'green-text accent-3': launch_success,
                  'deep-orange-text accent-3': !launch_success
              })}>{mission_name}</span></h4>
              <p>Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
            </div>
            <div className="card-action">
                <Link className="btn orange darken-3 waves-effect waves-light" to={`/launch/${flight_number}`}>Launch Details</Link>
            </div>
          </div>
        </div>
      </div>
    )
}
