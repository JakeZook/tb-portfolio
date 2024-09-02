import React from "react";
import { motion } from "framer-motion";
import { BloomingAnimation, Carousel, About } from "./comp";

const App = () => {
	const header = "Taylor Beers";
	return (
		<div className="bg-emerald-950">
			<div className="hero bg-emerald-950 min-h-screen max-lg:items-start">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex flex-col">
						<div className="flex max-lg:hidden">
							<div>
								<BloomingAnimation
									reverse={false}
									petalColor="bg-primary"
									centerColor="bg-yellow-500"
								/>
							</div>
							<div className="mt-24">
								<BloomingAnimation
									reverse={true}
									petalColor="bg-accent"
									centerColor="bg-yellow-500"
								/>
							</div>
						</div>
						<div className="flex max-lg:hidden ml-10 absolute bottom-4">
							<div>
								<BloomingAnimation
									reverse={false}
									petalColor="bg-violet-300"
									centerColor="bg-amber-500"
								/>
							</div>
						</div>
					</div>
					<div className="lg:mr-10 max-lg:flex max-lg:flex-col justify-center items-center mt-14 lg:mt-48">
						<h1 className="text-5xl font-bold text-primary font-pacifico whitespace-pre max-lg:text-center">
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
						<p className="py-6 text-md max-lg:text-center md:mr-12 text-md text-secondary lg:border-l-4 lg:border-primary lg:pl-4 drop-shadow-lg my-3 font-playfair">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-lg btn-primary hover:scale-110 hover:text-white font-playfair w-1/3 max-sm:w-full">
							Contact Me!
						</button>
					</div>
					<div className="flex justify-center lg:hidden mt-6 max-lg:ml-[12.5rem] max-sm:ml-16">
						<BloomingAnimation
							reverse={false}
							petalColor="bg-pink-500"
							centerColor="bg-yellow-500"
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<Carousel />
			</div>
			<div className="bg-emerald-950">
				<About />
			</div>
		</div>
	);
};

export default App;
