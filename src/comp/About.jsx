import { motion } from "framer-motion";

import Header from "./Header";
import Profile from "../assets/Profile.jpg";
import BG from "../assets/BG.png";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 1 }}
			className="hero items-start lg:py-24"
			style={{ backgroundImage: `url(${BG})` }}
		>
			<div className="hero-content flex-col lg:flex-row max-sm:gap-0">
				<img
					src={Profile}
					alt="Profile Pic"
					className="hidden lg:flex mask mask-circle"
				/>
				<div className="lg:ml-10 flex flex-col items-center lg:justify-end lg:items-end">
					<Header header="About" />
					<p className="py-6 text-md text-end max-lg:text-center md:ml-12 text-2xl text-white lg:border-r-4 lg:border-primary lg:pr-4 drop-shadow-lg my-3 font-playfair max-sm:bg-black max-sm:bg-opacity-45">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn btn-lg btn-primary hover:scale-110 hover:text-white font-playfair w-1/3 max-sm:w-full">
						Contact Me!
					</button>
				</div>
				<div className="flex justify-center lg:hidden mt-6">
					<img src={Profile} alt="Profile Pic" className="mask mask-circle" />
				</div>
			</div>
		</motion.div>
	);
};

export default About;
