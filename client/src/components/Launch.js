import React, {Fragment, Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export class Launch extends Component {
    render() {
        let {flight_number} = this.props.match.params;
        flight_number = parseInt(flight_number);
        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>;
                            if(error) console.log(error);
                            const {mission_name, flight_number, launch_year, launch_success, rocket: {rocket_id, rocket_name, rocket_type}} = data.launch;
                            return <Fragment>
                                <h1><strong>Mission: </strong> {mission_name}</h1>
                                <h4>Launch Details</h4>
                                <ul className="collection">
                                    <li className="collection-item">Flight Number: {flight_number}</li>
                                    <li className="collection-item">Launch Year: {launch_year}</li>
                                    <li className="collection-item">Launch Success: {launch_success}</li>
                                    <li className="collection-item">
                                        <ul className="collection">
                                            <li className="collection-item"><h5>Rocket</h5></li>
                                            <li className="collection-item">ID: {rocket_id}</li>
                                            <li className="collection-item">Name: {rocket_name}</li>
                                            <li className="collection-item">Type: {rocket_type}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Launch;
