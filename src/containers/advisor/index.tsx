import React from 'react'
import Card from 'react-bootstrap/Card'
import './advisor.scss'
import Rating from 'react-rating'

interface AdvisorProps {
    id: number,
    name?: string;
    title?: string;
    bio?: string;
    rating: number
}

export default class Advisor extends React.Component<AdvisorProps> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            <i>{this.props.bio}</i>
                            <span>{this.props.title}</span>
                            <br />
                            <Rating placeholderRating={this.props.rating} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    }
}