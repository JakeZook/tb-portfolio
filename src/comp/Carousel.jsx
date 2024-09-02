import Arch from "../assets/Arch.jpg";
import Arch2 from "../assets/Arch2.jpg";
import Center from "../assets/Center.jpg";
import Chairs from "../assets/Chairs.jpg";
import Couple from "../assets/Couple.jpg";
import Roses from "../assets/Roses.jpg";
import Flowers from "../assets/Flowers.jpg";
import Isle from "../assets/Isle.jpg";
import Table from "../assets/Table.jpg";

const Carousel = () => {
	const images = [
		Arch,
		Arch2,
		Center,
		Chairs,
		Couple,
		Roses,
		Flowers,
		Isle,
		Table,
	];

	return (
		<div className="carousel carousel-center bg-base-300 rounded-box max-w-fit space-x-4 p-4">
			{images.map((img, i) => (
				<div key={i} className="carousel-item">
					<img
						src={img}
						alt="carousel image"
						className="rounded-box drop-shadow-[-5px_5px_5px_rgba(0,0,0,.5)] object-cover w-64 h-64"
					/>
				</div>
			))}
		</div>
	);
};

export default Carousel;
