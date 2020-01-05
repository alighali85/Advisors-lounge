import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


interface AppNavbarProps {
	onSearch?: any
}

export default class AppNavbar extends React.Component<AppNavbarProps> {
	render() {
		return <>
			<div className="app-navbar">
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Advisors lounge</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.onSearch} />
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	}
}