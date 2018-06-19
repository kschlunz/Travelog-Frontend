import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { List, Header } from 'semantic-ui-react'


const TripList = (props) => {



    return (
      

      <List>
            <List.Item>
            <List.Icon name='marker' />
              <List.Content>
            <List.Header as='a'>
              <h1><Link to={`/trips/${props.tripData.tripID}`}>{props.tripData.name}</Link></h1>
              </List.Header>

            </List.Content>
            </List.Item>
      </List>





  )
}

export default TripList
