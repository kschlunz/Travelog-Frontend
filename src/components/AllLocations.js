import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

const AllLocations = (props) => {


    return (
      <List>
        <List.Item>
        <List.Icon name='marker' className="marker"/>
      <List.Content>
        <List.Header as='a'>
          <Link to={`/places/${props.tripData.locationID}`}><h1 className="placename">{props.tripData.location}</h1></Link>
        </List.Header>
      </List.Content>
      </List.Item>
      </List>


  )
}

export default AllLocations
