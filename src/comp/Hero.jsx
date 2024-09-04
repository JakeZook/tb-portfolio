import React from "react";
import { motion } from "framer-motion";

import BG from "../assets/BG.png";
import BloomingAnimation from "./BloomingAnimation";
import Header from "./Header";

const Hero = () => {
	return (
		<div
			className="hero min-h-screen items-start"
			style={{ backgroundImage: `url(${BG})` }}
		>
			<motion.div
				className="hero-content flex-col lg:flex-row-reverse max-sm:gap-0"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 1 }}
			>
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
					<div className="flex max-lg:hidden ml-10 absolute bottom-auto mt-72">
						<div>
							<BloomingAnimation
								reverse={false}
								petalColor="bg-violet-300"
								centerColor="bg-amber-500"
							/>
						</div>
					</div>
				</div>
				<div className="lg:mr-10 max-lg:flex max-lg:flex-col justify-center items-center lg:mt-48">
					<Header header="Taylor Beers" side="left" />
					<p className="py-6 text-md max-lg:text-center md:mr-12 text-2xl text-white lg:border-l-4 lg:border-primary lg:pl-4 drop-shadow-lg my-3 font-playfair max-sm:bg-black max-sm:bg-opacity-45">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-lg btn-primary hover:scale-110 hover:text-white font-playfair w-1/3 max-sm:w-full">
						Contact Me!
					</button>
				</div>
				<div className="flex justify-center lg:hidden mt-6 max-lg:ml-[12.5rem] max-sm:ml-16">
					<BloomingAnimation
						reverse={false}
						petalColor="bg-accent"
						centerColor="bg-yellow-500"
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
