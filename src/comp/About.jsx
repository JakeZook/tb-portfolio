import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/instagram";

import Header from "./Header";
import BG from "../assets/BG.png";
import Profile from "../assets/Profile.jpg";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 1 }}
			className="hero items-start py-12"
			style={{ backgroundImage: `url(${BG})` }}
		>
			<div className="hero-content flex-col lg:flex-row max-sm:gap-0">
				<div className="avatar hidden lg:flex">
					<div className="ring-primary ring-offset-black w-72 rounded-full ring ring-offset-2">
						<img src={Profile} alt="Profile Pic" />
					</div>
				</div>
				<div className="lg:ml-10 flex flex-col items-center lg:justify-end lg:items-end">
					<Header header="About" />
					<p className="py-6 text-md text-end max-lg:text-center md:ml-12 text-2xl text-white lg:border-r-4 lg:border-primary lg:pr-4 drop-shadow-lg my-3 font-playfair max-sm:bg-black max-sm:bg-opacity-45">
						With over a decade of industry experience, I’ve had the privilege of
						freelancing for prestigious companies including East Olivia, Birch
						Event Designs, 3 Petals, Stone Blossom, and many others. My
						expertise encompasses every aspect of high-end weddings and events,
						from meticulous preparation and processing to exquisite design and
						flawless setup.
					</p>
					<button className="btn btn-lg btn-primary hover:scale-110 hover:text-white font-playfair w-1/3 max-sm:w-full">
						<SocialIcon
							bgColor="transparent"
							fgColor="currentColor"
							url="www.instagram.com"
						/>
						Instagram
					</button>
				</div>
				<div className="flex justify-center lg:hidden pt-24">
					<div className="avatar">
						<div className="ring-primary ring-offset-black w-72 rounded-full ring ring-offset-2">
							<img src={Profile} alt="Profile Pic" />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
