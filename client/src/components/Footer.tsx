import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
	const year: number = new Date().getFullYear();

	return (
		<footer>
			<Container>
				<Row>
					<Col className="text-center py-3">
						Copyright &copy; {year} earthtomemphis
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
