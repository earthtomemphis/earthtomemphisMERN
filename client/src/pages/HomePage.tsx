import axios from 'axios';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { ProductType } from '../types';

export const baseUrl = 'http://127.0.0.1:5000';

const HomePage = () => {
	const [products, setProducts] = React.useState<ProductType[]>([]);

	React.useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get(`${baseUrl}/api/products`);

			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomePage;
