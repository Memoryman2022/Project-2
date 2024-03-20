import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const CarouselImg = ({ endPoint }) => {
	const [imgCar, setImgCar] = useState([]);

	useEffect(() => {
		axios
			.get(endPoint)
			.then((res) => {
				const apiData = res.data;
				setImgCar(apiData.map((img) => img.backdrop_path));
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Carousel fade indicators={false}>
			{imgCar &&
				imgCar.map((slide, index) => {
					return (
						<Carousel.Item key={index}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${slide}`}
								className="imgCar"
							/>
						</Carousel.Item>
					);
				})}
		</Carousel>
	);
};

export default CarouselImg;
