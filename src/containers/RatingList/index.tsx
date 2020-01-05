import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Rating from 'react-rating'
import Button from 'react-bootstrap/Button'

interface RatingListProps {
    onSelect?: () => void,
    reset?: () => void
}

export default class RatingList extends React.Component<RatingListProps> {
    render() {
        return (
            <ListGroup as="ul">
                <br />
                <ListGroup.Item as="li" active>Filter by Rating</ListGroup.Item>
                <ListGroup.Item>
                    <Rating initialRating={0} onClick={this.props.onSelect} />
                </ListGroup.Item>
                <br />
                <Button onClick={this.props.reset} variant="light">Reset</Button>
            </ ListGroup >
        )
    }
}
