import React from 'react'
import {Navbar,Nav, NavDropdown, NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
return (
	<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
		<NavbarBrand as={NavLink} to="/">
			Task Manager
		</NavbarBrand>
		<NavbarToggle aria-controls="responsive-navbar-nav"/>
		<NavbarCollapse id="responsive-navbar-nav">
			<Nav className='me-auto'>
				<Nav.Link as={NavLink} to="/projects">
					Proyectos
				</Nav.Link>
				<NavDropdown title="Admin">
					<NavDropdown.Item as={NavLink} to="/admin/users">Usuarios</NavDropdown.Item>
				</NavDropdown>				
			</Nav>
			<Nav>
				<Nav.Link as={NavLink} to="/login">Iniciar Sesion</Nav.Link>
				<Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
				<Nav.Link as={NavLink} to="/account">Mi cuenta</Nav.Link>
			</Nav>
		</NavbarCollapse>
	</Navbar>
)
}
