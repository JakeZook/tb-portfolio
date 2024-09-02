import React from "react";
import { BloomingAnimation, Carousel } from "./comp";

const App = () => {
	const header = "Taylor Beers";
	return (
		<div className="bg-base-300">
			<div className="hero bg-base-300 min-h-screen max-lg:items-start">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex max-lg:hidden">
						<div>
							<BloomingAnimation
								reverse={false}
								petalColor="bg-pink-500"
								centerColor="bg-yellow-500"
							/>
						</div>
						<div className="mt-24">
							<BloomingAnimation
								reverse={true}
								petalColor="bg-purple-500"
								centerColor="bg-orange-500"
							/>
						</div>
					</div>
					<div className="mr-10 max-lg:flex max-lg:flex-col justify-center items-center max-lg:mt-14">
						<h1 className="text-5xl font-bold text-pink-500 font-pacifico whitespace-pre max-lg:text-center">
							{header.split("").map((char, index) => (
								<span
									key={index}
									className={`inline-block animate-wave ${
										index % 2 === 0 ? "delay-[300ms]" : "delay-[600ms]"
									}`}
								>
									{char}
								</span>
							))}
						</h1>
						<p className="py-6 max-lg:text-center md:mr-12 text-md text-accent lg:border-l-4 lg:border-green-500 lg:pl-4 drop-shadow-lg my-3 font-playfair">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-lg btn-primary hover:scale-110 hover:text-white font-playfair w-1/3 max-sm:w-full">
							Contact Me!
						</button>
					</div>
					<div className="flex justify-center lg:hidden mt-6 max-md:ml-8">
						<BloomingAnimation
							reverse={false}
							petalColor="bg-pink-500"
							centerColor="bg-yellow-500"
						/>
					</div>
				</div>
			</div>
			<div className="mt-48 bg-base-300">
				<Carousel />
			</div>
		</div>
	);
};

export default App;
