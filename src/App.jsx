import React from "react";
import { motion } from "framer-motion";
import { BloomingAnimation, Header, Carousel, About, Diff } from "./comp";

const App = () => {
	return (
		<div className="bg-emerald-950">
			<div className="hero bg-emerald-950 min-h-screen max-lg:items-start">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex flex-col">
						<div className="flex max-lg:hidden">
							<div>
								<BloomingAnimation
									reverse={true}
									petalColor="bg-accent"
									centerColor="bg-yellow-500"
								/>
							</div>
							<div className="mt-24">
								<BloomingAnimation
									reverse={false}
									petalColor="bg-primary"
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
						<Header header="Taylor Beers" />
						<p className="py-6 text-md max-lg:text-center md:mr-12 text-2xl text-white lg:border-l-4 lg:border-primary lg:pl-4 drop-shadow-lg my-3 font-playfair">
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
							reverse={true}
							petalColor="bg-accent"
							centerColor="bg-yellow-500"
						/>
					</div>
				</div>
			</div>
			<div className="bg-emerald-950 mt-12">
				<Diff />
			</div>
			<div className="flex justify-center mt-12 max-sm:mt-32">
				<Carousel />
			</div>
			<div className="bg-emerald-950 lg:mx-96">
				<About />
			</div>
		</div>
	);
};

export default App;
