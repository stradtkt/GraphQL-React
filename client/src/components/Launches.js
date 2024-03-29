import React, {Fragment, Component} from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }        
    }
`;

export default class Launches extends Component {
    render() {
        return (
            <Fragment>
                <MissionKey/>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>;
                            if(error) console.log(error);
                            
                            return <Fragment>
                                {
                                    data.launches.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch}/>
                                    ))
                                }
                            </Fragment>;
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}
