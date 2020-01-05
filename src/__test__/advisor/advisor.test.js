import React from 'react'
import { render } from '@testing-library/react'
import Advisor from '../../containers/advisor'


const AdvisorProps = {
    id: 1,
    name: 'testing_name',
    title: 'testing_title',
    bio: 'testing_bio',
    rating: 3
}

it('render the advisor card', () => {
    const { asFragment } = render(<Advisor {...AdvisorProps} />)
    expect(asFragment()).toMatchSnapshot()
})

it('has right title', () => {
    const { getByText } = render(<Advisor {...AdvisorProps} />)
    expect(getByText(AdvisorProps.title)).toHaveTextContent(AdvisorProps.title)
})