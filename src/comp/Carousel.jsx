const Carousel = ({ images }) => {
	return (
		<div className="carousel carousel-center bg-emerald-950 rounded-box max-w-fit space-x-4 p-4">
			{images.map((img, i) => (
				<div key={i} className="carousel-item">
					<img
						src={img}
						alt="carousel image"
						className="rounded-box drop-shadow-[-5px_5px_5px_rgba(0,0,0,1)] object-cover w-64 h-64"
					/>
				</div>
			))}
		</div>
	);
};

export default Carousel;
