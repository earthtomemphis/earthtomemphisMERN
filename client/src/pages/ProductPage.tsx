import axios from 'axios';
import * as React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { ProductType } from '../types';
import { baseUrl } from './HomePage';

const ProductPage = () => {
	const params = useParams();

	const [product, setProduct] = React.useState({
		_id: '1',
		name: 'Airpods Wireless Bluetooth Headphones',
		image: '/images/airpods.jpg',
		description:
			'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
		brand: 'Apple',
		category: 'Electronics',
		price: 89.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	});

	React.useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(
				`${baseUrl}/api/products/${params.id}`
			);

			setProduct(data);
		};

		fetchProduct();
	}, []);

	return (
		<>
			<Link className="btn btn-dark my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product?.image} alt={product?.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product?.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product?.rating as number}
								text={`${product?.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							Price: ${product?.price}
						</ListGroup.Item>
						<ListGroup.Item>
							Description: {product?.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product?.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item className="d-grid gap-2">
								<Button
									className="btn btn-primary"
									type="button"
								>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductPage;
