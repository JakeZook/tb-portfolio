import React, { useRef } from "react";
import "./Page.css";

const Carousel = ({ images, header }) => {
	const carouselRef = useRef(null);

	const handlePrev = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({
				left: -500,
				behavior: "smooth",
			});
		}
	};

	const handleNext = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({
				left: 500,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative">
			<h1 className="text-center text-white text-3xl p-0 font-pacifico outlined-doubled underline">
				{header}
			</h1>
			<div
				ref={carouselRef}
				className="carousel carousel-center bg-emerald-900 rounded-box max-w-fit space-x-4 p-10 flex overflow-x-auto scroll-smooth"
			>
				{images.map((img, i) => (
					<div key={i} className="carousel-item flex-shrink-0">
						<a href={img} target="_blank" rel="noopener noreferrer">
							<img
								src={img}
								alt={`carousel image ${i}`}
								className="object-cover w-64 h-64"
								style={{ boxShadow: "-5px 5px 5px rgba(0,0,0,1)" }}
							/>
						</a>
					</div>
				))}
			</div>
			<button
				className="absolute top-[55%] left-2 transform -translate-y-1/2 bg-primary p-2 rounded-full hover:scale-125 hover:bg-secondary hover:text-white max-sm:hidden"
				onClick={handlePrev}
			>
				❮
			</button>
			<button
				className="absolute top-[55%] right-2 transform -translate-y-1/2 bg-primary p-2 rounded-full hover:scale-125 hover:bg-secondary hover:text-white max-sm:hidden"
				onClick={handleNext}
			>
				❯
			</button>
		</div>
	);
};

export default Carousel;
