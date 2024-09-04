import React from "react";
import { motion } from "framer-motion";

import { Hero, Carousel, About, Resume } from "./comp";
import { ImageSet1, ImageSet2, ImageSet3 } from "./Utils/Index";

import BG from "./assets/BG.png";

const App = () => {
	return (
		<div className="bg-emerald-900">
			<Hero />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 1 }}
				className="flex justify-center my-6"
			>
				<Carousel images={ImageSet1} />
			</motion.div>
			<div style={{ backgroundImage: `url(${BG})` }}>
				<About />
			</div>
			<motion.div
				className="flex justify-center my-6"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 1 }}
			>
				<Carousel images={ImageSet2} />
			</motion.div>
			<Resume />
			<motion.div
				className="flex justify-center mt-6"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 1 }}
			>
				<Carousel images={ImageSet3} />
			</motion.div>
		</div>
	);
};

export default App;
